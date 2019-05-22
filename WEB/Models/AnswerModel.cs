using System.ComponentModel.DataAnnotations;

namespace WEB.Models
{
    public class AnswerModel
    {
        public int? Id { get; set; }

        [Required] public int QuestionId { get; set; }

        [Required] public string Text { get; set; }

        public bool? IsCorrect { get; set; }
        //public QuestionModel Question { get; set; }
    }
}