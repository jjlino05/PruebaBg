using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace bgPrueba.Model
{
    [Table("productoplan")]
    public class productoplan
    {
        [Key]
        [Required]
        public int id { get; set; }
        [Required]
        public string producto { get; set; }
        [Required]
        public string descripcion { get; set; }
        [Required]
        public int cantidad { get; set; }

    }
}
