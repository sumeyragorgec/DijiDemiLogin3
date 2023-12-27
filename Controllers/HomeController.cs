using DijiDemiLogin3.Models;
using DijiDemiLogin3.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Diagnostics;

namespace DijiDemiLogin3.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly WebSiteSettings _appSettings;

        public HomeController(IOptions<WebSiteSettings> appSettings, ILogger<HomeController> logger)
        {
            _appSettings = appSettings.Value;
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View("Index",_appSettings);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

    }
}
