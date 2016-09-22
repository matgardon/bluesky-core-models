 namespace bluesky.core.models.technicalData {
	/** DTO of a branding profile.A branding profile contains the technical data about a welcome pack email template. */
	export interface IBrandingProfileDto extends models.IResourceBase {
		/** Gets or sets the identifier of the branding profile. */
		Uid: string;
		/** Gets or sets the name of the branding profile. */
		Name: string;
		/** Gets or sets the level of the branding profile. */
		Level: string;
		/** Gets or sets the description of the branding profile. */
		Description: string;
		/** Gets or sets the version of the branding profile. */
		Version: number;
	}
}
