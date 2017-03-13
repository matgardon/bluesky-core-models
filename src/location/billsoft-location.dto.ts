namespace bluesky.core.model.location {
    export interface IBillSoftLocationDto extends IResourceBase {
            PCode: string;
            IsPrimaryLocation :boolean;
            County: string;
            City: string;
            BeginningZipCode: string;
            EndingZipCode: string;
            CountryIsoCode: string;
            CountrySubdivision: ICountrySubdivisionDto;       
    }
}
