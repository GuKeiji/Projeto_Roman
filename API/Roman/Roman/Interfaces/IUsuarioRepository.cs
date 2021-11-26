using Roman.Domains;

namespace Roman.Interfaces
{
    public interface IUsuarioRepository
    {
        Usuario Login(string Email, string Senha);
    }
}
