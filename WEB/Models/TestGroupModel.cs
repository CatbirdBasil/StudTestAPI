using System.ComponentModel.DataAnnotations;

namespace WEB.Models
{
    //[Serializable]
    //[DataContract(IsReference = true)]
    public class TestGroupModel
    {
        public int? Id { get; set; }

        [Required] public string Name { get; set; }

        //public List<TestModel> Tests { get; set; }
    }
}