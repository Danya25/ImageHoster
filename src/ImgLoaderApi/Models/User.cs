using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImgLoaderApi.Models
{
    public class User
    {
        [BsonId]
        public string Email { get; set; }

        public string Password { get; set; }

        [BsonIgnoreIfDefault]
        public string Token { get; set; }
    }
}
