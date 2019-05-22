using System.Collections.Generic;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;

namespace BLL.Services
{
    public class AnswerHistoryService : IAnswerHistoryService
    {
        public AnswerHistoryService(IUnitOfWork uow)
        {
            _database = uow;
        }

        private IUnitOfWork _database { get; set; }

        public IEnumerable<AnswerHistoryDTO> GetAll()
        {
            IEnumerable<AnswerHistory> answerHistories = _database.AnswerHistories.GetAll();

            return Mapper.Map<IEnumerable<AnswerHistory>, IEnumerable<AnswerHistoryDTO>>(answerHistories);
        }

        public AnswerHistoryDTO GetById(int id)
        {
            var answerHistory = _database.AnswerHistories.Get(id);

            return answerHistory == null ? null : Mapper.Map<AnswerHistory, AnswerHistoryDTO>(answerHistory);
        }

        public AnswerHistoryDTO Insert(AnswerHistoryDTO answerHistory)
        {
            AnswerHistory answerHistoryEntity =
                _database.AnswerHistories.Insert(Mapper.Map<AnswerHistoryDTO, AnswerHistory>(answerHistory));
            _database.Save();

            return Mapper.Map<AnswerHistory, AnswerHistoryDTO>(answerHistoryEntity);
        }

        public bool Update(AnswerHistoryDTO answerHistory)
        {
            bool isUpdated = _database.AnswerHistories.Update(answerHistory.Id,
                Mapper.Map<AnswerHistoryDTO, AnswerHistory>(answerHistory));

            if (isUpdated)
            {
                _database.Save();
                return true;
            }

            return false;
        }

        public AnswerHistoryDTO Delete(int id)
        {
            AnswerHistory answerHistoryEntity = _database.AnswerHistories.Delete(id);
            _database.Save();

            return Mapper.Map<AnswerHistory, AnswerHistoryDTO>(answerHistoryEntity);
        }

        public AnswerHistoryDTO Delete(AnswerHistoryDTO answerHistory)
        {
            AnswerHistory answerHistoryEntity =
                _database.AnswerHistories.Delete(Mapper.Map<AnswerHistoryDTO, AnswerHistory>(answerHistory));
            _database.Save();

            return Mapper.Map<AnswerHistory, AnswerHistoryDTO>(answerHistoryEntity);
        }
    }
}