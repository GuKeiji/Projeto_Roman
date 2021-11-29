﻿using System.ComponentModel.DataAnnotations;

namespace Roman.ViewModel
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Informe o email do usuario")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe a senha do usuario")]
        public string Senha { get; set; }
    }
}
