using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GoedeDoelenHelpen.Data
{
    public class ReceivingParty
    {
        public Guid Id { get; set; }

        public List<Event> Events { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        [StringLength(255)]
        public string Description { get; set; }

        [Required]
        public int KvKNumber { get; set; }

        [StringLength(14)]
        public string FiscalNumber { get; set; }

        [StringLength(34)]
        public string IBAN { get; set; }

        [Required]
        public bool ANBIId { get; set; }



        
    }

}
