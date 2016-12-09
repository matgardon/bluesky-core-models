namespace bluesky.core.models.location {
	/** Search parameter used to retrieve a list of location. */
	export interface ISearchLocationCommand {
		/** Gets or sets the zip or postal code. */
		ZipCode: string;
		/** Gets or sets the city or town. */
		City: string;
		/** Gets or sets the the country code. */
		CountryCode: string;
		/** Gets or sets the country subdivision code (state or province). */
		CountrySubdivisionCode: string;
		/** Gets or sets the county. */
		County: string;
		/** Specify if the search is related to Noram countries. */
		IsNoram: boolean; 
		/** Startng index of paginated search. Defaults to 0. */
		Start?: number;
		/** Total number of items to retrieve for the current page. Defaults to 50. */
		Limit?: number;
	}
}
