 namespace bluesky.core.models {
    export interface IPagedResourceList<T extends models.IResourceBase> extends models.IResourceBase {
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
