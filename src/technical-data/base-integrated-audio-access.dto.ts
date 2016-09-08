 namespace bluesky.core.models.technicalData {
	/** Integrated audio access */
	export interface BaseIntegratedAudioAccessDto extends AudioAccessDto {
		/** Gets or sets AudioIntegrationIndex */
		audioIntegrationIndex: number;
		/** Gets or sets Web access identifier. */
		webAccessId: number;
	}
}
