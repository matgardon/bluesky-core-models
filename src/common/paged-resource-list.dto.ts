 namespace bluesky.core.models {
    export interface PagedResourceList<T extends ResourceBase> extends ResourceBase {
		/** La liste interne concrète des ressources de type T de cette liste non paginée. */
		items: T[];
		firstItemOnPage: number;
		hasNextPage: boolean;
		hasPreviousPage: boolean;
		isFirstPage: boolean;
		isLastPage: boolean;
		lastItemOnPage: number;
		pageCount: number;
		pageNumber: number;
		pageSize: number;
		totalItemCount: number;
	}
}
