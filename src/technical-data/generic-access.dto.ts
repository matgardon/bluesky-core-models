declare namespace bluesky.core.models.technicalData {
	/** This entity contains the information needed to configure, modify an access generic conference for a user. */
	interface GenericAccessDto extends TechnicalAccessDto {
		/** Login to access the generic conference. */
		login: string;
		/** Password to access to the generic conference. */
		password: string;
	}
}
