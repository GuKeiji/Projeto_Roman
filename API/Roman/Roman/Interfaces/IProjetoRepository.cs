using Roman.Domains;
using System.Collections.Generic;

namespace Roman.Interfaces
{
    public interface IProjetoRepository
    {
        List<Projeto> ListarTodos();

        void Cadastrar(Projeto NovoProjeto);
    }
}
