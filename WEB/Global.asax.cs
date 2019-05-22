using System.Web.Http;
using System.Web.Mvc;
using Ninject;
using Ninject.Modules;
using Util;
using Util.Ninject;
using WEB.Utils;

namespace WEB
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<ApplicationProfile>();
                cfg.AddProfile<WebProfile>();
            });

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);

            NinjectModule registrations = new NinjectRegistrations();
            var kernel = new StandardKernel(registrations);
            GlobalConfiguration.Configuration.DependencyResolver = new NinjectDependencyResolver(kernel);
        }
    }
}