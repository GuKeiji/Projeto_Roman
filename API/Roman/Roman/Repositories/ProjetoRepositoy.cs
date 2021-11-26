using Microsoft.EntityFrameworkCore;
using Roman.Context;
using Roman.Domains;
using Roman.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Roman.Repositories
{
    public class ProjetoRepositoy : IProjetoRepository
    {
        GufiContext ctx = new GufiContext();
        public void Cadastrar(Projeto NovoProjeto)
        {
            ctx.Projetos.Add(NovoProjeto);

            ctx.SaveChanges();
        }

        public List<Projeto> ListarTodos()
        {
            return ctx.Projetos.Include(x => x.IdTemaNavigation).Include(x => x.IdUsuarioNavigation).ToList();
        }
    }
}
