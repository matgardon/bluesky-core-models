declare namespace bluesky.core.models.account {
	/** Dto of an access.The AccessAccount is the customer hierarchy node that represents the instance of asubscribed product for a given user (i.e. the use  of a particular Arkadin orArkadin's supplier resource).It holds access identifier that allows connection, CDR guidance.It is linked to a unique service platform.It represents service end point - access to Arkadin conferencing infrastructure,provisioned in the network. */
	interface AccessAccountDto extends AccountDto {
		/** Gets or sets the Alias of the access. */
		alias: string;
		/** The AccessAccount view contains attributes storing technical information for each UserAccount's AccessAccount instance. */
		accessView: AccessViewDto;
	}
}
