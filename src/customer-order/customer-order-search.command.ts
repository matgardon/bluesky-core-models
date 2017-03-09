namespace bluesky.core.models.customerOrder {
    export interface ICustomerOrderSearchCommand {
        CustomerOrderStatusFilter: string;
        UserAccountUid: string;
        LogoId: string;
        OrderId: string;

        //TODO MGA: common contract for Start / Limit params of all search commands ?
        Start?: number;
        Limit?:number;
    }
}