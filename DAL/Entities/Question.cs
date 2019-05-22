using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities
{
    public class Question
    {
        public Question()
        {
            Answers = new List<Answer>();
        }

        [Key] public int Id { get; set; }

        [Required] public QuestionType Type { get; set; }

        [Required] public int TestId { get; set; }

        [Required] public string Text { get; set; }

        public int Position { get; set; }

        public int TimeLimit { get; set; }

        public int NumberOfAnswers { get; set; }

        public int NumberOfCorrectAnswers { get; set; }

        [ForeignKey("TestId")] public virtual Test Test { get; set; }

        public virtual List<Answer> Answers { get; set; }

        public virtual List<AnswerHistory> AnswerHistories { get; set; }

        //TODO History Answers
    }
}