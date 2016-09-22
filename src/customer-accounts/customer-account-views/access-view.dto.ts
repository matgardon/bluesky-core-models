 namespace bluesky.core.models.account {
	/** Dto of an access view.Contains technical information for each user's access instance. */
	export interface IAccessViewDto extends core.models.IResourceBase {
		/** Gets or sets the login for Web products. */
		AccessLogin: string;
		/** Gets or sets the password for credential requirements on service platform (= pin moderator). */
		AccessPassword: string;
		/** Gets or sets AccessAccount personal information numberUsed by user to access the service. */
		AudioModeratorPIN: string;
		/** Gets or sets the Personal Information Number for the audio participant. */
		AudioParticipantPIN: string;
		/** Gets or sets the information provided by the customer at creation date. */
		BillingCode: string;
		/** Gets or sets the billing reference, additional information at access level to be displayed in the invoice. */
		BillingRef: string;
		/** Gets or sets the comment. */
		Comment: string;
		/** Gets or sets the external conference reference. */
		ExternalConferenceReference: string;
		/** Gets or sets the conference reference external name for audio. */
		NetworkElementAccessName: string;
		/** Gets or sets the conference reference for audio access, microsite and login for WebEx. */
		NetworkElementAccessReference: string;
		/** Gets or sets the bridge number (if audio), WebEx platform, ANW platform. */
		NetworkElementReference: string;
		/** Gets or sets the technical environment. */
		NetworkElementTechnicalEnvironment: string;
		/** Gets or sets the Topic. */
		Topic: string;
		/** Gets or sets the access product name. */
		AccessProductName: string;
		/** Gets the access category. */
		AccessCategory: string;
		/** Gets the access type. */
		AccessType: string;
		/** Gets the conference type. */
		ConferenceType: string;
	}
}
