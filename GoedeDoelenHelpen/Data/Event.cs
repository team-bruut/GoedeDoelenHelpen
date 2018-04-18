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

        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EventDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }

        public int MaxParticipants { get; set; }
        
        [Required]
        public bool Active { get; set; }

        [Required]
        public Guid ReceivingPartyId { get; set; }
        public ReceivingParty ReceivingParty { get; set; }
        public Guid DonationId { get; set; }
        public List<Donation> Donations { get; set; }
        public Guid EventSubscriptionId { get; set; }
        public List<EventSubscription> EventSubscriptions { get; set; }
        [Required]
        public Guid EventUserId { get; set; }
        public List<EventUser> EventUsers { get; set; }
        public Guid ViewRecordId { get; set; }
        public List<ViewRecord> ViewRecords { get; set; }
    }
}
