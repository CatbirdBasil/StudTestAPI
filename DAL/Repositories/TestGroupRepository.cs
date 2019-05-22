using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;

namespace DAL.Repositories
{
    public class TestGroupRepository : IRepository<TestGroup, int>
    {
        private DbSet<TestGroup> _testGroups;

        public TestGroupRepository(ApplicationDbContext context)
        {
            _testGroups = context.TestGroups;
        }

        public IEnumerable<TestGroup> Find(Func<TestGroup, bool> predicate)
        {
            return _testGroups.Where(predicate);
        }

        public TestGroup Get(int id)
        {
            return _testGroups.Find(id);
        }

        public IEnumerable<TestGroup> GetAll()
        {
            return _testGroups.ToList();
        }

        public TestGroup Insert(TestGroup obj)
        {
            return _testGroups.Add(obj);
        }

        public bool Update(int id, TestGroup newObj)
        {
            TestGroup attachedTestGroup = Get(id);

            if (attachedTestGroup == null)
            {
                return false;
            }

            attachedTestGroup = MapTestGroup(attachedTestGroup, newObj);
            return true;
        }

        public TestGroup Delete(int id)
        {
            TestGroup attachedTestGroup = Get(id);
            return attachedTestGroup == null ? null : _testGroups.Remove(attachedTestGroup);
        }

        public TestGroup Delete(TestGroup obj)
        {
            TestGroup attachedTestGroup = Get(obj.Id);
            return attachedTestGroup == null ? null : _testGroups.Remove(attachedTestGroup);
        }

        private TestGroup MapTestGroup(TestGroup attachedTestGroup, TestGroup newTestGroup)
        {
            attachedTestGroup.Name = newTestGroup.Name;

            return attachedTestGroup;
        }
    }
}