using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace bgPrueba.Model
{
    [Table("usuario")]
    public class usuario
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int id { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string nombre { get; set; }
        [Required]
        public string telefono { get; set; }
        [Required]

        public string clave { get; set; }
        [Required]
        public string estado { get; set; }
        


    }
}
