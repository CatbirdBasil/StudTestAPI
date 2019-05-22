namespace BLL.DTO
{
    public class AnswerHistoryDTO
    {
        public AnswerHistoryDTO()
        {
        }

        public int Id { get; set; }
        public int TestHistoryId { get; set; }
        public int QuestionId { get; set; }
        public int AnswerId { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }

        public TestHistoryDTO TestHistory { get; set; }
        public QuestionDTO Question { get; set; }
        public AnswerDTO Answer { get; set; }
    }
}