declare namespace bluesky.core.models.userManagement {
	/** Dto of an application work items summary.The summary contains for a specific application a summarized view of the work items.Each work item contains the number of the elements to monitor for a specific type of action to perform. */
	interface ApplicationWorkItemsSummaryDto extends ResourceBase {
		/** Gets or sets the list of work items to track. */
		workItemHeaders: WorkItemHeaderDto[];
		/** Gets or sets the total number of monitored elements. */
		totalCount: number;
	}
}
