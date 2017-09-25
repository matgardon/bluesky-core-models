namespace bluesky.core.model.offer {

    export interface IBandRateEntryDto extends IRateEntryWithPriceDto{

        /// <summary>
        /// Gets or sets band
        /// </summary>
        /// <remarks>Optional.</remarks>
        Band: string;

        /// <summary>
        /// Gets or sets Retail band rate per minute
        /// </summary>
        /// <remarks>Optional.</remarks>
        RetailBandRatePerMinute: number;

        /// <summary>
        /// Gets or sets Partner band rate per minute
        /// </summary>
        /// <remarks>Optional.</remarks>
        PartnerBandRatePerMinute: number;

        /// <summary>
        /// Gets or sets the ServiceType.
        /// </summary>
        ServiceType: IOrderManagementEnumerationDto;
    }
}