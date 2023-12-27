using DijiDemiLogin3.Models;
using Microsoft.AspNetCore.Mvc;

namespace DijiDemiLogin3.Controllers
{
    public class UserController : Controller
    {
        private static List<UserModel> _users = new List<UserModel>
        {
            new UserModel { Id = 1, UserName = "admin", Password = "admin123" },
            new UserModel { Id = 2, UserName = "user1", Password = "user123" },
            // Diğer kullanıcılar
        };

        public IActionResult SignIn()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SignIn(string username, string password)
        {
            try
            {
                var user = _users.FirstOrDefault(u => u.UserName == username && u.Password == password);

                if (user != null)
                {
                    // Başarılı giriş, isteğe bağlı olarak başka bir sayfaya yönlendirme
                    return RedirectToAction("Dashboard", "Home");
                }
                else
                {
                    // Hatalı giriş, hata mesajı ekleyerek giriş sayfasını tekrar gösterme
                    ModelState.AddModelError(string.Empty, "Geçersiz kullanıcı adı veya şifre");
                    return View();
                }
            }
            catch (Exception ex)
            {
                // Hata durumunda loglama yapabilir ve kullanıcıya genel bir hata mesajı gösterebilirsiniz.
                // Loglama işlemleri için gerekli kütüphaneleri ve yapıyı eklemeyi unutmayın.
                // Örnek loglama: logger.LogError(ex, "Giriş işlemi sırasında bir hata oluştu.");

                ModelState.AddModelError(string.Empty, "Giriş sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.");

                // ModelState nesnesini kontrol edin
                foreach (var modelState in ViewData.ModelState.Values)
                {
                    foreach (var error in modelState.Errors)
                    {
                        Console.WriteLine($"ModelState Error: {error.ErrorMessage}");
                    }
                }

                return View();
            }
        }


    }
}
