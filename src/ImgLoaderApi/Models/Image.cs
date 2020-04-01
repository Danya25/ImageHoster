using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImgLoaderApi.Models
{
    public class Image
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Url { get; set; }

    }
}
