namespace bluesky.core.model.welcomePack {
    export interface IProductDto {
        TechnicalName: string;
        TechnicalType: string;
        ModeratorPin: string;
        ParticipantPin: string;
        ConferenceRef: string;
        Login: string;
        Password: string;
        Urls: IProductUrlDto[];
        LocalDdis: ICountryDdisDto;
        OtherDdis: ICountryDdisDto[];
    }
}
