﻿using System.ComponentModel.DataAnnotations;

namespace WEB.Models
{
    public class RegisterModel
    {
        [Required] public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 3)]
        public string Username { get; set; } //TODO possible problems

        [Required]
        [DataType(DataType.Password)]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "The password and password confirmation do not match.")]
        public string ConfirmPassword { get; set; }
    }
}