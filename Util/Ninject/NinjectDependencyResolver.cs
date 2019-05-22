using System.Web.Http.Dependencies;
using Ninject;

namespace Util.Ninject
{
    public class NinjectDependencyResolver : NinjectDependencyScope, IDependencyResolver
    {
        private readonly IKernel _kernel;

        public NinjectDependencyResolver(IKernel kernel) : base(kernel)
        {
            this._kernel = kernel;
        }

        public IDependencyScope BeginScope()
        {
            return new NinjectDependencyScope(this._kernel.BeginBlock());
        }
    }
}