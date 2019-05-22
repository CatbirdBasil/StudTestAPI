using System;
using System.Collections.Generic;
using System.Web.Http.Dependencies;
using Ninject;
using Ninject.Syntax;

namespace Util.Ninject
{
    public class NinjectDependencyScope : IDependencyScope
    {
        private IResolutionRoot _resolver;

        internal NinjectDependencyScope(IResolutionRoot resolver)
        {
            this._resolver = resolver;
        }

        public object GetService(Type serviceType)
        {
            return this._resolver.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return this._resolver.GetAll(serviceType);
        }

        public void Dispose()
        {
            var disposable = this._resolver as IDisposable;
            if (disposable != null)
            {
                disposable.Dispose();
            }

            this._resolver = null;
        }
    }
}