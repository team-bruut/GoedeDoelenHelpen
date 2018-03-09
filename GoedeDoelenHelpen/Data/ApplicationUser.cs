using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace GoedeDoelenHelpen.Data
{
    public class ApplicationUser: IdentityUser
    {
        public IEnumerable<Donation> Donations { get; set; }
        
        public IEnumerable<EventParticipant> EventParticipants { get; set; }

        public IEnumerable<CharityApplicationUser> CharityApplicationUsers { get; set; }

        public IEnumerable<TeamParticipantActivated> TeamParticipants { get; set; }
    }
}
