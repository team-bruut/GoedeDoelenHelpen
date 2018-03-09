namespace GoedeDoelenHelpen.Data
{
    public class CharityDonation: Donation
    {
        public int CharityId { get; set; }
        public Charity Charity { get; set; }
    }
}
