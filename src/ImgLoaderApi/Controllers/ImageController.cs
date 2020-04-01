using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ImgLoaderApi.Share;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ImgLoaderApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private Service _serivce;
        private readonly ImageService _loadImg;
        public ImageController(Service service, ImageService loadImg)
        {
            _serivce = service;
            _loadImg = loadImg;
        }

        [HttpGet("image")]
        [Consumes("text/html")]
        public async Task<ActionResult<List<string>>> GetImage()
        {
            List<string> urlPhoto = new List<string>();
            var res = await _serivce.FindePhoto();
            foreach (var s in res)
            {
                urlPhoto.Add(s.Url);
            }
            return Ok(urlPhoto);
        }

        [HttpPost("loadimg")]
        [Consumes("multipart/form-data")]
        [Authorize]
        public async Task<ActionResult<List<string>>> LoadImgToDB(IFormFile file)
        {
            if (file == null)
            {
                return BadRequest();
            }
            else
            {
                byte[] files;
                using (MemoryStream ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    files = ms.ToArray();
                }
                var base64 = Convert.ToBase64String(files);
                var res = await _loadImg.UploadImgToSite(base64);
                List<string> rs = new List<string>();
                rs.Add(res);
                return Ok(rs);
            }
        }
        [HttpPost("testPost")]
        [HttpGet("testGet")]
        [Authorize]
        public async Task<ActionResult> TestMethod()
        {
            return Ok("TEST METHOD");
        }

    }
}