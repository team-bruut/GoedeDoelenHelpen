using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GoedeDoelenHelpen.Data
{
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
}
