 namespace bluesky.core.models.technicalData {
	/** Defines specifications (templates) for TechnicalProducts. */
	export interface TechnicalProductSpecificationDto extends ResourceBase {
		/** Gets or sets the unique identifier. */
		id: number;
		/** Gets or sets name of the Technical Product Specification */
		name: string;
		/** Gets List of technical options specifications */
		technicalOptionSpecs: TechnicalOptionSpecDto[];
	}
}
