using System.Collections.Generic;

namespace BLL.DTO
{
    public class QuestionDTO
    {
        public QuestionDTO()
        {
            Answers = new List<AnswerDTO>();
        }

        public int Id { get; set; }
        public string Type { get; set; }
        public int TestId { get; set; }
        public string Text { get; set; }
        public int Position { get; set; }
        public int TimeLimit { get; set; }
        public int NumberOfAnswers { get; set; }
        public int NumberOfCorrectAnswers { get; set; }

        public TestDTO Test { get; set; }
        public List<AnswerDTO> Answers { get; set; }

        //TODO History Answers
    }
}