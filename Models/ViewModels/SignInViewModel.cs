using System.ComponentModel.DataAnnotations;

namespace DijiDemiLogin3.Models
{
    public class SignInViewModel
    {
        public SignInViewModel()
        {
                
        }
        public SignInViewModel(string username, string parola)
        {
                username =UserName; 
                parola = Password; 
        }
        //[Display(UserName = "Kullanıcı Adı :")]
        public string UserName { get; set; }

       // [Display(Password = "Şifre :")]
        public string Password { get; set; }
    }
}
