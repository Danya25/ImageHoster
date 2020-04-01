using ImgLoaderApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImgLoaderApi.Context
{
    public class DataContext
    {
        public readonly IMongoCollection<Image> _Img;
        public readonly IMongoCollection<User> _User;

        public DataContext(IOptions<DataOptions> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);
            var database = mongoClient.GetDatabase(options.Value.DatabaseName);

            _Img = database.GetCollection<Image>(nameof(Image));
            _User = database.GetCollection<User>(nameof(User));
        }
    }
}
