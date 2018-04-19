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

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Entity<Donation>()
            //    .HasOne(d => d.Event)
            //    .WithMany(e => e.Donations);

            modelBuilder.Entity<Message>()
                .HasOne(m => m.Donation)
                .WithOne(d => d.Message)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Donation>()
                .HasOne(d => d.Event)
                .WithMany(e => e.Donations)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Event>()
                .HasOne(e => e.ReceivingParty)
                .WithMany(r => r.Events)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<EventSubscription>()
                .HasOne(es => es.Event)
                .WithMany(e => e.EventSubscriptions)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<EventUser>()
                .HasOne(eu => eu.Event)
                .WithMany(e => e.EventUsers)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(a => a.EventUsers)
                .WithOne(eu => eu.ApplicationUser)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ViewRecord>()
                .HasOne(vr => vr.Event)
                .WithMany(e => e.ViewRecords)
                .OnDelete(DeleteBehavior.Restrict);

            //modelBuilder.Entity<EventUser>()
            //    .HasDiscriminator(eu => eu.EventUserRole);
        }
    }    
}
