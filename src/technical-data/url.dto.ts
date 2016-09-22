 namespace bluesky.core.models.technicalData {
	/** This resource describes microsites for WebEx.It may be shared between several Logos or dedicated to one Logo. */
	export interface IUrlDto extends models.IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets value of the URL. */
		UrlValue: string;
		/** Gets or sets the administrator login to connect to the URL. */
		Login: string;
		/** Gets or sets administrator password to connect to the URL. */
		Password: string;
		/** Gets or sets URL type. */
		UrlType: string;
		/** Gets or sets site name. */
		SiteName: string;
		/** Gets or sets the expiration date. */
		ExpirationDate: Date;
		/** Gets or sets the provider. */
		Provider: string;
		/** Gets or sets required action on URL. */
		UrlAction: string;
	}
}
