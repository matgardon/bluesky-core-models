namespace bluesky.core.models.customerOrder {
    export interface ICustomerOrderSearchCommand {
        CustomerOrderStatusFilter: string;
        UserAccountUid: string;
        LogoId: string;
        OrderId: string;
        Start?: number;
        Limit?:number;
    }
}