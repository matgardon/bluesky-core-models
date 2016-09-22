 namespace bluesky.core.models {
    /** Base class for all resources.TODO MGA : Move this class in a base API project */
    export interface IResourceBase {
        /** Links to related resources. */
        //TODO MGA handle strong typings on what constitue a link to use them correctly with _self, _parent etc
        Links: any[];
    }
}
