using DomainDrivenDesign.Pagos;
using System;

namespace DomainDrivenDesign.TableOrders
{
    public struct UsuariosOrder
    {
        public UsuariosOrder(Usuario menuUsuario, int conteo)
        {
            _ = menuUsuario ?? throw new ArgumentNullException(nameof(menuUsuario));
            precioPorUsuario = menuUsuario.Precio;
            Conteo = conteo;
        }
        public decimal PrecioPorUsuario { get; private set; }

        public int Conteo { get; private set; }

        public decimal PrecioTotal => PrecioPorUsuario * Conteo;
    }
}