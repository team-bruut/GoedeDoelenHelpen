using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using GoedeDoelenHelpen.Data;

namespace GoedeDoelenHelpen.Pages.Charities
{
    public class CreateModel : PageModel
    {
        private readonly GoedeDoelenHelpen.Data.ApplicationDbContext _context;

        public CreateModel(GoedeDoelenHelpen.Data.ApplicationDbContext context)
        {
            _context = context;
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

            _context.Charities.Add(Charity);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}