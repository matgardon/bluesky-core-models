namespace bluesky.core.model.offer {
        export interface IRateEntryWithPriceDto {
                // Gets or sets the custom price.
                CustomPrice: number;
                // Gets or sets origin price.
                ProductCategory: string;
                // Gets or sets the price unit
                OriginPrice: number;
                // Gets or sets the SubsidiaryName.
                PriceUnit: string;
                // Gets or sets the SubsidiaryName.
                SubsidiaryName: string;
                // Gets or sets the Currency.
                Currency: string;
                // Get or set the product category, Can be null
                RateEntryType: string;
        }
}