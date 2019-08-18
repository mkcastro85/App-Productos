namespace App_Productos.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Producto")]
    public partial class Producto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Nombre { get; set; }

        [Required]
        [StringLength(50)]
        public string Sku { get; set; }

        [Column(TypeName = "text")]
        public string Descripcion { get; set; }

        public int? Cantidad { get; set; }

        public int IdCategoria { get; set; }

        public  Categoria Categoria { get; set; }
    }
}
