 namespace bluesky.core.models.userManagement {
	/** DTO of a scope management (Aggregation of the BME CountryReference, SubsidiaryReference andCurrencyReference, defined in MN). */
	export interface IScopeManagementDto extends models.IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the country name. */
		CountryName: string;
		/** Gets or sets the country name value. */
		CountryNameValue: number;
		/** Gets or sets the currency. */
		Currency: string;
		/** Gets or sets the currency value. */
		CurrencyValue: number;
		/** Geo region enum value (EMEA, ...) from the BME CountryReference.  We miss this MetraNet enum, so for now, it is a string. */
		GeoRegion: string;
		/** Gets or sets the management's subsidiary name. */
		ManagementSubsidiaryName: string;
		/** Gets or sets the management's subsidiary name value. */
		ManagementSubsidiaryNameValue: number;
		/** Gets or sets the navision instance. */
		NavisionInstance: string;
		/** Gets or sets the navision instance value. */
		NavisionInstanceValue: number;
		/** Gets or sets the partner account name from the BME SubsidiaryReference. */
		PartnerAccountName: string;
		/** Gets or sets the silo name from the BME SubsidiaryReference. */
		SiloName: string;
		/** Gets or sets the subsidiary code from the BME SubsidiaryReference. */
		SubsidiaryCode: string;
		/** Gets or sets the subsidiary name. */
		SubsidiaryName: string;
		/** Gets or sets the subsidiary name value. */
		SubsidiaryNameValue: number;
		/** Gets or sets the tax vendor.. */
		TaxVendor: string;
		/** Gets or sets the tax vendor value. */
		TaxVendorValue: number;
	}
}
