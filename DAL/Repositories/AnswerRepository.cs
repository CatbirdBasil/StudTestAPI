using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;

namespace DAL.Repositories
{
    public class AnswerRepository : IRepository<Answer, int>
    {
        private DbSet<Answer> _answers;

        public AnswerRepository(ApplicationDbContext context)
        {
            _answers = context.Answers;
        }

        public IEnumerable<Answer> Find(Func<Answer, bool> predicate)
        {
            return _answers.Where(predicate);
        }

        public Answer Get(int id)
        {
            return _answers.Find(id);
        }

        public IEnumerable<Answer> GetAll()
        {
            return _answers.ToList();
        }

        public Answer Insert(Answer obj)
        {
            return _answers.Add(obj);
        }

        public bool Update(int id, Answer newObj)
        {
            Answer attachedAnswer = Get(id);

            if (attachedAnswer == null)
            {
                return false;
            }

            attachedAnswer = MapAnswer(attachedAnswer, newObj);
            return true;
        }

        public Answer Delete(int id)
        {
            Answer attachedAnswer = Get(id);
            return attachedAnswer == null ? null : _answers.Remove(attachedAnswer);
        }

        public Answer Delete(Answer obj)
        {
            Answer attachedAnswer = Get(obj.Id);
            return attachedAnswer == null ? null : _answers.Remove(attachedAnswer);
        }

        private Answer MapAnswer(Answer attachedAnswer, Answer newAnswer)
        {
            attachedAnswer.Text = newAnswer.Text;
            attachedAnswer.IsCorrect = newAnswer.IsCorrect;

            return attachedAnswer;
        }
    }
}