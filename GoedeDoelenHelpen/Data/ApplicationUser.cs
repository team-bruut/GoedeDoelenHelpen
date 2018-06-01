using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GoedeDoelenHelpen.Data
{
    public class ApplicationUser : IdentityUser {
        
        public List<EventUser> EventUsers { get; set; }
        
        [Required]
        [StringLength(128)]
        public string FirstName { get; set; }

        [StringLength(64)]
        public string NameInsertion { get; set; }

        [Required]
        [StringLength(128)]
        public string LastName { get; set; }
    }
}
