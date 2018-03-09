using System.ComponentModel.DataAnnotations;

namespace GoedeDoelenHelpen.Data
{
    public class TeamParticipantNotActivated: TeamParticipant
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
