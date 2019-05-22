using System.Threading.Tasks;
using DAL.EF;
using DAL.Entities;
using DAL.Identity;
using DAL.Interfaces;
using Microsoft.AspNet.Identity.EntityFramework;

namespace DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private AnswerHistoryRepository _answerHistoryRepository;
        private AnswerRepository _answerRepository;
        private ApplicationDbContext _context;

        private bool _disposedValue = false;
        private QuestionRepository _questionRepository;
        private ApplicationRoleManager _roleManager;
        private TestGroupRepository _testGroupRepository;
        private TestHistoryRepository _testHistoryRepository;

        private TestRepository _testRepository;

        private ApplicationUserManager _userManager;

        public UnitOfWork(string connectionString)
        {
            _context = new ApplicationDbContext(connectionString);
        }

        public ApplicationUserManager UserManager
        {
            get
            {
                if (_userManager == null)
                    _userManager = new ApplicationUserManager(new UserStore<User>(_context));
                return _userManager;
            }
        }

        public ApplicationRoleManager RoleManager
        {
            get
            {
                if (_roleManager == null)
                    _roleManager = new ApplicationRoleManager(new RoleStore<Role>(_context));
                return _roleManager;
            }
        }

        public IRepository<Test, int> Tests
        {
            get
            {
                if (_testRepository == null)
                    _testRepository = new TestRepository(_context);
                return _testRepository;
            }
        }

        public IRepository<TestGroup, int> TestGroups
        {
            get
            {
                if (_testGroupRepository == null)
                    _testGroupRepository = new TestGroupRepository(_context);
                return _testGroupRepository;
            }
        }

        public IRepository<Question, int> Questions
        {
            get
            {
                if (_questionRepository == null)
                    _questionRepository = new QuestionRepository(_context);
                return _questionRepository;
            }
        }

        public IRepository<Answer, int> Answers
        {
            get
            {
                if (_answerRepository == null)
                    _answerRepository = new AnswerRepository(_context);
                return _answerRepository;
            }
        }

        public IRepository<TestHistory, int> TestHistories
        {
            get
            {
                if (_testHistoryRepository == null)
                    _testHistoryRepository = new TestHistoryRepository(_context);
                return _testHistoryRepository;
            }
        }

        public IRepository<AnswerHistory, int> AnswerHistories
        {
            get
            {
                if (_answerHistoryRepository == null)
                    _answerHistoryRepository = new AnswerHistoryRepository(_context);
                return _answerHistoryRepository;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            Dispose(true);
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposedValue)
            {
                if (disposing)
                {
                    _context.Dispose();
                }

                _disposedValue = true;
            }
        }
    }
}