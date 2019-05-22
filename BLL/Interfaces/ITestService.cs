using System.Collections.Generic;
using BLL.DTO;

namespace BLL.Interfaces
{
    public interface ITestService : ICrudService<TestDTO>
    {
        IEnumerable<TestDTO> GetTestsByUserId(string id);
    }
}