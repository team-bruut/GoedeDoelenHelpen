﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoedeDoelenHelpen.Data;
using GoedeDoelenHelpen.Extensions;
using GoedeDoelenHelpen.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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

        public AuthenticationController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IEmailSender emailSender,
            IViewRenderService renderService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
            _renderService = renderService;
        }


        [AllowAnonymous]
        [HttpPost("[action]")]
        public async Task<ActionResult> Register([FromBody]RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = model.Username, Email = model.Username };
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
            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, false, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    return Ok();
                }
                else if (result.IsLockedOut)
                {
                    return Unauthorized();
                }
                else
                {
                    return Unauthorized();
                }
            }

            // If we got this far, something failed, redisplay form
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
        public ActionResult<IAuthenticationInfo> AuthenticationInfo()
        {
            if (!User.Identity.IsAuthenticated)
            {
                return new AuthenticationInfoNotLoggedIn();
            }
            else
            {
                return new AuthenticationInfoLoggedIn
                {
                    Username = _userManager.GetUserName(this.User)
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


    }
}
