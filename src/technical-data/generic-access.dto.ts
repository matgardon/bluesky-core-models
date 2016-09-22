 namespace bluesky.core.models.technicalData {
	/** This entity contains the information needed to configure, modify an access generic conference for a user. */
	export interface IGenericAccessDto extends technicalData.ITechnicalAccessDto {
		/** Login to access the generic conference. */
		Login: string;
		/** Password to access to the generic conference. */
		Password: string;
	}
}
