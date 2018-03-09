using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GoedeDoelenHelpen.Data
{
    public class Project
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public int CharityId { get; set; }
        public Charity Charity { get; set; }

        public IEnumerable<ProjectDonation> Donations { get; set; }

        public IEnumerable<ProjectEvent> Events { get; set; }
    }
}
