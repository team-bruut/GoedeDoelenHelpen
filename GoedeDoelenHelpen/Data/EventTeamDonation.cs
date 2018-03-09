namespace GoedeDoelenHelpen.Data
{
    public class EventTeamDonation: Donation
    {
        public int EventTeamId { get; set; }
        public EventTeam EventTeam { get; set; }
    }
}
