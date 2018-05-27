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
    public class FacebookRecord
    {
        public Guid Id { get; set; }

        [Required]
        public string AccessToken {get; set;}
        [Required]
        public DateTime ExpiresIn {get; set;}
        [Required]
        public string SignedRequest {get; set;}

        [Required]
        public DateTime TimeStamp { get; set; }
        [Required]
        public Guid EventUserId { get; set; }
        public EventUser EventUser { get; set; }

    }
}
