﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GoedeDoelenHelpen.Data
{
    public class Donation
    {
        public Guid Id { get; set; }

        [Required]
        public DateTime Timestamp { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [Required]
        public Guid EventId { get; set; }
        public Event Event { get; set; }
        [Required]
        public Guid MessageId { get; set; }
        public List<Message> Messages { get; set; }

    }
}