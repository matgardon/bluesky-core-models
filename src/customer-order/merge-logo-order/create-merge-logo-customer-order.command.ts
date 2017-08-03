namespace bluesky.core.command.customerOrder {
	/** Command to create a merge logo order. */
	export interface ICreateMergeLogoCustomerOrderCommand extends IBaseCreateOrderCommand {
		/** Identifier of the source logo to merge. */
		SourceLogoUid: string;
		/** Identifier of the destination logo, under which all source logo hierarchy must be moved. */
		DestinationLogoUid: string;
		/** Indicates if the DDIs configured for the source logo must be merged in the target logo. */
		MergeConfiguredDDIs: boolean;
	}
}
