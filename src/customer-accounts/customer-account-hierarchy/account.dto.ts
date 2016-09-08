 namespace bluesky.core.models.account {
	/** DTO of an account.Base class holding MetraNet core account properties and identifiers.TODO MGA : inheriting from OrderManagementEntityDto is a hack, as we do not have custom DTOs for Accounts comming from OrderManagement DB. TOFIX when we don't have these entities saved in OM. */
	export interface AccountDto extends OrderManagementEntityDto {
		/** Gets or sets the account type. */
		accountType: string;
		/** Gets or sets the MetraNet identifier of the account. */
		mNId: number;
		/** Gets or sets the user name assigned to the account.TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		userName: string;
		/** Gets or sets the parent account.TODO MGA : to be renamed to AncestorAccountUid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		ancestorAccountUserName: string;
		/** Gets or sets the account status value. */
		accountStatus: string;
		/** Gets or sets the payer username.TODO MGA : to be renamed to PayerUid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		payerUserName: string;
		/** Gets or sets the start date of the account. */
		accountStartDate: Date;
		/** Gets or sets the end date of the account. */
		accountEndDate: Date;
		/** Gets or sets the start date of the association with the current parent account (ancestor). */
		hierarchyStartDate: Date;
		/** Gets or sets the end date of the association with the current parent account (ancestor). */
		hierarchyEndDate: Date;
		/** Gets or sets the password used by the account to access MetraView site. */
		password: string;
		/** Gets or sets the start date of the payment redirection with the current payer account. */
		paymentStartDate: Date;
		/** Gets or sets the end date of the payment redirection with the current payer account. */
		paymentEndDate: Date;
		/** Gets or sets the Internal view contains the Internal account information.It is required for all types of accounts. */
		internalView: InternalViewDto;
		/** Gets or sets the Common view gathers attributes shared by all of the Accounts. */
		commonView: CommonViewDto;
	}
}
