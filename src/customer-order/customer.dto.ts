namespace bluesky.core.model.customerOrder {
	/** DTO of a customer. */
	export interface ICustomerDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the Logo UserName, it is an unique identifier in the IS. */
		LogoId: string;
		/** Gets or sets the Logo display Name. It is the customer node name. */
		LogoName: string;
	}
}
