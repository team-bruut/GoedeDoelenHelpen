using System;
using System.ComponentModel.DataAnnotations;

namespace GoedeDoelenHelpen.Data
{
    /// <summary>
    /// base type for all the different types of Donations
    /// </summary>
    /// <remarks>
    /// EF will put all different donations in one table and uses a shadow property named the "discriminator" to determine wich type it actualy is.
    /// </remarks>
    public abstract class Donation
    {
        public int Id { get; set; }
        [Range(0, 10_000)]
        public decimal Amount { get; set; }
        public DateTime DateTime { get; set; }

        [Required]
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public string DonationType { get; internal set; }
    }
}
