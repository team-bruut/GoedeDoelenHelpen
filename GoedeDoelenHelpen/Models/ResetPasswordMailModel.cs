using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoedeDoelenHelpen.Models
{
    public class ResetPasswordMailModel
    {
        public string Name { get; set; }
        public string CallbackURL { get; set; }
    }
}
