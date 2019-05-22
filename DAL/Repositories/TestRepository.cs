using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;

namespace DAL.Repositories
{
    public class TestRepository : IRepository<Test, int>
    {
        private DbSet<Test> _tests;

        public TestRepository(ApplicationDbContext context)
        {
            _tests = context.Tests;
        }

        public IEnumerable<Test> Find(Func<Test, bool> predicate)
        {
            return _tests.Where(predicate);
        }

        public Test Get(int id)
        {
            return _tests.Find(id);
        }

        public IEnumerable<Test> GetAll()
        {
            return _tests.ToList();
        }

        public Test Insert(Test obj)
        {
            return _tests.Add(obj);
        }

        public bool Update(int id, Test newObj)
        {
            Test attachedTest = Get(id);

            if (attachedTest == null)
            {
                return false;
            }

            attachedTest = MapTest(attachedTest, newObj);
            return true;
        }

        public Test Delete(int id)
        {
            Test attachedTest = Get(id);
            return attachedTest == null ? null : _tests.Remove(attachedTest);
        }

        public Test Delete(Test obj)
        {
            Test attachedTest = Get(obj.Id);
            return attachedTest == null ? null : _tests.Remove(attachedTest);
        }

        private Test MapTest(Test attachedTest, Test newTest)
        {
            attachedTest.Title = newTest.Title;
            attachedTest.NumberOfAttempts = newTest.NumberOfAttempts;
            attachedTest.GroupId = newTest.GroupId;
            attachedTest.Group = newTest.Group;

            return attachedTest;
        }
    }
}