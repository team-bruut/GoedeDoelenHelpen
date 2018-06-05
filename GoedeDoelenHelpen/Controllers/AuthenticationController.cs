using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using GoedeDoelenHelpen.Data;
using GoedeDoelenHelpen.Extensions;
using GoedeDoelenHelpen.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace GoedeDoelenHelpen.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IEmailSender _emailSender;
        private readonly IViewRenderService _renderService;
        private readonly IPasswordHasher<ApplicationUser> _passwordHasher;
        private readonly IConfiguration _configurationRoot;

        public AuthenticationController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IEmailSender emailSender,
            IViewRenderService renderService,
            IPasswordHasher<ApplicationUser> passwordHasher,
            IConfiguration configurationRoot)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
            _renderService = renderService;
            _passwordHasher = passwordHasher;
            _configurationRoot = configurationRoot;
        }


        [AllowAnonymous]
        [HttpPost("[action]")]
        public async Task<ActionResult> Register([FromBody]RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser {
                    UserName = model.Username,
                    Email = model.Username,
                    NameInsertion = "",
                    FirstName = "Barld",
                    LastName = "Boot"
                };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
                    // Send an email with this link
                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
                    var activationMailModel = new ActivationMailModel { ActivationLink = callbackUrl, Name = model.Username };
                    var emailBody = _renderService.RenderToString("~/Mail/ActivationMail.cshtml", activationMailModel); 
                    await _emailSender.SendEmailAsync(model.Username, "Bevestig je account", emailBody);
                    // await _signInManager.SignInAsync(user, isPersistent: false);
                    return Ok();
                }
            }

            // If we got this far, something failed, redisplay form
            return this.BadRequest();
        }

        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody]RegisterViewModel model)
        {
            // Clear the existing external cookie to ensure a clean login process
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, true, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    return Ok();
                }
                return Unauthorized();
            }

            // If we got this far, something failed, redisplay form
            return Unauthorized();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AssignFB([FromBody]FacebookModel model) {
            ApplicationUser user = await this.GetApplicationUserAsync(_userManager);
            List<EventUser> eventUsers = user.EventUsers.Where(eu => eu.EventId == new Guid(model.EventId)).ToList();
            if (user != null) { 
                if (user.FacebookRecords.Count == 0) {
                    try {
                        user.FacebookRecords.Add(new FacebookRecord {
                            Id = new Guid(model.UserId),
                            ExpiresIn = model.ExpiresIn,
                            AccessToken = model.AccessToken,
                            SignedRequest = model.SignedRequest,
                            TimeStamp = DateTime.Now });

                            return Ok();
                    } catch {
                        return BadRequest();
                    }
                } else {
                    return BadRequest();
                }
            } else {
                return Unauthorized();
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> CreateToken([FromBody]RegisterViewModel model)
        {
            var user = await _userManager.FindByEmailAsync(model.Username);
            if(user == null)
            {
                return Unauthorized();
            }
            if(_passwordHasher.VerifyHashedPassword(user, user.PasswordHash, model.Password) == PasswordVerificationResult.Success)
            {
                var userClaims = await _userManager.GetClaimsAsync(user);
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                }.Union(userClaims);

                var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configurationRoot["JwtSecurityToken:key"]));
                var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

                var jwtSecurityToken = new JwtSecurityToken(
                    issuer: _configurationRoot["JwtSecurityToken:Issuer"],
                    audience: _configurationRoot["JwtSecurityToken:Audience"],
                    claims: claims,
                    expires: DateTime.UtcNow.AddDays(7),
                    signingCredentials: signingCredentials
                    );
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken),
                    expiration = jwtSecurityToken.ValidTo
                });
            }
            return Unauthorized();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }

        [HttpGet("[action]")]
        [ProducesResponseType(typeof(AuthenticationInfoLoggedIn), 200)]
        [ProducesResponseType(typeof(AuthenticationInfoNotLoggedIn), 201)]
        [Authorize]
        public async Task<ActionResult<IAuthenticationInfo>> AuthenticationInfo()
        {
            if (!User.Identity.IsAuthenticated)
            {
                return new AuthenticationInfoNotLoggedIn();
            }
            else
            {
                var aUser = await this.GetApplicationUserAsync(_userManager);

                return new AuthenticationInfoLoggedIn
                {
                    Username = aUser.Email,
                    FirstName = aUser.FirstName,
                    LastName = aUser.LastName
                };
            }
        }

        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<ActionResult<bool>> ConfirmEmail([FromBody]ConfirmEmailModel model)
        {
            if (model.UserId == null || model.Code == null)
            {
                return this.BadRequest();
            }

            var user = await _userManager.FindByIdAsync(model.UserId);

            if (user == null)
            {
                throw new ApplicationException($"Unable to load user with ID '{model.UserId}'.");
            }

            var result = await _userManager.ConfirmEmailAsync(user, model.Code);
            return Ok(true);
        }

        //reset password
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<ActionResult<ActionResultModel>> ForgotPassword([FromBody]ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user == null || !(await _userManager.IsEmailConfirmedAsync(user)))
                {
                    // Don't reveal that the user does not exist or is not confirmed
                    return new ActionResultModel { Success = true, Message = "Mail is verzonden" };

                }

                // For more information on how to enable account confirmation and password reset please
                // visit https://go.microsoft.com/fwlink/?LinkID=532713
                // example: https://localhost:44333/UserPasswordResetLink/ConfirmEmail?userId=5cf1688a-fa61-464d-a924-adc8048180be&code=CfDJ8IuddpyUj2ZNk6o%2FU14BzYIcM8g0Jz1uG7p2TRfs5KU85Fa%2FaDAZmVpHjl7UTODlN326gkRgNLbMpx%2B6Dsv%2FViYFA2TrSyQvY9bsArcc4UVxGs9KTtVp6CBjnbAeyoXMAZ%2F438DH15wluzko5DnbJTe2orUqYaAJMUTfv0ZYSvqLJNWIRBJRxK52OqhsPunDsVmg38JvbPB378PRpvcdDjbeum6AxGG5qYQROPZDQlPC
                var code = await _userManager.GeneratePasswordResetTokenAsync(user);
                var callbackUrl = Url.Action("UserPasswordResetLink", "User", 
                    new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
                var mailModel = new ResetPasswordMailModel { Name = user.FirstName, CallbackURL = callbackUrl };
                var emailBody = _renderService.RenderToString("~/Mail/ResetPassword.cshtml", mailModel);
                await _emailSender.SendEmailAsync(model.Email, "Reset Password", emailBody);
                return new ActionResultModel { Success = true, Message = "Mail is verzonden" };

            }

            // If we got this far, something failed, redisplay form
            return new ActionResultModel { Success = false, Message = "Er is iets misgegaan" };

        }

        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<ActionResult<ActionResultModel>> ResetPassword([FromBody]ResetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return new ActionResultModel { Success = false, Message = "Er is iets misgegaan." };
            }
            var user = await _userManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                // Don't reveal that the user does not exist
                return new ActionResultModel { Success = true, Message = "Wachtwoord is veranderd" };
            }
            var result = await _userManager.ResetPasswordAsync(user, model.Code, model.Password);
            if (result.Succeeded)
            {
                return new ActionResultModel { Success = true, Message = "Wachtwoord is veranderd" };
            }
            return new ActionResultModel { Success = false, Message = "Er is iets misgegaan." };
        }

        [HttpGet("[action]")]
        [ProducesResponseType(typeof(FaceBookHookedUp), 200)]
        [ProducesResponseType(typeof(FaceBookNotHookedUp), 201)]
        [Authorize]
        public async Task<ActionResult<IFaceBookInfo>> FacebookInfo() {
            ApplicationUser user = await this.GetApplicationUserAsync(_userManager);
            if (user != null) {
                
                if (user.FacebookRecords.Count == 1) {
                    if (user.FacebookRecords.Count == 1) {
                        return new FaceBookHookedUp{
                            expiresIn = user.FacebookRecords[0].ExpiresIn.ToString()
                        };//Moet andere IAction zijn
                    } else if (user.FacebookRecords.Count == 0){
                        return new FaceBookNotHookedUp();
                    }
                }
            }
            return BadRequest();
        }


    }
}
