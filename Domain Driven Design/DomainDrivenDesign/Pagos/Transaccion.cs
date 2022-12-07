using System;

namespace DomainDrivenDesign.Pagos
{
    public class Transaccion
    {
        public Transaccion(Pago pago)
        {
            if (pago.Monto <= 0)
            {
                throw new ArgumentException("El monto de pago debe ser mayor a 0", nameof(pago));
            }

            Pago = pago;
            Id = Guid.NewGuid();
            OcurrioEn = DateTime.Now;
            Estado = EstatusDelPago.Pendiente;
        }

        public Guid Id { get; set; }

        public Pago Pago { get; set; }

        public DateTime OcurrioEn { get; set; }

        public EstatusDelPago Estado { get; private set; }

        
        public void TransaccionDeAbono()
        {
            Estado = EstatusDelPago.Abono;
        }

        public void TransaccionCompletada()
        {
            Estado = EstatusDelPago.Completado;
        }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }
    }
}
