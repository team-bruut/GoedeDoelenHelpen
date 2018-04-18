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
    public class EventUser
    {
        public Guid Id { get; set; }
        [Required]
        public bool Active { get; set; }
        public DateTime LastLogin { get; set; }
        public DateTime LastEmail { get; set; }
        public DateTime LastFacebook { get; set; }

        [Required]
        public EventUserRole EventUserRole { get; set; }
        [Required]
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        [Required]
        public Guid EventId { get; set; }
        public Event Event { get; set; }
    }
}
