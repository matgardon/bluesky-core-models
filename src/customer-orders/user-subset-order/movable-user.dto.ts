namespace bluesky.core.models.customerOrder {
	/** Movable user. */
	export interface IMovableUserDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Payer user name. */
		PayerUserName: string;
		/** Source name. */
		SourceName: string;
		/** Target name. */
		TargetName: string;
		/** Target parent name. */
		TargetParentName: string;
		/** Gets or sets new currency */
		NewCurrency: string;
		/** List of movable accesses. */
		MovableAccesses: IMovableAccessDto[];
	}
}
