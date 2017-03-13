namespace bluesky.core.model.customerOrder {

	/** DTO of a user subset order. */
	export interface IUserSubsetOrderDto extends ISubsetOrderBaseDto {
		/** A user subset order is composed of at least one user order item. */
		UserOrderItems: IUserOrderItemHeaderDto[];
		/** List of movable subscriptions */
		MovableSubscriptions: IMovableSubscriptionDto[];
	}
}
