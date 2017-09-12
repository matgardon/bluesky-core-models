namespace bluesky.core.model.customerOrder {

    //TODO MGA: remove once all migrated to string enum, or replace normal enum with strign enum without changing name ?
    /**
     * Type of Arkadin.BlueSky.BSIC.Domain.OrderManagement.CustomerOrder
     */
    export enum CustomerOrderStatusEnum {
        // status created
        Created,
        // status  submitted
        Submitted,
        // status pending
        Pending,
        // status on hold
        OnHold,
        // status Manual operation
        ManualOp,
        // status error
        Error,
        // status completed
        Completed,
        // status canceled
        Canceled
    };

    export enum CustomerOrderStatusStringEnum {
        // status created
        Created = 'Created',
        // status  submitted
        Submitted = 'Submitted',
        // status pending
        Pending = 'Pending',
        // status on hold
        OnHold = 'OnHold',
        // status Manual operation
        ManualOp = 'ManualOp',
        // status error
        Error = 'Error',
        // status completed
        Completed = 'Completed',
        // status canceled
        Canceled = 'Canceled'
    };
}