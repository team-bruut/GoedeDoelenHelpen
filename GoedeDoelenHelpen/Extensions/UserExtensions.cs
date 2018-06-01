using GoedeDoelenHelpen.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoedeDoelenHelpen.Extensions
{
    public static class UserExtensions
    {
        public static async Task<ApplicationUser> GetApplicationUserAsync(this Controller controller, UserManager<ApplicationUser> userManager)
        {
            return await userManager.FindByEmailAsync(controller.User.Claims.FirstOrDefault(c => c.Type == @"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value);
        }
    }
}
