using BLL.DTO;

namespace BLL.Interfaces
{
    public interface ITestHistoryService : ICrudService<TestHistoryDTO>
    {
        TestStatisticsDTO GetTestHistoryStatistics(int id);
    }
}