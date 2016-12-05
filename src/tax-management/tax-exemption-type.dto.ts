namespace bluesky.core.models.taxManagement {
	/** Model for a noram tax exemption type. */
	// TODO MGA: model only used by OE at the moment, to mutualize
	export interface ITaxExemptionTypeDto extends IResourceBase {
		Code: number;
		Name: string;
		MetranetTaxExemptionId?: number;
		IsSelected: boolean;
	}
}
