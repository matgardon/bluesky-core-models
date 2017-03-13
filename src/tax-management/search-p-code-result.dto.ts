namespace bluesky.core.model.taxManagement {
	/** Information about the result of search tax pcodes. */
	export interface ISearchTaxPCodeResultDto extends IResourceBase {
		/** List of Tax-PCodes available for the search input. */
		AvailablePCodes: IPCodeDto[];
		/** Indicates if the response is based on a partial search. */
		IsResultBasedOnPartialSearch: boolean;
		/** Message indicating the rule used during a partial search. */
		PartialSearchMessage: string;
	}
}
