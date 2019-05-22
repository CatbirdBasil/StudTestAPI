using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities
{
    public class AnswerHistory
    {
        public AnswerHistory()
        {
        }

        [Key] public int Id { get; set; }

        [Required] public int TestHistoryId { get; set; }

        [Required] public int QuestionId { get; set; }

        public int AnswerId { get; set; }

        public string Text { get; set; }

        public bool IsCorrect { get; set; }

        [ForeignKey("TestHistoryId")] public virtual TestHistory TestHistory { get; set; }

        [ForeignKey("QuestionId")] public virtual Question Question { get; set; }

        [ForeignKey("AnswerId")] public virtual Answer Answer { get; set; }
    }
}