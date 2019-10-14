using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcore_keycloak.Controllers
{
    [Route("api/[controller]")]
    public class AccessCheckController : Controller
    {
        [HttpGet("[action]")]
        public async Task<string> KeyCloak(string url)
        {
            HttpClient client = new HttpClient();
            return await client.GetStringAsync("http://keycloak-passport.app.aurorabilisim.com/auth/");
        }

        [HttpGet("[action]")]
        public async Task<string> Google(string url)
        {
            HttpClient client = new HttpClient();
            return await client.GetStringAsync("http://google.com");
        }
    }
}