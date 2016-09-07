declare namespace bluesky.core.models.technicalData {
	/** Defines specifications (templates) for TechnicalOptions. */
	interface TechnicalOptionSpecDto extends ResourceBase {
		/** Gets or sets the unique identifier. */
		id: number;
		/** Gets or sets Name of the TechnicalOptionSpecification. */
		name: string;
		/** Gets or sets Technical option specification value. */
		value: string;
		/** Gets or sets Provisioning type */
		provisioningType: string;
	}
}
