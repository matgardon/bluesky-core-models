namespace bluesky.core.model.quote {
	/** Dto for quote work items summary.Returns information about the number of quotes for each type of action to perform. */
	export interface IQuoteWorkItemsSummaryDto extends IResourceBase {
		/** Gets or sets the number of quotes in pending status. */
		QuotesPendingCount: number;
		/** Gets or sets the number of quotes in approval in progress status. */
		QuotesUnderApprovalCount: number;
		/** Gets or sets the number of quotes to approve by the authenticated user. */
		QuotesToApproveCount: number;
		/** Gets or sets the number of quotes to work on. */
		TotalCount: number;
	}
}
