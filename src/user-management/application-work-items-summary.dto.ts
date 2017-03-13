 namespace bluesky.core.model.userManagement {
	/** Dto of an application work items summary.The summary contains for a specific application a summarized view of the work items.Each work item contains the number of the elements to monitor for a specific type of action to perform. */
	export interface IApplicationWorkItemsSummaryDto extends IResourceBase {
		/** Gets or sets the list of work items to track. */
		WorkItemHeaders: userManagement.IWorkItemHeaderDto[];
		/** Gets or sets the total number of monitored elements. */
		TotalCount: number;
	}
}
