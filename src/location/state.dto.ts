namespace bluesky.core.model.location {
    //TODO MGA: someone added another DTO to represent a state (countrySubdivisionDto), to fix this duplication of data models
    export interface IStateDto extends IResourceBase {
        Name?: string;
        Code?: string;
        PCode?: number;
    }
}
