using System.Collections.Generic;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;

namespace BLL.Services
{
    public class QuestionService : IQuestionService
    {
        public QuestionService(IUnitOfWork uow)
        {
            _database = uow;
        }

        private IUnitOfWork _database { get; set; }

        public IEnumerable<QuestionDTO> GetAll()
        {
            IEnumerable<Question> questions = _database.Questions.GetAll();

            return Mapper.Map<IEnumerable<Question>, IEnumerable<QuestionDTO>>(questions);
        }

        public QuestionDTO GetById(int id)
        {
            var question = _database.Questions.Get(id);

            return question == null ? null : Mapper.Map<Question, QuestionDTO>(question);
        }

        public QuestionDTO Insert(QuestionDTO question)
        {
            question = RestoreMappings(question);
            Question questionEntity = _database.Questions.Insert(Mapper.Map<QuestionDTO, Question>(question));
            _database.Save();

            return Mapper.Map<Question, QuestionDTO>(questionEntity);
        }

        public bool Update(QuestionDTO question)
        {
            bool isUpdated = _database.Questions.Update(question.Id, Mapper.Map<QuestionDTO, Question>(question));

            if (isUpdated)
            {
                _database.Save();
                return true;
            }

            return false;
        }

        public QuestionDTO Delete(int id)
        {
            Question questionEntity = _database.Questions.Delete(id);
            _database.Save();

            return Mapper.Map<Question, QuestionDTO>(questionEntity);
        }

        public QuestionDTO Delete(QuestionDTO question)
        {
            Question questionEntity = _database.Questions.Delete(Mapper.Map<QuestionDTO, Question>(question));
            _database.Save();

            return Mapper.Map<Question, QuestionDTO>(questionEntity);
        }

        private QuestionDTO RestoreMappings(QuestionDTO question)
        {
            foreach (var answer in question.Answers)
            {
                answer.Question = question;
            }

            return question;
        }
    }
}