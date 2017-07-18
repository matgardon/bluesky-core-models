namespace bluesky.core.model.subscription {
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
        /** Set to true when a disable user is sent by the OO */
        IsUserDeactivationOrderSent:boolean;
	}
}
