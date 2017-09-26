namespace bluesky.core.model.offer {

        export interface IBridgingRateEntryDto extends IRateEntryWithPriceDto {

                // Gets or sets Retail bridging rate per minute
                RetailBridgingRatePerMinute: number
                // Gets or sets Partner bridging rate per minute
                PartnerBridgingRatePerMinute: number;
                // Gets or sets the ServiceType.
                ServiceType: IOrderManagementEnumerationDto
                // Gets or sets the service unit.
                ServiceUnit: IOrderManagementEnumerationDto;
        }
}