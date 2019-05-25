using System;
using System.Collections.Generic;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;

namespace BLL.Services
{
    public class TestService : ITestService
    {
        public TestService(IUnitOfWork uow)
        {
            _database = uow;
        }

        private IUnitOfWork _database { get; set; }

        public IEnumerable<TestDTO> GetAll()
        {
            IEnumerable<Test> tests = _database.Tests.GetAll();

            return Mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>(tests);
        }

        public IEnumerable<TestDTO> GetTestsByUserId(string id)
        {
            IEnumerable<Test> tests = _database.Tests.Find((test) => test.UserId == id);

            return Mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>(tests);
        }

        public TestDTO GetById(int id)
        {
            var test = _database.Tests.Get(id);

            return test == null ? null : Mapper.Map<Test, TestDTO>(test);
        }

        public TestDTO Insert(TestDTO test)
        {
            test = RestoreMappings(test);
            test.CreationDate = DateTime.Now;
            Test testEntity = _database.Tests.Insert(Mapper.Map<TestDTO, Test>(test));
            _database.Save();

            return Mapper.Map<Test, TestDTO>(testEntity);
        }

        public bool Update(TestDTO test)
        {
            bool isUpdated = _database.Tests.Update(test.Id, Mapper.Map<TestDTO, Test>(test));

            if (isUpdated)
            {
                _database.Save();
                return true;
            }

            return false;
        }

        public TestDTO Delete(int id)
        {
            Test testEntity = _database.Tests.Delete(id);
            _database.Save();

            return Mapper.Map<Test, TestDTO>(testEntity);
        }

        public TestDTO Delete(TestDTO test)
        {
            Test testEntity = _database.Tests.Delete(Mapper.Map<TestDTO, Test>(test));
            _database.Save();

            return Mapper.Map<Test, TestDTO>(testEntity);
        }

        private TestDTO RestoreMappings(TestDTO test)
        {
            foreach (var question in test.Questions)
            {
                question.Test = test;

                foreach (var answer in question.Answers)
                {
                    answer.Question = question;
                }
            }

            return test;
        }
    }
}