using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImgLoaderApi.Models;
using ImgLoaderApi.Share;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ImgLoaderApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private Service _service;
        public RegistrationController(Service service)
        {
            _service = service;
        }

        [HttpGet("forbiddenEmail")]
        public async Task<ActionResult<bool>> ForbiddenEmail([FromQuery] string email)
        {
            bool result = await _service.CheckUserEmail(email);
            if (result)
                return true;
            else
                return false;
        }
        [HttpPost("createuser")]
        public async Task<ActionResult<string>> CreateUser(User user)
        {
            bool res = await _service.CreateUser(user);
            if (res)
                return "Success";
            else
                return "Error";
        }

        [HttpPost("getuserForLogin")]
        public async Task<ActionResult<string>> GetUserByForLogin([FromBody]User user)
        {
            bool ans = await _service.IsExistUser(user.Email, user.Password);
            if (ans)
            {
                return JsonConvert.SerializeObject(JWTGenerate.GenerateToken(user.Email));
            }
            return "Error";
        }
    }
}