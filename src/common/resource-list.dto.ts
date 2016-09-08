 namespace bluesky.core.models {

    export interface ResourceList<T extends ResourceBase> extends ResourceBase {
		/** La liste interne concrète des ressources de type T de cette liste non paginée. */
		items: T[];
		/** Le nombre d'éléments retournés dans cette liste non paginée. */
		totalCount: number;
    }
}
