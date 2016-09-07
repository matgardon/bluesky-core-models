declare namespace bluesky.core.models.technicalData {
	/** Service Platform is a physical resource in Arkadin network. It can groupseveral Technical Elements.Different kinds of service platform can be created: AVAYA 6200, AVAYA 7000,SEP/VIPER, AnyWhere, WebEx, WebEx Gateway, Vidyo, COBRA. */
	interface ServicePlatformDto extends ResourceBase {
		/** Gets or sets the unique identifier. */
		id: number;
		/** Gets or sets Name of the Service Platform. */
		name: string;
		/** Gets or sets Primary Bridge for an AccessAccount */
		isPrimary: boolean;
		/** Gets or sets Code of the language known by the Service Platform. */
		servicePlatformCode: string;
		/** Gets or sets Language name known by the Service Platform. */
		servicePlatformLanguage: string;
		/** Gets or sets Role. */
		role: string;
		/** Gets or sets Extention */
		extension: string;
		/** Subsidiary of the Service Platform */
		subsidiary: string;
		/** Service Platform country */
		country: string;
		/** Status of the service platform */
		status: string;
		/** Service platform specification */
		servicePlatformSpec: string;
	}
}
