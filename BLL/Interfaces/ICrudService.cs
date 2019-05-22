using System.Collections.Generic;

namespace BLL.Interfaces
{
    public interface ICrudService<T> where T : class
    {
        T GetById(int id);
        IEnumerable<T> GetAll();
        T Insert(T obj);
        bool Update(T obj);
        T Delete(int id);
        T Delete(T obj);
    }
}