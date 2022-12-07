namespace DomainDrivenDesign.Pagos
{
    public interface IProcesadordePagos
    {
        Transaccion ProcesarPago(Pago pago);
    }
}