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
    //[Authorize]
    public class TemasController : ControllerBase
    {
        private ITemaRepository _TemaRepository { get; set; }

        public TemasController()
        {
            _TemaRepository = new TemaRepositoy();
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                List<Tema> ListarTodos = _TemaRepository.ListarTodos();

                return Ok(ListarTodos);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
    }
}
