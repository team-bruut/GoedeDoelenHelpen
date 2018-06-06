using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoedeDoelenHelpen.Models
{
    public class FacebookModel
    {
        public string EventId { get; set; }
        public string UserId { get; set; }
        public string AccessToken { get; set; }
        public DateTime ExpiresIn { get; set; }
        public string SignedRequest { get; set; }
    }
}
