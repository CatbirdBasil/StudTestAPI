using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Infrastructure;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;
using Microsoft.AspNet.Identity;

namespace BLL.Services
{
    public class UserService : IUserService
    {
        public UserService(IUnitOfWork uow)
        {
            Database = uow;
        }

        IUnitOfWork Database { get; set; }

        public async Task<IdentityOperations> CreateUserAsync(UserDTO userDto)
        {
            var user = await Database.UserManager.FindByEmailAsync(userDto.Username);
            if (user == null)
            {
                user = new User {Email = userDto.Email, UserName = userDto.Username};
                IdentityResult result = await Database.UserManager.CreateAsync(user, userDto.Password);
                if (result.Errors.Count() > 0)
                    return new IdentityOperations(false, result.Errors.FirstOrDefault(), "");

                await Database.SaveAsync();
                return new IdentityOperations(true, "Registration successfully completed", "");
            }
            else
            {
                return new IdentityOperations(false, "User with this email already exists", "Email");
            }
        }


        public async Task<User> FindUserAsync(string userName, string password)
        {
            var user = await Database.UserManager.FindAsync(userName, password);
            return user;
        }

        public async Task<User> FindUserByIdAsync(string id)
        {
            var user = await Database.UserManager.FindByIdAsync(id);
            return user;
        }

        public IEnumerable<User> GetAllUsers()
        {
            var users = Database.UserManager.Users.ToList();

            return users;
        }


        public void Dispose()
        {
            Database.Dispose();
        }
    }
}