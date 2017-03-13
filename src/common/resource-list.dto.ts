 namespace bluesky.core.model {

    export interface IResourceList<T extends IResourceBase> extends IResourceBase {
        /** La liste interne concrète des ressources de type T de cette liste non paginée. */
        Items: T[];
        /** Le nombre d'éléments retournés dans cette liste non paginée. */
        TotalCount: number;
    }
}
