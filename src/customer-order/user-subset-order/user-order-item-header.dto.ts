namespace bluesky.core.model.customerOrder {

	/** DTO header of a user order item. */
	export interface IUserOrderItemHeaderDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets Processing status of an OrderItem. */
		OrderItemStatus: string;
		/** This describes the action held by the user OrderItem */
		UserAction: string;
		/** Gets or sets the userName of the user linked to the user order item, if any. */
		UserName: string;
		/** Gets or sets the userName of the access linked to the user order item, if any. */
		AccessUserName: string;
		/** Gets or sets the offerName of the subscription linked to the user order item, if any. */
		OfferName: string;
	}
}
