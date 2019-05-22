namespace BLL.DTO
{
    public class TestStatisticsDTO
    {
        public int TestId { get; set; }
        public double? AverageScore { get; set; }
        public int? NumberOfCompletions { get; set; }
        public double? AverageCompletionTime { get; set; }
    }
}