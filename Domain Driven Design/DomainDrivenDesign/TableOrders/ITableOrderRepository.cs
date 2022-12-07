using DomainDrivenDesign.Comun;
using System;
using System.Collections.Generic;

namespace DomainDrivenDesign.TableOrders
{
    public interface ITableOrderRepository
    {
        Orden FindTableOrder(Guid tebleOrderId);

        Orden SaveTableOrder(Orden tableOrder);

        void DeleteTableOrder(Orden tableOrder);

        IEnumerable<Orden> FindAllTableOrders(IntervalodeTiempo period);

        IEnumerable<Orden> FindServantTableOrders(Guid servantId, IntervalodeTiempo period);
    }
}
