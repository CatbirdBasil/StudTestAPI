using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;

namespace DAL.Repositories
{
    public class QuestionRepository : IRepository<Question, int>
    {
        private DbSet<Question> _questions;

        public QuestionRepository(ApplicationDbContext context)
        {
            _questions = context.Questions;
        }

        public IEnumerable<Question> Find(Func<Question, bool> predicate)
        {
            return _questions.Where(predicate);
        }

        public Question Get(int id)
        {
            return _questions.Find(id);
        }

        public IEnumerable<Question> GetAll()
        {
            return _questions.ToList();
        }

        public Question Insert(Question obj)
        {
            return _questions.Add(obj);
        }

        public bool Update(int id, Question newObj)
        {
            Question attachedQuestion = Get(id);

            if (attachedQuestion == null)
            {
                return false;
            }

            attachedQuestion = MapQuestion(attachedQuestion, newObj);
            return true;
        }

        public Question Delete(int id)
        {
            Question attachedQuestion = Get(id);
            return attachedQuestion == null ? null : _questions.Remove(attachedQuestion);
        }

        public Question Delete(Question obj)
        {
            Question attachedQuestion = Get(obj.Id);
            return attachedQuestion == null ? null : _questions.Remove(attachedQuestion);
        }

        private Question MapQuestion(Question attachedQuestion, Question newQuestion)
        {
            attachedQuestion.Text = newQuestion.Text;
            attachedQuestion.Type = newQuestion.Type;
            attachedQuestion.Position = newQuestion.Position;
            attachedQuestion.TimeLimit = newQuestion.TimeLimit;
            attachedQuestion.NumberOfAnswers = newQuestion.NumberOfAnswers;
            attachedQuestion.NumberOfCorrectAnswers = newQuestion.NumberOfCorrectAnswers;

            return attachedQuestion;
        }
    }
}