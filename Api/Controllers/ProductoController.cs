using bgPrueba.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace bgPrueba.Controllers
{
    [Route("api/producto")]
    [ApiController]
    //[Authorize]
    public class productoController : Controller
    {
        private readonly AplicationDBContext _context;
        public productoController(AplicationDBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll()
        {

            

                var Lista = _context.producto.Where(x => x.estado == "Activo").ToList();

                try
                {
                    if (Lista == null)
                    {
                        return NotFound();
                    }
                    return Ok(Lista);
                }
                catch (Exception ex) { 
                
                    return Conflict(ex.Message);
                }
            
        }
        [HttpPost]
        public async  Task<IActionResult> Create( producto productom)
        {
            _context.producto.Add(productom);
            await _context.SaveChangesAsync();
                return Ok();
            }
            
    }
}
