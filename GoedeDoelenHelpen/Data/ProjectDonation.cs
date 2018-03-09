namespace GoedeDoelenHelpen.Data
{
    public class ProjectDonation: Donation
    {
        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }
}
