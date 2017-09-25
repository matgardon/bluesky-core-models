namespace bluesky.core.model.offer {
        export interface IBandDiscountSettingRateEntryDto extends IRateEntryWithPriceDto {

                // Gets or sets tax band.
                Band: string;

                // Gets or sets Minute threshold start.
                // Required start thresholds of minutes within given Band that must be reached in order to be entitled to the discount.
                MinuteThresholdStart: number;

                // Gets or sets Minute threshold end.
                // Required end thresholds of minutes within given Band that must be reached in order to be entitled to the discount.

                // <remarks>Mandatory.</remarks>
                MinuteThresholdEnd: number;

                // Gets or sets Retail discount percentage
                RetailDiscountPercentage: number;

                // Gets or sets Partner discount percentage
                PartnerDiscountPercentage: number;

                // Gets or sets rating key
                RatingKey: string;
        }
}
