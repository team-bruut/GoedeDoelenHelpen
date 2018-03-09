namespace GoedeDoelenHelpen.Data
{
    public class EventParticipantDonation: Donation
    {
        public int EventParticipantId { get; set; }
        public EventParticipant EventParticipant { get; set; }
    }
}
