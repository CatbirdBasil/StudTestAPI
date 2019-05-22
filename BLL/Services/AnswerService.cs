using System.Collections.Generic;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;

namespace BLL.Services
{
    public class AnswerService : IAnswerService
    {
        public AnswerService(IUnitOfWork uow)
        {
            _database = uow;
        }

        private IUnitOfWork _database { get; set; }

        public IEnumerable<AnswerDTO> GetAll()
        {
            IEnumerable<Answer> answers = _database.Answers.GetAll();

            return Mapper.Map<IEnumerable<Answer>, IEnumerable<AnswerDTO>>(answers);
        }

        public AnswerDTO GetById(int id)
        {
            var answer = _database.Answers.Get(id);

            return answer == null ? null : Mapper.Map<Answer, AnswerDTO>(answer);
        }

        public AnswerDTO Insert(AnswerDTO answer)
        {
            Answer answerEntity = _database.Answers.Insert(Mapper.Map<AnswerDTO, Answer>(answer));
            _database.Save();

            return Mapper.Map<Answer, AnswerDTO>(answerEntity);
        }

        public bool Update(AnswerDTO answer)
        {
            bool isUpdated = _database.Answers.Update(answer.Id, Mapper.Map<AnswerDTO, Answer>(answer));

            if (isUpdated)
            {
                _database.Save();
                return true;
            }

            return false;
        }

        public AnswerDTO Delete(int id)
        {
            Answer answerEntity = _database.Answers.Delete(id);
            _database.Save();

            return Mapper.Map<Answer, AnswerDTO>(answerEntity);
        }

        public AnswerDTO Delete(AnswerDTO answer)
        {
            Answer answerEntity = _database.Answers.Delete(Mapper.Map<AnswerDTO, Answer>(answer));
            _database.Save();

            return Mapper.Map<Answer, AnswerDTO>(answerEntity);
        }
    }
}