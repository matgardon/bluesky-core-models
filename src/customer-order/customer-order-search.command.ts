namespace bluesky.core.command.customerOrder {

    export interface ICustomerOrderSearchCommandBase {

        //TODO MGA: transform CAPI endpoint to support native list params serialization instead of manual string to list deserialization !
        CustomerOrderStatusFilter?: string;

        //TODO MGA: transform CAPI endpoint to support native list params serialization instead of manual string to list deserialization !
        CustomerOrderTypeFilter?: string;
        UserAccountUid?: string;
        LogoUid?: string;
        OrderId?: string;
        LogoName?: string;
        CallingSystem?: string;

        //TODO MGA: transform CAPI endpoint to support native list params serialization instead of manual string to list deserialization !
        SubsidiaryFilter?: string;
        SubmitDateFrom?: string;
        SubmitDateTo?: string;
    }

    export interface ICustomerOrderSearchFormattedResponseCommand extends ICustomerOrderSearchCommandBase, IFormattedResultCommand {
    }

    export interface ICustomerOrderSearchCommand extends ICustomerOrderSearchCommandBase, IBasePaginatedSearchCommand {
    }

}