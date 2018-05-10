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
    public class EventInvite
    {
        public Guid Id { get; set; }

        [Required]
        public DateTime Timestamp { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        /// <summary>
        /// Boolean that decides if the invite is still unnaccepted
        /// </summary>
        [Required]
        public bool Accepted { get; set; }
        [Required]
        public Guid EventUserId { get; set; }
        public EventUser EventUser { get; set; }


    }
}
