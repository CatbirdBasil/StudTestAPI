using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using BLL.DTO;
using BLL.Infrastructure;
using BLL.Interfaces;
using Microsoft.AspNet.Identity.Owin;
using WEB.Filters;
using WEB.Models;

namespace WEB.Controllers
{
    [Authorize]
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        public IUserService UserService => Request.GetOwinContext().GetUserManager<IUserService>();

        [ModelValidation]
        [AllowAnonymous]
        [Route("signup")]
        public async Task<IHttpActionResult> Register([FromBody] RegisterModel model)
        {
            IdentityOperations operationDetails;
            UserDTO userDto = new UserDTO
            {
                Email = model.Email,
                Password = model.Password,
                Username = model.Username
            };
            try
            {
                operationDetails = await UserService.CreateUserAsync(userDto);
            }
            catch (Exception)
            {
                return InternalServerError();
            }

            if (!operationDetails.Succeeded)
            {
                return BadRequest(operationDetails.Message);
            }

            return Ok(operationDetails);
        }


        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult GetAll()
        {
            try
            {
                return Ok(UserService.GetAllUsers());
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}