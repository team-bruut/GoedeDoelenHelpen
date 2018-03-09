namespace GoedeDoelenHelpen.Data
{
    public class EventDonation: Donation
    {
        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}
