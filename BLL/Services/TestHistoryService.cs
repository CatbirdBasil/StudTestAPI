using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BLL.BusinessModels;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;

namespace BLL.Services
{
    public class TestHistoryService : ITestHistoryService
    {
        public TestHistoryService(IUnitOfWork uow)
        {
            _database = uow;
        }

        private IUnitOfWork _database { get; set; }

        public IEnumerable<TestHistoryDTO> GetAll()
        {
            IEnumerable<TestHistory> testHistories = _database.TestHistories.GetAll();

            return Mapper.Map<IEnumerable<TestHistory>, IEnumerable<TestHistoryDTO>>(testHistories);
        }

        public TestHistoryDTO GetById(int id)
        {
            var testHistory = _database.TestHistories.Get(id);

            return testHistory == null ? null : Mapper.Map<TestHistory, TestHistoryDTO>(testHistory);
        }

        public TestHistoryDTO Insert(TestHistoryDTO testHistory)
        {
            testHistory = RestoreMappings(testHistory);

            /*Console.WriteLine("TestHistory: (TestId - " + testHistory.TestId 
                                                        + ", UserId - " + testHistory.UserId 
                                                        + ", TimeSpent - " + testHistory.TimeSpent 
                                                        + ", IsDone - " + testHistory.IsDone
                                                        + ", CompletionDate - " + testHistory.CompletionDate
                                                        + ")");

            if (testHistory.Answers != null)
            {
                foreach (var answer in testHistory.Answers)
                {
                    Console.WriteLine("   AnswerHistory: (TestHistoryId - " + answer.TestHistoryId 
                                                                            + ", Text - " + answer.Text 
                                                                            + ", AnswerId - " + answer.AnswerId 
                                                                            + ", IsCorrect - " + answer.IsCorrect
                                                                            + ")");
                }
            }*/

            TestHistory testHistoryEntity =
                _database.TestHistories.Insert(Mapper.Map<TestHistoryDTO, TestHistory>(testHistory));
            _database.Save();

            return Mapper.Map<TestHistory, TestHistoryDTO>(testHistoryEntity);
        }

        public bool Update(TestHistoryDTO testHistory)
        {
            bool isUpdated =
                _database.TestHistories.Update(testHistory.Id, Mapper.Map<TestHistoryDTO, TestHistory>(testHistory));

            if (isUpdated)
            {
                _database.Save();
                return true;
            }

            return false;
        }

        public TestHistoryDTO Delete(int id)
        {
            TestHistory testHistoryEntity = _database.TestHistories.Delete(id);
            _database.Save();

            return Mapper.Map<TestHistory, TestHistoryDTO>(testHistoryEntity);
        }

        public TestHistoryDTO Delete(TestHistoryDTO testHistory)
        {
            TestHistory testHistoryEntity =
                _database.TestHistories.Delete(Mapper.Map<TestHistoryDTO, TestHistory>(testHistory));
            _database.Save();

            return Mapper.Map<TestHistory, TestHistoryDTO>(testHistoryEntity);
        }

        public TestStatisticsDTO GetTestHistoryStatistics(int id)
        {
            IEnumerable<TestHistoryDTO> testHistories =
                Mapper.Map<IEnumerable<TestHistory>, IEnumerable<TestHistoryDTO>>(
                    _database.TestHistories.Find((testHistory) => testHistory.TestId == id));

            if (testHistories.Any()) return null;

            TestDTO test = testHistories.First().Test;

            return new TestStatisticsGatherer(test, testHistories)
                .IncludeAverageScore()
                .IncludeAverageCompletionTime()
                .IncludeNumberOfCompletions()
                .Gather();
        }

        private TestHistoryDTO RestoreMappings(TestHistoryDTO testHistory)
        {
            foreach (var answer in testHistory.Answers)
            {
                answer.TestHistory = testHistory;
            }

            return testHistory;
        }
    }
}