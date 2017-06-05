namespace bluesky.core.command.customerOrder {
    export interface ICustomerOrderSearchCommand extends IBasePaginatedSearchCommand {
        CustomerOrderStatusFilter?: string;
        UserAccountUid?: string;
        LogoUid?: string;
        OrderId?: string;
        LogoName?: string;
        CallingSystem?: string;
        SubsidiaryName: string;
        OrderTypeFilter?: string;
        SubmitDateFrom?: string;
        SubmitDateTo?: string;
    }
}