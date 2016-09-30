namespace bluesky.core.models.technicalData {
	/** Command for branding profile's creation. */
	export interface ICreateBrandingProfileCommand {
		/** Gets or sets the identifier of the branding profil. */
		BrandingProfileIdentifier: string;
		/** Gets or sets the name of the branding profile. */
		Name: string;
		/** Gets or sets the description of the branding profile. */
		Description: string;
		/** Gets or sets the level of the branding profile.Corresponds to name of the associated branding model. */
		Level: string;
	}
}
