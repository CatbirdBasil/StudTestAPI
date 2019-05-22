using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities
{
    public class TestHistory
    {
        public TestHistory()
        {
            Answers = new List<AnswerHistory>();
        }

        [Key] public int Id { get; set; }

        [Required] public string UserId { get; set; }

        [Required] public int TestId { get; set; }

        [Required] public int TimeSpent { get; set; }

        [Required] public DateTime CompletionDate { get; set; }

        [Required] public bool IsDone { get; set; }

        public int AttemptsLeft { get; set; }

        [ForeignKey("UserId")] public virtual User User { get; set; }

        [ForeignKey("TestId")] public virtual Test Test { get; set; }

        public virtual List<AnswerHistory> Answers { get; set; }
    }
}