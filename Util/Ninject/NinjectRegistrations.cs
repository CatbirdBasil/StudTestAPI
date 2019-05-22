using BLL.Interfaces;
using BLL.Services;
using DAL.Interfaces;
using DAL.Repositories;
using Ninject.Modules;

namespace Util.Ninject
{
    public class NinjectRegistrations : NinjectModule
    {
        public override void Load()
        {
            Bind<IUnitOfWork>().To<UnitOfWork>().WithConstructorArgument("StudTestDatabase");

            Bind<ITestService>().To<TestService>();
            Bind<IQuestionService>().To<QuestionService>();
            Bind<IAnswerService>().To<AnswerService>();
            Bind<ITestHistoryService>().To<TestHistoryService>();
            Bind<IAnswerHistoryService>().To<AnswerHistoryService>();
        }
    }
}