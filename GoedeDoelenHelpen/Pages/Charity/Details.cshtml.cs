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
    public class DetailsModel : PageModel
    {
        private readonly GoedeDoelenHelpen.Data.ApplicationDbContext _context;

        public DetailsModel(GoedeDoelenHelpen.Data.ApplicationDbContext context)
        {
            _context = context;
        }

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
    }
}
