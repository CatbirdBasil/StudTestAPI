using System;
using System.Collections.Generic;

namespace WEB.Models
{
    public class TestHistoryModel
    {
        public int? Id { get; set; }
        public string UserId { get; set; }
        public int TestId { get; set; }
        public int TimeSpent { get; set; }
        public DateTime CompletionDate { get; set; }
        public bool IsDone { get; set; }
        public int? AttemptsLeft { get; set; }

        public TestModel Test { get; set; }
        public List<AnswerHistoryModel> Answers { get; set; }
    }
}