declare namespace bluesky.core.models.account {
	/** Dto of a common view.Contains attributes shared by all of the accounts. */
	interface CommonViewDto extends ResourceBase {
		/** Gets or sets the comment to be manually filled by CSR, SalesAdmin... to provide whatever additional information required. */
		comment: string;
		/** Gets or sets the requester to be manually filled by CSR, SalesAdmin... to provide whatever additional information required. */
		statusRequestedBy: string;
		/** Gets or sets the user who created the account. */
		createdBy: string;
		/** Gets or sets the account creation date. */
		createdDate: Date;
		/** Gets or sets the customer node name. */
		customerNodeName: string;
		/** Gets or sets the user name of the logo present in the account hierarchy. */
		logoUserName: string;
		/** Gets or sets the user who last modified the account. */
		modifiedBy: string;
		/** Gets or sets the account last modification date. */
		modifiedDate: Date;
		/** Gets or sets the assigned sales account. */
		salesAccountAssigned: string;
		/** Gets or sets the display name of the assigned sales account. */
		salesAccountDisplayName: string;
		/** Gets or sets the communication Opt-in. Used to sign-up to receive email notifications. */
		communicationOptIn: boolean;
		/** Gets or sets the partner external ID. */
		partnerExternalId: string;
		/** Gets theorder status. */
		orderStatus: string;
		/** Gets the effective management subsidiary. */
		effectiveManagementSubsidiary: string;
	}
}
