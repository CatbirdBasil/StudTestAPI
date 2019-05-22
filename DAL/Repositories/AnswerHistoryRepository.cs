using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;

namespace DAL.Repositories
{
    public class AnswerHistoryRepository : IRepository<AnswerHistory, int>
    {
        private DbSet<AnswerHistory> _answerHistories;

        public AnswerHistoryRepository(ApplicationDbContext context)
        {
            _answerHistories = context.AnswerHistories;
        }

        public IEnumerable<AnswerHistory> Find(Func<AnswerHistory, bool> predicate)
        {
            return _answerHistories.Where(predicate);
        }

        public AnswerHistory Get(int id)
        {
            return _answerHistories.Find(id);
        }

        public IEnumerable<AnswerHistory> GetAll()
        {
            return _answerHistories.ToList();
        }

        public AnswerHistory Insert(AnswerHistory obj)
        {
            return _answerHistories.Add(obj);
        }

        public bool Update(int id, AnswerHistory newObj)
        {
            AnswerHistory attachedAnswerHistory = Get(id);

            if (attachedAnswerHistory == null)
            {
                return false;
            }

            attachedAnswerHistory = MapAnswerHistory(attachedAnswerHistory, newObj);
            return true;
        }

        public AnswerHistory Delete(int id)
        {
            AnswerHistory attachedAnswerHistory = Get(id);
            return attachedAnswerHistory == null ? null : _answerHistories.Remove(attachedAnswerHistory);
        }

        public AnswerHistory Delete(AnswerHistory obj)
        {
            AnswerHistory attachedAnswerHistory = Get(obj.Id);
            return attachedAnswerHistory == null ? null : _answerHistories.Remove(attachedAnswerHistory);
        }

        private AnswerHistory MapAnswerHistory(AnswerHistory attachedAnswerHistory, AnswerHistory newAnswerHistory)
        {
            attachedAnswerHistory.IsCorrect = newAnswerHistory.IsCorrect;

            return attachedAnswerHistory;
        }
    }
}