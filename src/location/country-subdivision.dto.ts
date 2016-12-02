namespace bluesky.core.models.location {
    //TODO MGA: someone added another DTO to represent a state (stateDto), to fix this duplication of data models
    export interface ICountrySubdivisionDto extends IResourceBase {
        CountryCode: string;
        CountrySubdivisionCode: string;
        CountrySubdivisionName: string;
    }
}
