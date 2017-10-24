namespace bluesky.core.model.offer {
        export interface ISurchargeRateEntryDto extends IRateEntryWithPriceDto {

                // Gets or sets tax band.
                Zone: string;

                // Gets or sets Retail surcharge rate per minute
                RetailSurchargeRatePerMinute: number;

                // Gets or sets Retail surcharge rate per minute
                PartnerSurchargeRatePerMinute: number;

                // Gets or sets the CountryCode.
                CountryCode: IOrderManagementEnumerationDto;
        }
}
