 namespace bluesky.core.model.account {
	/** Contains attributes related to the group and primary group. */
	export interface IPrimaryGroupViewDto extends IResourceBase {
		/** Gets or sets a value indicating whether the request flow validation is activated. */
		IsRqstFlowValidationActivated?: boolean;
		/** Gets the subsidiary managing the group or primary group. */
		ManagementSubsidiary: string;
	}
}
