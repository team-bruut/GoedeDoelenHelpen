using System.Collections.Generic;

namespace GoedeDoelenHelpen.Data
{
    public abstract class TeamParticipant
    {
        public int Id { get; set; }

        public int EventId { get; set; }
        public EventTeam EventTeam { get; set; }

        public TeamParticipantRole TeamParticipantRole { get; set; }
        public IEnumerable<TeamParticipantDonation> Donations { get; set; }
    }
}
