using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
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
    }

    public class ApplicationUser: IdentityUser
    {

        public IEnumerable<Donation> Donations { get; set; }
    }

    public class Charity
    {
        public int Id { get; set; }
        [Required]
        public string Adress { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string KVKNumber { get; set; }
        [Required]
        public string FiscalNumber { get; set; }
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
        public decimal Amount { get; set; }
        public DateTime DateTime { get; set; }

        [Required]
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
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
        public string Name { get; set; }
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
        [Required]
        public string Name { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }

        public IEnumerable<TeamParticipant> TeamParticipants { get; set; }
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
    }

    public class TeamParticipantActivated: TeamParticipant
    {
        [Required]
        public string AplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }

    public class TeamParticipantNotActivated: TeamParticipant
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Name { get; set; }
    }

    public class EventParticipant
    {
        public int Id { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
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
