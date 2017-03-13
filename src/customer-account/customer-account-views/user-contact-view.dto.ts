 namespace bluesky.core.model.account {
	export interface IUserContactViewDto extends account.IContactViewDto {
		/** Gets or sets the external language, needed by the TI and the Provisioning. */
		ExternalLanguage: string;
		/** Gets or sets the external timezone, needed by the TI and the Provisioning. */
		ExternalTimeZone: string;
	}
}
