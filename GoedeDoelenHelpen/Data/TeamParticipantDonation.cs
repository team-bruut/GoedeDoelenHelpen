namespace GoedeDoelenHelpen.Data
{
    public class TeamParticipantDonation: Donation
    {
        public int TeamParticipantId { get; set; }
        public TeamParticipant TeamParticipant { get; set; }
    }
}
