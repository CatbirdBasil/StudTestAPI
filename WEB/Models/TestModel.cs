using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WEB.Models
{
    public class TestModel
    {
        public string Text;
        public int? Id { get; set; }
        public string UserId { get; set; }
        public int GroupId { get; set; }

        [Required]
        [StringLength(128, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 5)]
        public string Title { get; set; }

        public DateTime CreationDate { get; set; }
        public int? NumberOfAttempts { get; set; }

        //public UserModel User { get; set; }
        public string Username { get; set; }
        public TestGroupModel Group { get; set; }
        public List<QuestionModel> Questions { get; set; }
    }
}