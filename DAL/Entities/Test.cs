using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities
{
    public class Test
    {
        public Test()
        {
            Questions = new List<Question>();
        }

        [Key] public int Id { get; set; }

        [Required] public string UserId { get; set; }

        [Required] public int GroupId { get; set; }

        [Required] public string Title { get; set; }

        public string Text { get; set; }

        [Required] public DateTime CreationDate { get; set; }

        public int NumberOfAttempts { get; set; }

        [ForeignKey("UserId")] public virtual User User { get; set; }

        [ForeignKey("GroupId")] public virtual TestGroup Group { get; set; }

        public virtual List<Question> Questions { get; set; }
    }
}