using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using GoedeDoelenHelpen.Data;

namespace GoedeDoelenHelpen.Pages.Charity
{
    public class DeleteModel : PageModel
    {
        private readonly GoedeDoelenHelpen.Data.ApplicationDbContext _context;

        public DeleteModel(GoedeDoelenHelpen.Data.ApplicationDbContext context)
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

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Charity = await _context.Charities.FindAsync(id);

            if (Charity != null)
            {
                _context.Charities.Remove(Charity);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
