using System;
using System.Collections.Generic;

namespace BLL.DTO
{
    public class TestHistoryDTO
    {
        public TestHistoryDTO()
        {
            Answers = new List<AnswerHistoryDTO>();
        }

        public int Id { get; set; }
        public string UserId { get; set; }
        public int TestId { get; set; }
        public int TimeSpent { get; set; }
        public DateTime CompletionDate { get; set; }
        public bool IsDone { get; set; }
        public int AttemptsLeft { get; set; }

        public virtual TestDTO Test { get; set; }
        public virtual List<AnswerHistoryDTO> Answers { get; set; }
    }
}