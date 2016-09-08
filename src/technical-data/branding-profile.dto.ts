 namespace bluesky.core.models.technicalData {
	/** DTO of a branding profile.A branding profile contains the technical data about a welcome pack email template. */
	export interface BrandingProfileDto extends ResourceBase {
		/** Gets or sets the identifier of the branding profile. */
		uid: string;
		/** Gets or sets the name of the branding profile. */
		name: string;
		/** Gets or sets the level of the branding profile. */
		level: string;
		/** Gets or sets the description of the branding profile. */
		description: string;
		/** Gets or sets the version of the branding profile. */
		version: number;
	}
}
