namespace bluesky.core.model.customerOrder {
	/** Base class for the different types of subset orders:for subscriptionfor user/accessfor hierarchy */
	export interface ISubsetOrderBaseDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Indicates if the subset Order has warnings, its default value is "false".It is used when an Order Item raises an error that has to be ignored.In that case, the Order Item is in error and the attribute "HasWarnings" of the Subset Order is set to "true". */
		HasWarnings: boolean;
		/** Indicates the high-level functional action held by the subset. */
		SubsetAction: string;
		/** Processing status of a SubsetOrder. */
		SubsetOrderStatus: string;
	}
}
