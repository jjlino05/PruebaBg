using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace bgPrueba.Model
{
    [Table("producto")]
    public class producto
    {
        [Key]
        [Required]
        public int id { get; set; }
        [Required]
        public string descripcion { get; set; }
        [Required]
        public int precio { get; set; }
        [Required]
        public string detalle { get; set; }
        [Required]

        public string imagen { get; set; }
        [Required]
        public string estado { get; set; }

    }
}
