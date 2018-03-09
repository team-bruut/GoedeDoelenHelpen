using System.Linq;
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
}
