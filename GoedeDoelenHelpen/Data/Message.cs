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
    public class Message
    {
        public int Id { get; set; }

        [StringLength(40)] //optional
        public string Name { get; set; }

        [Required]
        [StringLength(255)]
        public string Content { get; set; }

        public Guid DonationId { get; set; }
        public Donation Donation { get; set; }
        
    }
}
