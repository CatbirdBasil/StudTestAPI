﻿using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using BLL.Interfaces;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;

namespace WEB.Providers
{
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            try
            {
                var userService = context.OwinContext.GetUserManager<IUserService>();
                var user = await userService.FindUserAsync(context.UserName, context.Password);
                if (user == null)
                {
                    context.SetError("invalid_grant", "Invalid username or password.");
                    return;
                }

                var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                identity.AddClaim(new Claim("id", user.Id));
                identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));
                identity.AddClaim(new Claim("username", user.UserName));
                identity.AddClaim(new Claim("email", user.Email));

                var additionalData = new AuthenticationProperties(new Dictionary<string, string>
                {
                    {"id", user.Id},
                    {"username", user.UserName},
                    {"email", user.Email}
                });

                AuthenticationTicket ticket = new AuthenticationTicket(identity, additionalData);
                context.Validated(ticket);
            }
            catch (Exception)
            {
                context.SetError("Server", "Server is not responding.");
                return;
            }
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            if (context.ClientId == null)
            {
                context.Validated();
            }

            return Task.FromResult<object>(null);
        }
    }
}