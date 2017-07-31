namespace bluesky.core.command.customerOrder {
    import CustomerOrderStatusEnum = core.model.customerOrder.CustomerOrderStatusEnum;
    import CustomerOrderTypeEnum = core.model.customerOrder.CustomerOrderTypeEnum;

    export interface ICustomerOrderSearchCommandBase {
        CustomerOrderStatusFilter?: CustomerOrderStatusEnum;
        CustomerOrderTypeFilter?: CustomerOrderTypeEnum;
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