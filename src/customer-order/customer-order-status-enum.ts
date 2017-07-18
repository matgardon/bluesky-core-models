namespace bluesky.core.model.customerOrder {
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
    }
}