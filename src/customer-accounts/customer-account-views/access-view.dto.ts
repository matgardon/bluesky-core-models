 namespace bluesky.core.models.account {
	/** Dto of an access view.Contains technical information for each user's access instance. */
	export interface AccessViewDto extends ResourceBase {
		/** Gets or sets the login for Web products. */
		accessLogin: string;
		/** Gets or sets the password for credential requirements on service platform (= pin moderator). */
		accessPassword: string;
		/** Gets or sets AccessAccount personal information numberUsed by user to access the service. */
		audioModeratorPIN: string;
		/** Gets or sets the Personal Information Number for the audio participant. */
		audioParticipantPIN: string;
		/** Gets or sets the information provided by the customer at creation date. */
		billingCode: string;
		/** Gets or sets the billing reference, additional information at access level to be displayed in the invoice. */
		billingRef: string;
		/** Gets or sets the comment. */
		comment: string;
		/** Gets or sets the external conference reference. */
		externalConferenceReference: string;
		/** Gets or sets the conference reference external name for audio. */
		networkElementAccessName: string;
		/** Gets or sets the conference reference for audio access, microsite and login for WebEx. */
		networkElementAccessReference: string;
		/** Gets or sets the bridge number (if audio), WebEx platform, ANW platform. */
		networkElementReference: string;
		/** Gets or sets the technical environment. */
		networkElementTechnicalEnvironment: string;
		/** Gets or sets the Topic. */
		topic: string;
		/** Gets or sets the access product name. */
		accessProductName: string;
		/** Gets the access category. */
		accessCategory: string;
		/** Gets the access type. */
		accessType: string;
		/** Gets the conference type. */
		conferenceType: string;
	}
}
