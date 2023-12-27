using DijiDemiLogin3.Models;
using Microsoft.AspNetCore.Hosting;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);


 static void ConfigureServices(IServiceCollection services, IConfiguration configuration)
{
    services.Configure<WebSiteSettings>(configuration.GetSection("WebSiteSettings"));
    // Diðer servis konfigürasyonlarý buraya eklenebilir
}
builder.Services.AddControllersWithViews();
//builder.Services.Configure<WebSiteSettings>(Configuration.GetSection("WebSiteSettings"));



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
