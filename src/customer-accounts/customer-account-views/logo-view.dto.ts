declare namespace bluesky.core.models.account {
	/** Dto of a logo view.Contains attributes related to the logo setup. */
	interface LogoViewDto extends ResourceBase {
		/** Gets or sets a value indicating whether this logo is a GSA account with a unique central invoice. */
		isCentralBilling: boolean;
		/** Gets the subsidiary managing the logo. */
		managementSubsidiary: string;
	}
}
