namespace GoedeDoelenHelpen.Data
{
    public class CharityEvent: Event
    {
        public int CharityId { get; set; }
        public Charity Charity { get; set; }
    }
}
