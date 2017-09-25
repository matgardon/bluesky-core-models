namespace bluesky.core.model.offer {
        export interface IRateEntryWithPriceDto {
        
        /// <summary>
        /// Gets or sets the rate entry audit.
        /// </summary>
        CustomPrice:number;
        
        ProductCategory:string;

        /// <summary>
        /// Gets or sets the rate entry audit.
        /// </summary>
        OfferPrice:number;

        /// <summary>
        /// Gets or sets the rate entry audit.
        /// </summary>
        PriceUnit:string;

        /// <summary>
        /// Gets or sets the SubsidiaryName.
        /// </summary>
        SubsidiaryName:string;

        /// <summary>
        /// Gets or sets the Currency.
        /// </summary>
        Currency:string;
        RateEntryType:string;
}
}