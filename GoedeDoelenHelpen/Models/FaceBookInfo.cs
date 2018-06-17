using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoedeDoelenHelpen.Models
{
    public interface IFaceBookInfo {
        bool LoggedIn { get; }
    }

    public class FaceBookNotHookedUp : IFaceBookInfo {
        public bool LoggedIn => false;
    }

    public class FaceBookHookedUp : IFaceBookInfo {
        public bool LoggedIn => true;
        public string ExpiresIn { get; set; }
        public string AccessToken { get; set; }

    }
}
