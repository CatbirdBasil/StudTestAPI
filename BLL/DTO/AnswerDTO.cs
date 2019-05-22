namespace BLL.DTO
{
    public class AnswerDTO
    {
        public AnswerDTO()
        {
        }

        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }

        public QuestionDTO Question { get; set; }
    }
}