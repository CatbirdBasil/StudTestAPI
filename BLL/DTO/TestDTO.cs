using System;
using System.Collections.Generic;

namespace BLL.DTO
{
    public class TestDTO
    {
        public TestDTO()
        {
            Questions = new List<QuestionDTO>();
        }

        public int Id { get; set; }
        public string UserId { get; set; }
        public int GroupId { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }
        public int NumberOfAttempts { get; set; }

        //public UserDTO User { get; set; }
        public string Username { get; set; }

        public TestGroupDTO Group { get; set; }
        public List<QuestionDTO> Questions { get; set; }
    }
}