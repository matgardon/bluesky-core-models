 namespace bluesky.core.models.account {
	export interface UserContactViewDto extends ContactViewDto {
		/** Gets or sets the external language, needed by the TI and the Provisioning. */
		externalLanguage: string;
		/** Gets or sets the external timezone, needed by the TI and the Provisioning. */
		externalTimeZone: string;
	}
}
