using System;

namespace DomainDrivenDesign.Pagos
{
    public class ProcesadordePagos : IProcesadordePagos
    {
        private readonly IProcesadordePagoElectronico _procesadordePagoElectronico;
        private readonly IServicio _servicio;

        public ProcesadordePagos(
            IProcesadordePagoElectronico procesadordePagoElectronico,
            IServicio servicio)
        {
            _procesadordePagoElectronico = procesadordePagoElectronico ??
                throw new AccessViolationException(nameof(procesadordePagoElectronico));
            _servicio = servicio ??
                throw new ArgumentNullException(nameof(servicio));
        }
        public Transaccion ProcesarPago(Pago pago)
        {
            var transaccion = new Transaccion(pago);

            switch (pago.TipoDePago)
            {
                case TipoDePago.Efectivo:
                    transaccion.TransaccionCompletada();
                    break;
                case TipoDePago.Cheque:
                    _servicio.RevisionServicio(transaccion.Pago);
                    transaccion.TransaccionDeAbono();
                    break;
                case TipoDePago.Tarjeta:
                    _procesadordePagoElectronico.ProcesandoTransaccion(transaccion);
                    transaccion.TransaccionDeAbono();
                    break;
            }
            return transaccion;
        }
    }
}
