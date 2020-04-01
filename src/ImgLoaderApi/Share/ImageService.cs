using ImgLoaderApi.Context;
using ImgLoaderApi.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace ImgLoaderApi.Share
{
    public class ImageService
    {
        private const string _apiKey = "582a0c429cd6d01855b6caf64c5851e3";
        private const string _url = "https://api.imgbb.com/1/upload";


        private DataContext _context;
        public ImageService(DataContext context)
        {
            _context = context;
        }

        public async Task<string> UploadImgToSite(string imgBase64 = "")
        {
            using (WebClient client = new WebClient())
            {
                //var bytes = File.ReadAllBytes(@"C:\Users\User\source\repos\MyPRojectSite\MyPRojectSite\bin\Debug\photo.jpg");
                //tring img64base = Convert.ToBase64String(bytes);
                NameValueCollection param = new NameValueCollection();
                param.Add("key", _apiKey);
                param.Add("image", imgBase64);

                var response = client.UploadValues(_url, "POST", param);
                var result = Encoding.UTF8.GetString(response);

                var json = JObject.Parse(result);
                var imageUrl = (string)json["data"]["url"];
                try
                {
                    await _context._Img.InsertOneAsync(new Image
                    {
                        Url = imageUrl
                    });

                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
                return imageUrl;
            }
        }

    }
}
