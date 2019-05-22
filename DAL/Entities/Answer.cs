using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities
{
    public class Answer
    {
        public Answer()
        {
        }

        [Key] public int Id { get; set; }

        [Required] public int QuestionId { get; set; }

        [Required] public string Text { get; set; }

        [Required] public bool IsCorrect { get; set; }

        [ForeignKey("QuestionId")] public virtual Question Question { get; set; }

        public virtual List<AnswerHistory> AnswerHistories { get; set; }
    }
}