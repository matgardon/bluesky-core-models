namespace bluesky.core.command.customerOrder {
    export interface ICustomerOrderSearchCommandBase {
        CustomerOrderStatusFilter?: string;
        CustomerOrderTypeFilter?: string;
        UserAccountUid?: string;
        LogoUid?: string;
        OrderId?: string;
        LogoName?: string;
        CallingSystem?: string;
        SubsidiaryFilter?: string;
        SubmitDateFrom?: string;
        SubmitDateTo?: string;
    }

    export interface ICustomerOrderSearchFormattedResponseCommand extends ICustomerOrderSearchCommandBase, IFormattedResultCommand {
    }

    export interface ICustomerOrderSearchCommand extends ICustomerOrderSearchCommandBase, IBasePaginatedSearchCommand {
    }
    
}