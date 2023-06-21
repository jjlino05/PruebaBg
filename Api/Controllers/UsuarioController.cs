using bgPrueba.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace bgPrueba.Controllers
{
    [Route("api/usuario")]
    [ApiController]
    //[Authorize]
    public class UsuarioController : Controller
    {
        private readonly AplicationDBContext _context;
        public UsuarioController(AplicationDBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll()
        {



            var Lista = _context.usuario.Where(x => x.estado == "Activo").ToList();

            try
            {
                if (Lista == null)
                {
                    return NotFound();
                }
                return Ok(Lista);
            }
            catch (Exception ex)
            {

                return Conflict(ex.Message);
            }

        }
        [HttpPost]
        public async  Task<IActionResult> Create([FromBody] usuario usuariom )
        {

            _context.usuario.Add(usuariom);
            await _context.SaveChangesAsync();
                return Ok();
            }
            
    }
}
