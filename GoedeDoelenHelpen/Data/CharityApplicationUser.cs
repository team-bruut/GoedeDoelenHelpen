using System.ComponentModel.DataAnnotations;

namespace GoedeDoelenHelpen.Data
{
    public class CharityApplicationUser
    {
        public int Id { get; set; }

        [Required]
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }

        public int CharityId { get; set; }
        public Charity Charity { get; set; }

        public CharityApplicationUserRole CharityApplicationUserRole { get; set; }
    }
}
