namespace bluesky.core.command.customerOrder {

    //TODO MGA: support list contract for order status, order type & subsidiaries,as CAPI supports them, and transform CAPI endpoint to support native list params serialization instead of manual string to list deserialization !
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