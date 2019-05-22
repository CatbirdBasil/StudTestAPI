using System;
using System.Collections.Generic;

namespace DAL.Interfaces
{
    public interface IRepository<T, TKey> where T : class
    {
        IEnumerable<T> GetAll();
        T Get(TKey id);
        IEnumerable<T> Find(Func<T, bool> predicate);
        T Insert(T obj);
        bool Update(TKey id, T newObj);
        T Delete(TKey id);
        T Delete(T obj);
    }
}