 namespace bluesky.core.model.technicalData {
	/** This entity contains the information necessary to configure, modify an access web conference for a user. Web Conference can be Anywhere, Livemeeting or WebEx. */
	export interface IWebAccessDto extends technicalData.ITechnicalAccessDto {
		/** Name of access whose category is audio */
		AudioAccessName: string;
		/** Password to access to the web conference.Usually, it is the participant or moderator PIN Code. */
		Password: string;
		/** Login to access to the conference. By default it will be user email information.If this information is not available, it will be the Web login. */
		WebLoginAlias: string;
		/** WebLogin which is provided by the "Audio platform". */
		WebLoginTechnical: string;
		/** Anywhere OneClick URL. */
		OneClickURL: string;
		/** Anywhere Participant OneClick URL. */
		ParticipantOneClickURL: string;
		/** List of integrated audio accesses. */
		IntegratedAudioAccesses: technicalData.IIntegratedAudioAccessDto[];
	}
}
