using BLL.Interfaces;
using BLL.Services;
using DAL.Interfaces;
using DAL.Repositories;
using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NinjectModule.Ninject
{
    public class NinjectRegistrations : global::Ninject.Modules.NinjectModule
    {
        public override void Load()
        {
            Bind<IBookService>().To<BookService>();
            Bind<ITagService>().To<TagService>();

            Bind<IUnitOfWork>().To<UnitOfWork>().WithConstructorArgument("Proj1704");
            
            Bind<ITestService>().To<TestService>();
        }
    }
}
