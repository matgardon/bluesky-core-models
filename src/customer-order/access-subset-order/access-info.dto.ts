namespace bluesky.core.model.customerOrder {
	/** Additional information on a User used for audio and web accesses creation. */
	export interface IAccessInfoDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** If specified, this is the value of Moderator PIN requested by the customer. */
		ModeratorPIN: string;
		/** If specified, this is the value of Participant PIN requested by the customer */
		ParticipantPIN: string;
		/** Used for WebEx Product, in case the user specifies a login for itsWebEx access creation. */
		WebLogin: string;
		/** Used for WebEx Product, in case the user specifies a password for its Webex access creation. */
		WebPassword: string;
		/** AccessAccount Name of the permanent Audio AccessAccount */
		AudioAccessName: string;
		/** Start Date of the one-time access */
		StartDate?: Date;
		/** Flag to indicate if the accesses to create are One-Time accesses. */
		IsOneTime?: boolean;
		/** Billing code. */
		BillingCode: string;
		/** Gets or sets the billing reference, additional information at access level to be displayed in the invoice. */
		BillingRef: string;
		/** Topic. Used by Selfcare. */
		Topic: string;
		/** Duration. Used by Selfcare. */
		Duration?: number;
		/** Comment. */
		Comment: string;
		/** Management subsidiary for the given user. It is filled by OrderEntry before order submission. This attributes corresponds to the Managementsubsidiary specified on the closest direct ascendant of the User node */
		Subsidiary: string;
		/** Value of the conference type. */
		ConferenceType: string;
		/** Indicates if the participant PIN must be reset. */
		IsParticipantPinReset: boolean;
		/** Indicates if the moderator PIN must be reset. */
		IsModeratorPinReset: boolean;
		/** If specified, gets or sets the list of technical specifications for which hidden accesses will be created. */
		HiddenAccessesTechnicalSpecifications: string[];
		/** If specified, gets or sets the list of technical specifications for which hidden accesses will be created. */
		AccessCredentials: IAccessCredentialsDto[];
	}
}
