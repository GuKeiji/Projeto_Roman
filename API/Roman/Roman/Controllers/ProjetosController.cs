using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Roman.Domains;
using Roman.Interfaces;
using Roman.Repositories;
using System;
using System.Collections.Generic;

namespace Roman.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProjetosController : ControllerBase
    {
        private IProjetoRepository _ProjetoRepository { get; set; }

        public ProjetosController()
        {
            _ProjetoRepository = new ProjetoRepositoy();
        }

        [HttpPost]
        public IActionResult Post(Projeto NovoProjeto)
        {
            try
            {
                _ProjetoRepository.Cadastrar(NovoProjeto);

                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                List<Projeto> ListarTodos = _ProjetoRepository.ListarTodos();

                return Ok(ListarTodos);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
    }
}
