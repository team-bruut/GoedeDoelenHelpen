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
    public class Event
    {
        public Guid Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        [StringLength(255)]
        public string Description { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EventDate { get; set; }
        public DateTime EndDate { get; set; }

        public int MaxParticipants { get; set; }
        
        public bool Active { get; set; }
        
        public Guid ReceivingPartyId { get; set; }
        public ReceivingParty ReceivingParty { get; set; }
    }
}
