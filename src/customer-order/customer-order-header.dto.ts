namespace bluesky.core.model.customerOrder {
	/** Header DTO of a customer order. */
	export interface ICustomerOrderHeaderDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets Customer order name */
		OrderName: string;
		/** Gets or sets Customer order status. */
		CustomerOrderStatus: string;
		/** Gets or sets the OrderType. */
		OrderType: string;
		/** Gets or sets Filled with the end-user who creates the order */
		CreatedBy: string;
		/** Gets or sets the Logo UserName, it is an unique identifier in the IS. */
		LogoId: string;
		/** Gets or sets the Logo display Name. It is the customer node name. */
		LogoName: string;
		/** Gets or sets Date of submission of the customer order. */
		SubmitDate?: Date;
		/** Gets or sets Effective date of order execution. */
		ExecutionDate: Date;
		/** Gets or sets Name of the Order Manager responsible for the fulfillment of thecustomer order. It is left empty by default, but it can be assigned throughOrder Tracking UI. */
		TechnicalCoordinator: string;
	}
}
