using System;
using System.Collections.Generic;
using System.Text;

namespace DomainDrivenDesign.Pagos
{
    public interface IProcesadordePagoElectronico
    {
        void ProcesandoTransaccion(Transaccion transaccion);
    }
}
