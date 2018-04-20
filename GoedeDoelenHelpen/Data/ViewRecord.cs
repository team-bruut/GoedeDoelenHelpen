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
    public class ViewRecord
    {
        [Key]
        public string SessionId { get; set; }
        
        [Required]
        public DateTime Timestamp { get; set; }

        [Required]
        [Key]
        public Guid EventId { get; set; }
        public Event Event { get; set; }

    }
}
