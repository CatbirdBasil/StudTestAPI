using System.ComponentModel.DataAnnotations;

namespace WEB.Models
{
    public class AnswerHistoryModel
    {
        public int? Id { get; set; }

        [Required] public int TestHistoryId { get; set; }

        [Required] public int QuestionId { get; set; }

        public int? AnswerId { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }

        //public TestHistoryModel TestHistory { get; set; }
        public QuestionModel Question { get; set; }
        public AnswerModel Answer { get; set; }
    }
}