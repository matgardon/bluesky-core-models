namespace bluesky.core.models.quote {
	/** DTO of an export parameter. */
	export interface IExportParameterDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the export format. */
		ExportFormat: string;
		/** Gets or sets the export language. */
		ExportLanguage: string;
		/** Gets or sets the template name. */
		TemplateName: string;
		/** Gets or sets the template path. */
		TemplatePath: string;
		/** Gets or sets the quote export id. */
		QuoteExportId: number;
		/** Gets or sets the quote export. */
		QuoteExport: IQuoteExportDto;
	}
}
