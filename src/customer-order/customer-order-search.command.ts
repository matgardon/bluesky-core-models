namespace bluesky.core.command.customerOrder {
    export interface ICustomerOrderSearchCommand extends IBasePaginatedSearchCommand {
        CustomerOrderStatusFilter?: string;
        CustomerOrderTypeFilter?: string;
        UserAccountUid?: string;
        LogoUid?: string;
        OrderId?: string;
        LogoName?: string;
        CallingSystem?: string;
        SubsidiaryFilter?: string;
        OrderTypeFilter?: string;
        SubmitDateFrom?: string;
        SubmitDateTo?: string;
    }
}