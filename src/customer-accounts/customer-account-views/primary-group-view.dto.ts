declare namespace bluesky.core.models.account {
	/** Contains attributes related to the group and primary group. */
	interface PrimaryGroupViewDto extends ResourceBase {
		/** Gets or sets a value indicating whether the request flow validation is activated. */
		isRqstFlowValidationActivated: boolean;
		/** Gets the subsidiary managing the group or primary group. */
		managementSubsidiary: string;
	}
}
