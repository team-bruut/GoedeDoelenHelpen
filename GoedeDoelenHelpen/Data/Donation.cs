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
    public class Donation
    {
        public Guid Id { get; set; }

        [Required]
        public DateTime Timestamp { get; set; }
        [Required]
        public double Amount { get; set; }
        [Required]
        public Guid EventUserId { get; set; }
        public EventUser EventUser { get; set; }

        public string Message { get; set; }

    }
}
