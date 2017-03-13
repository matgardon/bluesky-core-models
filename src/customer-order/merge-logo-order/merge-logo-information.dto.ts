namespace bluesky.core.model.customerOrder {
	/** Dto of a Merge Logo information. Contains information about merge logo action. */
	export interface IMergeLogoInformationDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Identifier of the source logo to merge. */
		SourceLogoUid: string;
		/** Identifier of the destination logo, under which all source logo hierarchy must be moved. */
		DestinationLogoUid: string;
		/** Indicates if the DDIs configured for the source logo must be merged in the target logo. */
		MergeConfiguredDDIs: boolean;
	}
}
