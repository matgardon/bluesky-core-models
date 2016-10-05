namespace bluesky.core.models.customerOrder {
    import BillingAccountDto = bluesky.core.models.account.IBillingAccountDto;

    /** DTO header of a subscription order item. */
    export interface ISubscriptionOrderItemDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Processing status of an OrderItem. */
        OrderItemStatus: string;
        /** This describes the action held by the Subscription OrderItem */
        SubscriptionAction: string;
        /** A subscription order item contains a BillingAccount */
        BillingAccount: BillingAccountDto;
        /** A subscription order item contains a Subscription */
        Subscription: ICustomerOrderSubscriptionDto;
    }
}
