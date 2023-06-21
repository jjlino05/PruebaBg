using bgPrueba.Model;
using Microsoft.EntityFrameworkCore;

namespace bgPrueba
{
    public class AplicationDBContext : DbContext
    {
        public AplicationDBContext(DbContextOptions options ) :base (options){ }
        public DbSet<plan> plan { get; set; }
        public DbSet<producto> producto { get; set; }

        public DbSet<usuario> usuario { get; set; }

        public DbSet<productoplan> productoplan { get; set; }

    

}
}
