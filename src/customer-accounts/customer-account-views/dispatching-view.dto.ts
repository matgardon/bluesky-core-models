 namespace bluesky.core.models.account {
	/** Dto of a Dispatching view.Contains attributes related to account segmentation and dispatching. */
	export interface DispatchingViewDto extends ResourceBase {
		/** Gets or sets the cost center. */
		costCenter: string;
		/** Gets or sets the first free criterion. */
		dispatch1: string;
		/** Gets or sets the second free criterion. */
		dispatch2: string;
		/** Gets the branch country. */
		branchCountry: string;
		/** Gets the branch department. */
		branchDepartment: string;
	}
}
