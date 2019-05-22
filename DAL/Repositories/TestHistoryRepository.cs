using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;

namespace DAL.Repositories
{
    public class TestHistoryRepository : IRepository<TestHistory, int>
    {
        private DbSet<TestHistory> _testHistories;

        public TestHistoryRepository(ApplicationDbContext context)
        {
            _testHistories = context.TestHistories;
        }

        public IEnumerable<TestHistory> Find(Func<TestHistory, bool> predicate)
        {
            return _testHistories.Where(predicate);
        }

        public TestHistory Get(int id)
        {
            return _testHistories.Find(id);
        }

        public IEnumerable<TestHistory> GetAll()
        {
            return _testHistories.ToList();
        }

        public TestHistory Insert(TestHistory obj)
        {
            Console.WriteLine("TestHistory: (TestId - " + obj.TestId
                                                        + ", UserId - |" + obj.UserId
                                                        + "|, TimeSpent - " + obj.TimeSpent
                                                        + ", IsDone - " + obj.IsDone
                                                        + ", CompletionDate - " + obj.CompletionDate
                                                        + ")");

            if (obj.Answers != null)
            {
                foreach (var answer in obj.Answers)
                {
                    Console.WriteLine("   AnswerHistory: (TestHistoryId - " + answer.TestHistoryId
                                                                            + ", Text - " + answer.Text
                                                                            + ", AnswerId - " + answer.AnswerId
                                                                            + ", IsCorrect - " + answer.IsCorrect
                                                                            + ")");
                }
            }

            return _testHistories.Add(obj);
        }

        public bool Update(int id, TestHistory newObj)
        {
            TestHistory attachedTestHistory = Get(id);

            if (attachedTestHistory == null)
            {
                return false;
            }

            attachedTestHistory = MapTestHistory(attachedTestHistory, newObj);
            return true;
        }

        public TestHistory Delete(int id)
        {
            TestHistory attachedTestHistory = Get(id);
            return attachedTestHistory == null ? null : _testHistories.Remove(attachedTestHistory);
        }

        public TestHistory Delete(TestHistory obj)
        {
            TestHistory attachedTestHistory = Get(obj.Id);
            return attachedTestHistory == null ? null : _testHistories.Remove(attachedTestHistory);
        }

        private TestHistory MapTestHistory(TestHistory attachedTestHistory, TestHistory newTestHistory)
        {
            attachedTestHistory.TimeSpent = newTestHistory.TimeSpent;
            attachedTestHistory.CompletionDate = newTestHistory.CompletionDate;
            attachedTestHistory.IsDone = newTestHistory.IsDone;

            return attachedTestHistory;
        }
    }
}