using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Infrastructure;
using DAL.Entities;

namespace BLL.Interfaces
{
    public interface IUserService : IDisposable
    {
        Task<IdentityOperations> CreateUserAsync(UserDTO userDto);

        Task<User> FindUserAsync(string userName, string password);

        Task<User> FindUserByIdAsync(string id);

        IEnumerable<User> GetAllUsers();
    }
}