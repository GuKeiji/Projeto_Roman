using Microsoft.EntityFrameworkCore;
using Roman.Context;
using Roman.Domains;
using Roman.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Roman.Repositories
{
    public class TemaRepositoy : ITemaRepository
    {
        GufiContext ctx = new GufiContext();
        public List<Tema> ListarTodos()
        {
            return ctx.Temas.ToList();
        }
    }
}
