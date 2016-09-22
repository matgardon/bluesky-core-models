 namespace bluesky.core.models {

    export interface IResourceList<T extends models.IResourceBase> extends models.IResourceBase {
        /** La liste interne concrète des ressources de type T de cette liste non paginée. */
        Items: T[];
        /** Le nombre d'éléments retournés dans cette liste non paginée. */
        TotalCount: number;
    }
}
