namespace bluesky.core.model.subscription {
    /** DTO of a subscription summary.
    * A subscription is a product offering sold to a Customer and applied to a single subscriber Billing account. */
    export interface ISubscriptionSummaryDto extends IResourceBase {
        /** Offer display name of the subscription. */
        DisplayName: string;
        /** Identifier of the subscription defined into MetraNet. */
        GroupSubscriptionId: number;
        /** Identifier of the billing account owner of the subscription. */
        BillingAccountUid: string;
        /** Identifier of the billing account's logo. */
        LogoUid: string;
        /** List of products linked to the subscription. */
        Products: subscription.ISubscriptionProductDto[];
        /** subscription options. */
        Options: subscription.ISubscriptionOptionDto[];
    }
}
