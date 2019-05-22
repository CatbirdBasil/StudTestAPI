using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class TestGroup
    {
//        public TestGroup()
//        {
//            Tests = new List<Test>();
//        }

        [Key] public int Id { get; set; }

        [Required] public string Name { get; set; }

//
//        public virtual List<Test> Tests { get; set; }
    }
}