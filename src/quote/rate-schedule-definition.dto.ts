namespace bluesky.core.model.quote {
	/** Model for Rate Schedule definition */
	export interface IRateScheduleDefinition {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the id of the quote. */
		QuoteId: number;
		/** Gets or sets the id of a parameter table. */
		PTId: number;
		/** Gets or sets the name of the Parameter Table. */
		PTName: string;
		/** Gets or sets the rate schedule type. */
		RateScheduleType: string;
		/** Gets or sets the start date. */
		StartDate: Date;
		/** Gets or sets the end date. */
		EndDate: Date;
		/** Gets or sets the priceable item id. */
		PriceableItemId: number;
		/** Gets or sets the rate entries. */
		RateEntries: IRateEntryDefinition[];
	}
}
