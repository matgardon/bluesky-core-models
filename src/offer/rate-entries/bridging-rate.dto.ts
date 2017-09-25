namespace bluesky.core.model.offer {

        export interface IBridgingRateEntryDto extends IRateEntryWithPriceDto {

                /// <summary>
                /// Gets or sets Retail bridging rate per minute
                /// </summary>
                /// <remarks>Optional.</remarks>
                RetailBridgingRatePerMinute: number
                /// <summary>
                /// Gets or sets Partner bridging rate per minute
                /// </summary>
                /// <remarks>Optional.</remarks>
                PartnerBridgingRatePerMinute: number;

                /// <summary>
                /// Gets or sets the ServiceType.
                /// </summary>
                ServiceType: IOrderManagementEnumerationDto

                /// <summary>
                /// Gets or sets the service unit.
                /// </summary>
                ServiceUnit: IOrderManagementEnumerationDto;
        }
}