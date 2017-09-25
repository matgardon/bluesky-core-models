namespace bluesky.core.model.offer {
        export interface IBandDiscountSettingRateEntryDto extends IRateEntryWithPriceDto {
                /// <summary>
                /// Gets or sets tax band.
                /// </summary>        
                /// <remarks>Mandatory.</remarks>
                Band: string;

                /// <summary>
                /// Gets or sets Minute threshold start.
                /// Required start thresholds of minutes within given Band that must be reached in order to be entitled to the discount.
                /// </summary>
                /// <remarks>Mandatory.</remarks>
                MinuteThresholdStart: number;

                /// <summary>
                /// Gets or sets Minute threshold end.
                /// Required end thresholds of minutes within given Band that must be reached in order to be entitled to the discount.
                /// </summary>
                /// <remarks>Mandatory.</remarks>
                MinuteThresholdEnd: number;

                /// <summary>
                /// Gets or sets Retail discount percentage
                /// </summary>
                /// <remarks>Optional.</remarks>
                RetailDiscountPercentage: number;

                /// <summary>
                /// Gets or sets Partner discount percentage
                /// </summary>
                /// <remarks>Optional.</remarks>
                PartnerDiscountPercentage: number;

                /// <summary>
                /// Gets or sets rating key
                /// </summary>
                RatingKey: string;
        }
}
