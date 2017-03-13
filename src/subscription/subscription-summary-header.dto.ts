namespace bluesky.core.model.subscription {
    /** Header DTO of a subscription summary.
    * A subscription is a product offering sold to a Customer and applied to a single subscriber Billing account. */
    export interface ISubscriptionSummaryHeaderDto extends IResourceBase {
        /** Offer display name of the subscription. */
        DisplayName: string;
        /** Identifier of the subscription defined into MetraNet. */
        GroupSubscriptionId: number;
        /** List of products linked to the subscription. */
        Products: subscription.ISubscriptionProductDto[];
    }
}
