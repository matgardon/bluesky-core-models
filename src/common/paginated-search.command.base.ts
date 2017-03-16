namespace bluesky.core.command {
	/** Shared properties for paginated search commands. */
	export interface IBasePaginatedSearchCommand {
		/** Start index for the paginated results (index of the nth item as the starting one to retrieve from). */
		Start?: number;
		/** Page size (number of items) to retrieve starting from the Start index. */
		Limit?: number;
	}
}
