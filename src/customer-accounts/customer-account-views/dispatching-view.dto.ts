 namespace bluesky.core.models.account {
	/** Dto of a Dispatching view.Contains attributes related to account segmentation and dispatching. */
	export interface IDispatchingViewDto extends models.IResourceBase {
		/** Gets or sets the cost center. */
		CostCenter: string;
		/** Gets or sets the first free criterion. */
		Dispatch1: string;
		/** Gets or sets the second free criterion. */
		Dispatch2: string;
		/** Gets the branch country. */
		BranchCountry: string;
		/** Gets the branch department. */
		BranchDepartment: string;
	}
}
