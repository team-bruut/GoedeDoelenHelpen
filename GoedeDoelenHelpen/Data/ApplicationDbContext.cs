using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoedeDoelenHelpen.Data
{
    public class ApplicationDbContext: IdentityDbContext<ApplicationUser>
    {
        public DbSet<Event> Events { get; set; }
        public DbSet<EventSubscription> EventSubscriptions { get; set; }
        public DbSet<EventUser> EventUsers { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<ReceivingParty> ReceivingParties { get; set; }
        public DbSet<ViewRecord> ViewRecords { get; set; }
        public DbSet<Donation> Donations { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

    }

    
}
