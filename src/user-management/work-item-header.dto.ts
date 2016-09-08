 namespace bluesky.core.models.userManagement {
	/** Header Dto of a work item.A work item contains a type and number of elements to be monitored for a connected user (e.g.: 7 quotes to approve). */
	export interface WorkItemHeaderDto extends ResourceBase {
		/** Gets or sets the identifier of the work item.Used to identify the action to be performed by the user. */
		identifier: string;
		/** Gets or sets the name of the work item.The name is the displayed value of the identifier. */
		name: string;
		/** Gets or sets the number of monitored elements. */
		count: number;
	}
}
