using System;
using System.Collections.Generic;

#nullable disable

namespace Roman.Domains
{
    public partial class Projeto
    {
        public int IdProjeto { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdTema { get; set; }
        public string Nome { get; set; }
        public string Decricao { get; set; }

        public virtual Tema IdTemaNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
