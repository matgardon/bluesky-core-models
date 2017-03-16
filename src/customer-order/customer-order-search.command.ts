namespace bluesky.core.command.customerOrder {
    export interface ICustomerOrderSearchCommand extends IBasePaginatedSearchCommand {
        CustomerOrderStatusFilter: string;
        UserAccountUid: string;
        LogoId: string;
        OrderId: string;
    }
}