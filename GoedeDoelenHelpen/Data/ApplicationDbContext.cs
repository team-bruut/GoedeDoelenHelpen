using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GoedeDoelenHelpen.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Charity> Charities { get; set; }
        public DbSet<CharityApplicationUser> CharityApplicationUsers { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Donation> Donations { get; set; }
        public DbSet<CharityDonation> CharityDonations { get; set; }
        public DbSet<ProjectDonation> ProjectDonations { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<ProjectEvent> ProjectEvents { get; set; }
        public DbSet<CharityEvent> CharityEvents { get; set; }
        public DbSet<EventTeam> EventTeams { get; set; }
        public DbSet<TeamParticipant> TeamParticipants { get; set; }
        public DbSet<TeamParticipantActivated> TeamParticipantsActivated { get; set; }
        public DbSet<TeamParticipantNotActivated> TeamParticipantsNotActivated { get; set; }
        public DbSet<TeamParticipantDonation> TeamParticipantDonations { get; set; }
        public DbSet<EventParticipant> EventParticipants { get; set; }
        public DbSet<EventParticipantDonation> ParticipantDonations { get; set; }
        public DbSet<EventDonation> EventDonations { get; set; }
        public DbSet<EventTeamDonation> EventTeamDonations { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Donation>().HasDiscriminator(donation => donation.DonationType);

            modelBuilder.Entity<ProjectEvent>()
                .HasOne(pe => pe.Project)
                .WithMany(p => p.Events)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<EventDonation>()
                .HasOne(ed => ed.Event)
                .WithMany(e => e.Donations)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<EventParticipantDonation>()
                .HasOne(epd => epd.EventParticipant)
                .WithMany(ep => ep.Donations)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<EventTeamDonation>()
                .HasOne(etd => etd.EventTeam)
                .WithMany(et => et.Donations)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ProjectDonation>()
                .HasOne(pd => pd.Project)
                .WithMany(p => p.Donations)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<TeamParticipantDonation>()
                .HasOne(tpd => tpd.TeamParticipant)
                .WithMany(tp => tp.Donations)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }

    public class ApplicationUser: IdentityUser
    {
        public IEnumerable<Donation> Donations { get; set; }
        
        public IEnumerable<EventParticipant> EventParticipants { get; set; }

        public IEnumerable<CharityApplicationUser> CharityApplicationUsers { get; set; }

        public IEnumerable<TeamParticipantActivated> TeamParticipants { get; set; }
    }

    public class Charity
    {
        public int Id { get; set; }
        [Required]
        [StringLength(250)]
        public string Adress { get; set; }
        [Required]
        [StringLength(250)]
        public string Name { get; set; }
        [Required]
        [StringLength(maximumLength: 8, MinimumLength = 8)]
        public string KVKNumber { get; set; }
        /// <remarks>
        /// check the official specs
        /// </remarks>
        [Required]        
        public string FiscalNumber { get; set; }
        /// <summary>
        /// TODO: need format check
        /// </summary>
        [Required]
        public string IBAN { get; set; }

        /// <summary>
        /// relation to intersention entity CharityApplicationUser
        /// </summary>
        public IEnumerable<CharityApplicationUser> CharityApplicationUsers { get; set; }

        public IEnumerable<CharityDonation> Donations { get; set; }

        public IEnumerable<CharityEvent> Events { get; set; }
    }

    public class CharityApplicationUser
    {
        public int Id { get; set; }

        [Required]
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }

        public int CharityId { get; set; }
        public Charity Charity { get; set; }

        public CharityApplicationUserRole CharityApplicationUserRole { get; set; }
    }

    public enum CharityApplicationUserRole
    {
        Admin,
        User
    }

    public class Project
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public int CharityId { get; set; }
        public Charity Charity { get; set; }

        public IEnumerable<ProjectDonation> Donations { get; set; }

        public IEnumerable<ProjectEvent> Events { get; set; }
    }


    /// <summary>
    /// base type for all the different types of Donations
    /// </summary>
    /// <remarks>
    /// EF will putt all different donation in one table and usses a shadow propperty the "discriminator" to determin wich type it actualy is.
    /// </remarks>
    public abstract class Donation
    {
        public int Id { get; set; }
        [Range(0, 10_000)]
        public decimal Amount { get; set; }
        public DateTime DateTime { get; set; }

        [Required]
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public string DonationType { get; internal set; }
    }

    public class CharityDonation: Donation
    {
        public int CharityId { get; set; }
        public Charity Charity { get; set; }
    }

    public class ProjectDonation: Donation
    {
        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }


    public abstract class Event
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public IEnumerable<EventDonation> Donations { get; set; }
    }

    public class ProjectEvent: Event
    {
        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }

    public class CharityEvent: Event
    {
        public int CharityId { get; set; }
        public Charity Charity { get; set; }
    }

    public class EventTeam
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }

        public IEnumerable<TeamParticipant> TeamParticipants { get; set; }
        public IEnumerable<EventTeamDonation> Donations { get; set; }
    }

    public enum TeamParticipantRole
    {
        member
    }

    public abstract class TeamParticipant
    {
        public int Id { get; set; }

        public int EventId { get; set; }
        public EventTeam EventTeam { get; set; }

        public TeamParticipantRole TeamParticipantRole { get; set; }
        public IEnumerable<TeamParticipantDonation> Donations { get; set; }
    }

    public class TeamParticipantActivated: TeamParticipant
    {
        [Required]
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }

    public class TeamParticipantNotActivated: TeamParticipant
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Name { get; set; }
    }

    public class EventParticipant
    {
        public int Id { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
        public IEnumerable<EventParticipantDonation> Donations { get; set; }
    }


    public class EventDonation: Donation
    {
        public int EventId { get; set; }
        public Event Event { get; set; }
    }

    public class EventParticipantDonation: Donation
    {
        public int EventParticipantId { get; set; }
        public EventParticipant EventParticipant { get; set; }
    }

    public class EventTeamDonation: Donation
    {
        public int EventTeamId { get; set; }
        public EventTeam EventTeam { get; set; }
    }

    public class TeamParticipantDonation: Donation
    {
        public int TeamParticipantId { get; set; }
        public TeamParticipant TeamParticipant { get; set; }
    }
}
