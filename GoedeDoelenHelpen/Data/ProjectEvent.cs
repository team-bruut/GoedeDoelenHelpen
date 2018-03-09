namespace GoedeDoelenHelpen.Data
{
    public class ProjectEvent: Event
    {
        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }
}
