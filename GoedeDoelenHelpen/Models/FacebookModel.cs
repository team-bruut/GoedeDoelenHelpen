using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoedeDoelenHelpen.Models
{
    public class FacebookModel
    {
        //public string EventId { get; set; }
        public string status { get; set; }
        public FBAuthResponse authResponse { get; set; }
    }

    public class FBAuthResponse {
        public string userId { get; set; }
        public string accessToken { get; set; }
        public string expiresIn { get; set; }
        public string signedRequest { get; set; }
    }
}
