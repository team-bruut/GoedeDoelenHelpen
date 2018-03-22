using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using GoedeDoelenHelpen.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace GoedeDoelenHelpen.Pages.Charities
{
    [Authorize]
    public class CreateModel : DI_BasePageModel
    {
        public CreateModel(
        ApplicationDbContext context,
        IAuthorizationService authorizationService,
        UserManager<ApplicationUser> userManager)
        : base(context, authorizationService, userManager)
        {
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Charity Charity { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid || Charity.Activated == true)
            {
                Charity.Activated = false;
                return Page();
            }

            Charity.CharityApplicationUsers = new[] { new CharityApplicationUser { ApplicationUserId = UserManager.GetUserId(User), CharityApplicationUserRole = CharityApplicationUserRole.Admin } };

            Context.Charities.Add(Charity);
            await Context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}