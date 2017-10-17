namespace bluesky.core.model.offer {
	/** Model for Rate Entry definition */
	export interface IRateEntryDto {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the rate entry type. */
		RateEntryType: RateEntryTypeEnum;
		/** Gets or sets the rate entry index. */
		Index: number;
		/** Gets or sets rating key */
		RatingKey: string;
		/** Gets or sets the rate entry audit. */
		Audit: number;
	}
}
