using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GoedeDoelenHelpen.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using GoedeDoelenHelpen.Authorization;

namespace GoedeDoelenHelpen.Pages.Charities
{
    [Authorize]
    public class EditModel : DI_BasePageModel
    {
        public EditModel(
            ApplicationDbContext context,
            IAuthorizationService authorizationService,
            UserManager<ApplicationUser> userManager)
        : base(context, authorizationService, userManager)
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

            Charity = await Context.Charities.Include(charity => charity.CharityApplicationUsers).FirstOrDefaultAsync(m => m.Id == id);

            if (Charity == null)
            {
                return NotFound();
            }
            else if (!(await base.AuthorizationService.AuthorizeAsync(User, Charity, Operations.Update)).Succeeded)
            {
                return this.Unauthorized();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            Context.Attach(Charity).State = EntityState.Modified;

            var origenalCharity = await Context.Charities.Include(charity => charity.CharityApplicationUsers).FirstOrDefaultAsync(charity => charity.Id == Charity.Id);
            if (!(await base.AuthorizationService.AuthorizeAsync(User, origenalCharity, Constants.UpdateOperationName)).Succeeded)
            {
                return this.Unauthorized();
            }

            try
            {
                await Context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CharityExists(Charity.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool CharityExists(int id)
        {
            return Context.Charities.Any(e => e.Id == id);
        }
    }
}
