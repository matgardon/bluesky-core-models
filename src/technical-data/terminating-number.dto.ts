declare namespace bluesky.core.models.technicalData {
	/** TerminatingNumber. */
	interface TerminatingNumberDto extends ResourceBase {
		/** Gets or sets the unique identifier. */
		id: number;
		/** Platform Number */
		platformNumber: string;
		/** Gets or sets the service platform name */
		servicePlatformName: string;
		/** Gets or sets the service platform spec name */
		servicePlatformSpecName: string;
		/** Gets or sets the phone kind */
		phoneKind: string;
	}
}
