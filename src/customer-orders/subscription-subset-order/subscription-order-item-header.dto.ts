namespace bluesky.core.models.customerOrder {
	/** DTO header of a subscription order item. */
	export interface ISubscriptionOrderItemHeaderDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets Processing status of an OrderItem. */
		OrderItemStatus: string;
		/** This describes the action held by the Subscription OrderItem */
		SubscriptionAction: string;
		/** Gets or sets the userName of the billing account linked to the subscription order item. */
		BillingAccountUserName: string;
		/** Gets or sets the offerName of the subscription linked to the subscription order item. */
		OfferName: string;
	}
}
