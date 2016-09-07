declare namespace bluesky.core.models.account {
	/** Header DTO of an accountTODO MGA : inheriting from OrderManagementEntityDto is a hack, as we do not have custom DTOs for Accounts comming from OrderManagement DB. TOFIX when we don't have these entities saved in OM. */
	interface AccountHeaderDto extends OrderManagementEntityDto {
		/** Gets or sets the user name assigned to the account.TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		userName: string;
		/** Gets or sets the account type. */
		accountType: string;
		/** Gets or sets the customer node name. */
		customerNodeName: string;
		/** TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		payerUserName: string;
		/** TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		logoUserName: string;
		/** The status of the account. */
		accountStatus: string;
	}
}
