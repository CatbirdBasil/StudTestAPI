﻿using System;
using BLL.Interfaces;
using BLL.Services;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using WEB.Providers;

namespace WEB
{
    public partial class Startup
    {
        IServiceCreator serviceCreator = new ServiceCreator();

        public static OAuthAuthorizationServerOptions OAuthOptions { get; private set; }

        public void ConfigureAuth(IAppBuilder app)
        {
            app.CreatePerOwinContext(CreateUserService);

            OAuthOptions = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/signin"),
//                TokenEndpointPath = new PathString("/Token"),
                Provider = new ApplicationOAuthProvider(),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(14),
                AllowInsecureHttp = true
            };
            app.UseOAuthBearerTokens(OAuthOptions);
        }

        private IUserService CreateUserService()
        {
            return serviceCreator.CreateUserService("StudTestDatabase");
        }
    }
}