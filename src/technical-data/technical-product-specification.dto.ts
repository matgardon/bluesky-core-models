 namespace bluesky.core.models.technicalData {
	/** Defines specifications (templates) for TechnicalProducts. */
	export interface ITechnicalProductSpecificationDto extends models.IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets name of the Technical Product Specification */
		Name: string;
		/** Gets List of technical options specifications */
		TechnicalOptionSpecs: technicalData.ITechnicalOptionSpecDto[];
	}
}
