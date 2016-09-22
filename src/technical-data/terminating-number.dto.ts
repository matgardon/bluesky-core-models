 namespace bluesky.core.models.technicalData {
	/** TerminatingNumber. */
	export interface ITerminatingNumberDto extends models.IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Platform Number */
		PlatformNumber: string;
		/** Gets or sets the service platform name */
		ServicePlatformName: string;
		/** Gets or sets the service platform spec name */
		ServicePlatformSpecName: string;
		/** Gets or sets the phone kind */
		PhoneKind: string;
	}
}
