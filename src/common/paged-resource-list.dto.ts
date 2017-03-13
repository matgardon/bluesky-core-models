 namespace bluesky.core.model {
    export interface IPagedResourceList<T extends IResourceBase> extends IResourceBase {
        /** La liste interne concrète des ressources de type T de cette liste non paginée. */
        Items: T[];
        FirstItemOnPage: number;
        HasNextPage: boolean;
        HasPreviousPage: boolean;
        IsFirstPage: boolean;
        IsLastPage: boolean;
        LastItemOnPage: number;
        PageCount: number;
        PageNumber: number;
        PageSize: number;
        TotalItemCount: number;
    }
}
