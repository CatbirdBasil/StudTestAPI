namespace WEB.Models
{
    public class UserModel
    {
        public string Id { get; set; }
        public string Username { get; set; } //TODO maybe problem here with Username
        public string Email { get; set; }
        public string Password { get; set; }
    }
}