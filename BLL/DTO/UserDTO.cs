namespace BLL.DTO
{
    public class UserDTO
    {
        public string Id { get; set; }
        public string Username { get; set; } //TODO maybe problem here with Username
        public string Email { get; set; }
        public string Password { get; set; }
    }
}