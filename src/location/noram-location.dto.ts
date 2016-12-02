namespace bluesky.core.models.location {
    //TODO MGA: to interface
    export interface INoramLocationDto extends IResourceBase {
            PCode: string;
            IsPrimaryLocation :boolean;
            County: string;
            City: string;
            BeginningZipCode: string;
            EndingZipCode: string;
            CountrySubdivision: ICountrySubdivisionDto;       
    }
}
