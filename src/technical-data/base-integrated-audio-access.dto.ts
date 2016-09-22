 namespace bluesky.core.models.technicalData {
	/** Integrated audio access */
	export interface IBaseIntegratedAudioAccessDto extends technicalData.IAudioAccessDto {
		/** Gets or sets AudioIntegrationIndex */
		AudioIntegrationIndex: number;
		/** Gets or sets Web access identifier. */
		WebAccessId: number;
	}
}
