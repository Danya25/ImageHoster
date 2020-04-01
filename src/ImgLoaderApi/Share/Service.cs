using ImgLoaderApi.Context;
using ImgLoaderApi.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImgLoaderApi.Share
{
    public class Service
    {
        private readonly DataContext _context;
        public Service(DataContext context)
        {
            _context = context;
        }
        public async Task<List<Image>> FindePhoto()
        {
            var result = await _context._Img.Find(_ => true).ToListAsync();
            return result;
        }
        public async Task<bool> CheckUserEmail(string email)
        {
            var res = await _context._User.Find(sp => sp.Email == email).FirstOrDefaultAsync();
            if (res == null)
                return true;
            return false;
        }
        public async Task<bool> CreateUser(User user)
        {
            try
            {
                await _context._User.InsertOneAsync(new User
                {
                    Email = user.Email,
                    Password = user.Password
                });
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }
        public async Task<bool> IsExistUser(string email, string password)
        {
            bool res = await _context._User.Find(sp => sp.Email == email && sp.Password == password).AnyAsync();
            if (res)
                return true;
            return false;

        }
    }
}
