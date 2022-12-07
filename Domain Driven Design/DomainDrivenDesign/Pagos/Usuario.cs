using System;

namespace DomainDrivenDesign.Pagos
{
    public class Usuario
    {
        public Guid Id { get; private set; }

        public string Nombre { get; private set; }

        public string Descripcion { get; private set; }

        public decimal Precio { get; private set; }
    }
}
