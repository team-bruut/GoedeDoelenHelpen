using System.Collections.Generic;

namespace GoedeDoelenHelpen.Data
{
    public class EventParticipant
    {
        public int Id { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
        
        public string AplicationUserId { get; set; }
+       public ApplicationUser ApplicationUser { get; set; }
        
        public IEnumerable<EventParticipantDonation> Donations { get; set; }
    }
}
