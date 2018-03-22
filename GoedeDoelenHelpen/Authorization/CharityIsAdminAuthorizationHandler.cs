using GoedeDoelenHelpen.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoedeDoelenHelpen.Authorization
{
    public class CharityIsAdminAuthorizationHandler : AuthorizationHandler<OperationAuthorizationRequirement, Charity>
    {
        UserManager<ApplicationUser> _userManager;

        public CharityIsAdminAuthorizationHandler(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, OperationAuthorizationRequirement requirement, Charity resource)
        {
            if (context.User == null || resource == null)
            {
                return Task.CompletedTask;
            }
            var userId = _userManager.GetUserId(context.User);
            if (resource.CharityApplicationUsers.Any(cha => cha.ApplicationUserId == userId && cha.CharityApplicationUserRole == CharityApplicationUserRole.Admin))
            {
                context.Succeed(requirement);
            }
            return Task.CompletedTask;

        }
    }
}
