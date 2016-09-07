declare namespace bluesky.core.models.technicalData {
	/** This resource describes microsites for WebEx.It may be shared between several Logos or dedicated to one Logo. */
	interface UrlDto extends ResourceBase {
		/** Gets or sets the unique identifier. */
		id: number;
		/** Gets or sets value of the URL. */
		urlValue: string;
		/** Gets or sets the administrator login to connect to the URL. */
		login: string;
		/** Gets or sets administrator password to connect to the URL. */
		password: string;
		/** Gets or sets URL type. */
		urlType: string;
		/** Gets or sets site name. */
		siteName: string;
		/** Gets or sets the expiration date. */
		expirationDate: Date;
		/** Gets or sets the provider. */
		provider: string;
		/** Gets or sets required action on URL. */
		urlAction: string;
	}
}
