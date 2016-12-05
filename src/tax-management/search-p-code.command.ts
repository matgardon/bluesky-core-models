namespace bluesky.core.models.taxManagement {
	/** Search parameter used to retrieve a list of PCode. */
	export interface ISearchPCodeCommand {
		/** Gets or sets the zip or postal code. */
		ZipCode?: string;
		/** Gets or sets the city or town. */
		City?: string;
		/** Gets or sets the the country code.TODO MGA: the searchPCodeCommandDto should accept CountryCode with 2 or 3 letters (ISO alpha2 or alpha3). */
		CountryCode?: string;
		/** Gets or sets the country subdivision code (state or province). */
		CountrySubdivisionCode?: string;
		/** Gets or sets the county. */
		County?: string;
		/** Indicates if search using partial input parameters is allowed. */
		IsPartialSearchAllowed?: boolean;
	}
}
