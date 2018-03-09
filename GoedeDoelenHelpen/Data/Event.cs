using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GoedeDoelenHelpen.Data
{
    public abstract class Event
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public IEnumerable<EventDonation> Donations { get; set; }
    }
}
