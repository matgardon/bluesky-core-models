 namespace bluesky.core.models.userManagement {
	/** DTO Header of a scope management (Aggregation of the BME CountryReference, SubsidiaryReference andCurrencyReference, defined in MN). */
	export interface IScopeManagementHeaderDto extends models.IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the country name value. */
		CountryNameValue: string;
		/** Geo region enum value (EMEA, ...) from the BME CountryReference.  We miss this MetraNet enum, so for now, it is a string. */
		GeoRegion: string;
		/** Gets or sets the silo name from the BME SubsidiaryReference. */
		SiloName: string;
		/** Gets or sets the subsidiary code from the BME SubsidiaryReference. */
		SubsidiaryCode: string;
		/** Gets or sets the subsidiary name value. */
		SubsidiaryNameValue: string;
		/** Gets or sets the management subsidiary name value. */
		ManagementSubsidiaryNameValue: string;
	}
}
