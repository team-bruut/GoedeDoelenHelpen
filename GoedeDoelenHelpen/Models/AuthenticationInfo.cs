using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoedeDoelenHelpen.Models
{
    public interface IAuthenticationInfo
    {
        bool LoggedIn { get; }
    }

    public class AuthenticationInfoNotLoggedIn : IAuthenticationInfo
    {
        public bool LoggedIn => false;
    }

    public class AuthenticationInfoLoggedIn : IAuthenticationInfo
    {
        public bool LoggedIn => true;
        public string Username { get; set; }
        public string FirstName { get; internal set; }
        public string LastName { get; internal set; }
    }
}
