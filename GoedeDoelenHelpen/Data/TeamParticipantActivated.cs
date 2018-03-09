using System.ComponentModel.DataAnnotations;

namespace GoedeDoelenHelpen.Data
{
    public class TeamParticipantActivated: TeamParticipant
    {
        [Required]
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
