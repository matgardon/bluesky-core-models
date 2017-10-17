namespace bluesky.core.model.offer {

    export interface IBandRateEntryDto extends IRateEntryWithPriceDto {

        // Gets or sets band
        Band: string;
        // Gets or sets Retail band rate per minute
        RetailBandRatePerMinute: number;
        // Gets or sets Partner band rate per minute
        PartnerBandRatePerMinute: number;
        // Gets or sets the ServiceType.
        ServiceType: IOrderManagementEnumerationDto;
    }
}