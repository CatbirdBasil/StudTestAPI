using System;
using System.Threading.Tasks;
using DAL.Entities;
using DAL.Identity;

namespace DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Test, int> Tests { get; }
        IRepository<TestGroup, int> TestGroups { get; }
        IRepository<Question, int> Questions { get; }
        IRepository<Answer, int> Answers { get; }
        IRepository<TestHistory, int> TestHistories { get; }
        IRepository<AnswerHistory, int> AnswerHistories { get; }
        ApplicationUserManager UserManager { get; }
        ApplicationRoleManager RoleManager { get; }

        void Save();
        Task SaveAsync();
    }
}