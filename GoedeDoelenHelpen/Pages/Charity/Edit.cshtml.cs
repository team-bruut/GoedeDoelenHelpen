using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GoedeDoelenHelpen.Data;

namespace GoedeDoelenHelpen.Pages.Charity
{
    public class EditModel : PageModel
    {
        private readonly GoedeDoelenHelpen.Data.ApplicationDbContext _context;

        public EditModel(GoedeDoelenHelpen.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Data.Charity Charity { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Charity = await _context.Charities.FirstOrDefaultAsync(m => m.Id == id);

            if (Charity == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(Charity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
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
            return _context.Charities.Any(e => e.Id == id);
        }
    }
}
