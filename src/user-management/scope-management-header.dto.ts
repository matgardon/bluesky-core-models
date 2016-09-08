 namespace bluesky.core.models.userManagement {
	/** DTO Header of a scope management (Aggregation of the BME CountryReference, SubsidiaryReference andCurrencyReference, defined in MN). */
	export interface ScopeManagementHeaderDto extends ResourceBase {
		/** Gets or sets the unique identifier. */
		id: number;
		/** Gets or sets the country name value. */
		countryNameValue: string;
		/** Geo region enum value (EMEA, ...) from the BME CountryReference.  We miss this MetraNet enum, so for now, it is a string. */
		geoRegion: string;
		/** Gets or sets the silo name from the BME SubsidiaryReference. */
		siloName: string;
		/** Gets or sets the subsidiary code from the BME SubsidiaryReference. */
		subsidiaryCode: string;
		/** Gets or sets the subsidiary name value. */
		subsidiaryNameValue: string;
		/** Gets or sets the management subsidiary name value. */
		managementSubsidiaryNameValue: string;
	}
}
