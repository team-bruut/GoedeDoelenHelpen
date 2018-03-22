using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using GoedeDoelenHelpen.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using GoedeDoelenHelpen.Authorization;

namespace GoedeDoelenHelpen.Pages.Charities
{
    public class DeleteModel : DI_BasePageModel
    {
        public DeleteModel(ApplicationDbContext context, IAuthorizationService authorizationService, UserManager<ApplicationUser> userManager) : base(context, authorizationService, userManager)
        {
        }

        [BindProperty]
        public Charity Charity { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Charity = await Context.Charities.FirstOrDefaultAsync(m => m.Id == id);


            if (Charity == null)
            {
                return NotFound();
            }
            if (!(await base.AuthorizationService.AuthorizeAsync(User, Charity, Constants.UpdateOperationName)).Succeeded)
            {
                return this.Unauthorized();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Charity = await Context.Charities.FindAsync(id);
            if (!(await base.AuthorizationService.AuthorizeAsync(User, Charity, Constants.UpdateOperationName)).Succeeded)
            {
                return Unauthorized();
            }

            if (Charity != null)
            {
                Context.Charities.Remove(Charity);
                await Context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
