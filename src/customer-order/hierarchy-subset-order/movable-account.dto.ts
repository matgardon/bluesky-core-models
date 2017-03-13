namespace bluesky.core.model.customerOrder {
	/** Dto of a Movable account. */
	export interface IMovableAccountDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the Target payer user name. */
		PayerUserName: string;
		/** Gets or sets the User name of the node to move. */
		SourceName: string;
		/** Gets or sets the New user name. */
		TargetName: string;
		/** Gets or sets the User name of the target parent. */
		TargetParentName: string;
		/** Gets or sets the New password. */
		NewPassword: string;
		/** Gets or sets new currency */
		NewCurrency: string;
	}
}
