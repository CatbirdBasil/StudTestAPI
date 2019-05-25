namespace WEB.Models
{
    public class TestStatisticsModel
    {
        public int TestId { get; set; }
        public double? AverageScore { get; set; }
        public int? NumberOfCompletions { get; set; }
        public double? AverageCompletionTime { get; set; }
    }
}