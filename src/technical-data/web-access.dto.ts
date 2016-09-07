declare namespace bluesky.core.models.technicalData {
	/** This entity contains the information necessary to configure, modify an access web conference for a user. Web Conference can be Anywhere, Livemeeting or WebEx. */
	interface WebAccessDto extends TechnicalAccessDto {
		/** Name of access whose category is audio */
		audioAccessName: string;
		/** Password to access to the web conference.Usually, it is the participant or moderator PIN Code. */
		password: string;
		/** Login to access to the conference. By default it will be user email information.If this information is not available, it will be the Web login. */
		webLoginAlias: string;
		/** WebLogin which is provided by the "Audio platform". */
		webLoginTechnical: string;
		/** Anywhere OneClick URL. */
		oneClickURL: string;
		/** Anywhere Participant OneClick URL. */
		participantOneClickURL: string;
		/** List of integrated audio accesses. */
		integratedAudioAccesses: IntegratedAudioAccessDto[];
	}
}
