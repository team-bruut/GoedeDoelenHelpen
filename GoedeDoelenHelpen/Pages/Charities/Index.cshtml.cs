using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using GoedeDoelenHelpen.Data;

namespace GoedeDoelenHelpen.Pages.Charities
{
    public class IndexModel : PageModel
    {
        private readonly GoedeDoelenHelpen.Data.ApplicationDbContext _context;

        public IndexModel(GoedeDoelenHelpen.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public IList<Charity> Charity { get;set; }

        public async Task OnGetAsync()
        {
            Charity = await _context.Charities.ToListAsync();
        }
    }
}
