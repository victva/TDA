using System;

namespace DomainDrivenDesign.Pagos
{
    public struct Pago
    {
        public Pago(
            TipoDePago tipoDePago,
            decimal monto,
            Moneda moneda)
        {
            TipoDePago = tipoDePago;
            Monto = monto;
            Moneda = moneda;
        }

        public decimal Monto { get; private set; }

        public Moneda Moneda { get; private set; }

        public TipoDePago TipoDePago { get; private set; }

       
        public override int GetHashCode()
        {
            return HashCode.Combine(Monto, Moneda, TipoDePago);
        }
    }
}
