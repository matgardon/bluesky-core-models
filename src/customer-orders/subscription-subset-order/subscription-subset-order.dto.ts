namespace bluesky.core.models.customerOrder {
	/** DTO of a subscription subset order. */
	export interface ISubscriptionSubsetOrderDto extends ISubsetOrderBaseDto {
		/** A subscription subset order is composed of at least one subscription order item. */
		subscriptionOrderItems: ISubscriptionOrderItemHeaderDto[];
	}
}
