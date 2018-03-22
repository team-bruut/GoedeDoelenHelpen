using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GoedeDoelenHelpen.Data
{
    public class Charity
    {
        public int Id { get; set; }
        [Required]
        [StringLength(250)]
        public string Adress { get; set; }
        [Required]
        public string PostCode { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        [StringLength(250)]
        public string Name { get; set; }
        [Required]
        [StringLength(maximumLength: 8, MinimumLength = 8)]
        public string KVKNumber { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public bool Activated { get; set; } = false;
        /// <remarks>
        /// check the official specs
        /// </remarks>
        [Required]        
        public string FiscalNumber { get; set; }
        /// <summary>
        /// TODO: need format check
        /// </summary>
        [Required]
        public string IBAN { get; set; }

        /// <summary>
        /// relation to intersection entity CharityApplicationUser
        /// </summary>
        public IEnumerable<CharityApplicationUser> CharityApplicationUsers { get; set; }

        public IEnumerable<CharityDonation> Donations { get; set; }

        public IEnumerable<CharityEvent> Events { get; set; }
    }
}
