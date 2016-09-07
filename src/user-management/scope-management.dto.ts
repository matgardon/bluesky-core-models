declare namespace bluesky.core.models.userManagement {
	/** DTO of a scope management (Aggregation of the BME CountryReference, SubsidiaryReference andCurrencyReference, defined in MN). */
	interface ScopeManagementDto extends ResourceBase {
		/** Gets or sets the unique identifier. */
		id: number;
		/** Gets or sets the country name. */
		countryName: string;
		/** Gets or sets the country name value. */
		countryNameValue: number;
		/** Gets or sets the currency. */
		currency: string;
		/** Gets or sets the currency value. */
		currencyValue: number;
		/** Geo region enum value (EMEA, ...) from the BME CountryReference.  We miss this MetraNet enum, so for now, it is a string. */
		geoRegion: string;
		/** Gets or sets the management's subsidiary name. */
		managementSubsidiaryName: string;
		/** Gets or sets the management's subsidiary name value. */
		managementSubsidiaryNameValue: number;
		/** Gets or sets the navision instance. */
		navisionInstance: string;
		/** Gets or sets the navision instance value. */
		navisionInstanceValue: number;
		/** Gets or sets the partner account name from the BME SubsidiaryReference. */
		partnerAccountName: string;
		/** Gets or sets the silo name from the BME SubsidiaryReference. */
		siloName: string;
		/** Gets or sets the subsidiary code from the BME SubsidiaryReference. */
		subsidiaryCode: string;
		/** Gets or sets the subsidiary name. */
		subsidiaryName: string;
		/** Gets or sets the subsidiary name value. */
		subsidiaryNameValue: number;
		/** Gets or sets the tax vendor.. */
		taxVendor: string;
		/** Gets or sets the tax vendor value. */
		taxVendorValue: number;
	}
}
