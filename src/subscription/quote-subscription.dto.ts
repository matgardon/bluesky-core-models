namespace bluesky.core.models.subscription {
	/** This entity links a quote, a billing account, and the resulting subscription */
	export interface IQuoteSubscriptionDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Quote identifier */
		QuoteId: number;
		/** Subscription identifier */
		SubscriptionId: number;
		/** GroupSubscription identifier */
		GroupSubId?: number;
		/** BillingAccount identifier */
		BillingAccountUserName: string;
		/** BillingAccount customer node name */
		BillingAccountCustomerNodeName: string;
	}
}
