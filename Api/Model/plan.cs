using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace bgPrueba.Model
{
    [Table("plan")]
    public class plan
    {
        [Key]
        [Required]
        public int id { get; set; }
        [Required]
        public string nombre { get; set; }
        [Required]
        public int descripcion { get; set; }
        [Required]
        public int valor { get; set; }
        [Required]

        public string frecuencia { get; set; }
        [Required]
        public string codigo { get; set; }
        [Required]
        public string planes { get; set; }

        public productoplan productoplan { get; set; }
    }
}
