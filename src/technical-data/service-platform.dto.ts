 namespace bluesky.core.model.technicalData {
	/** Service Platform is a physical resource in Arkadin network. It can groupseveral Technical Elements.Different kinds of service platform can be created: AVAYA 6200, AVAYA 7000,SEP/VIPER, AnyWhere, WebEx, WebEx Gateway, Vidyo, COBRA. */
	export interface IServicePlatformDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets Name of the Service Platform. */
		Name: string;
		/** Gets or sets Primary Bridge for an AccessAccount */
		IsPrimary?: boolean;
		/** Gets or sets Code of the language known by the Service Platform. */
		ServicePlatformCode: string;
		/** Gets or sets Language name known by the Service Platform. */
		ServicePlatformLanguage: string;
		/** Gets or sets Role. */
		Role: string;
		/** Gets or sets Extention */
		Extension: string;
		/** Subsidiary of the Service Platform */
		Subsidiary: string;
		/** Service Platform country */
		Country: string;
		/** Status of the service platform */
		Status: string;
		/** Service platform specification */
		ServicePlatformSpec: string;
	}
}
