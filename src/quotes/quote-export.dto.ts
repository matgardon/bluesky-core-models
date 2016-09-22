namespace bluesky.core.models.quote {
	/** DTO of a quote export. */
	export interface IQuoteExportDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the businessunit. */
		BusinessUnit: IMetraNetEnumerationDto;
		/** Gets or sets the subsidiary name. */
		SubsidiaryName: IMetraNetEnumerationDto;
	}
}
