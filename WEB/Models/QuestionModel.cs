using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WEB.Models
{
    public class QuestionModel
    {
        public int? Id { get; set; }

        [Required] public string Type { get; set; }

        [Required] public int TestId { get; set; }

        [Required] public string Text { get; set; }

        [Required] public int Position { get; set; }

        public int? TimeLimit { get; set; }
        public int? NumberOfAnswers { get; set; }
        public int? NumberOfCorrectAnswers { get; set; }

        //public TestModel Test { get; set; }
        public List<AnswerModel> Answers { get; set; }

        //TODO History Answers
    }
}