declare namespace bluesky.core.models.account {
	/** Dto of a user view.Contains attributes related to the user setup. */
	interface UserViewDto extends ResourceBase {
		/** Gets or sets the information provided by the customer at creation date. */
		billingCode: string;
		/** Gets or sets a flag indicating whether the user is a moderator. */
		isModerator: boolean;
		/** Gets or sets the email of the user (Collab). */
		login: string;
		/** Gets or sets the value of the corresponding opportunity file (SFDC externalID) in case of a TRIAL user/access creation only. */
		salesForceId: string;
		/** Gets or sets the user first dispatch.Custom field used by the customer and displayed in One Portal (1st field). */
		userDispatch1: string;
		/** Gets or sets user second dispatch.Custom field used by the customer and displayed in One Portal (2nd field). */
		userDispatch2: string;
		/** Billing reference. */
		billingRef: string;
		/** Gets the Selfcare admin level.Defines the hierarchy node under which the user is admin: Logo, Local Logo, Billing Account, Primary Group, and None for simple users. */
		selfCareRelation: string;
		/** Gets the Selfcare role.Defines which role should have the user in the Selcare application (Lounge).- User can manage his Meetings and his Profile.- Admin have same rights and can manage Users (integrated self-provisioning options to create, manage and delete accounts). */
		selfCareRole: string;
		/** If specified, gets or sets the list of the identifiers of the accounts for which the user has admin privileges. */
		additionalAdministrationLevels: string[];
	}
}
