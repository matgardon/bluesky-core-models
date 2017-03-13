 namespace bluesky.core.model.account {
	/** Dto of a common view.Contains attributes shared by all of the accounts. */
	export interface ICommonViewDto extends IResourceBase {
		/** Gets or sets the comment to be manually filled by CSR, SalesAdmin... to provide whatever additional information required. */
		Comment: string;
		/** Gets or sets the requester to be manually filled by CSR, SalesAdmin... to provide whatever additional information required. */
		StatusRequestedBy: string;
		/** Gets or sets the user who created the account. */
		CreatedBy: string;
		/** Gets or sets the account creation date. */
		CreatedDate: Date;
		/** Gets or sets the customer node name. */
		CustomerNodeName: string;
		/** Gets or sets the user name of the logo present in the account hierarchy. */
		LogoUserName: string;
		/** Gets or sets the user who last modified the account. */
		ModifiedBy: string;
		/** Gets or sets the account last modification date. */
		ModifiedDate: Date;
		/** Gets or sets the assigned sales account. */
		SalesAccountAssigned: string;
		/** Gets or sets the display name of the assigned sales account. */
		SalesAccountDisplayName: string;
		/** Gets or sets the communication Opt-in. Used to sign-up to receive email notifications. */
		CommunicationOptIn?: boolean;
		/** Gets or sets the partner external ID. */
		PartnerExternalId: string;
		/** Gets theorder status. */
		OrderStatus: string;
		/** Gets the effective management subsidiary. */
		EffectiveManagementSubsidiary: string;
	}
}
