namespace bluesky.core.model.offer {
        export interface INonRecurringChargesRateEntryDto extends IRateEntryWithPriceDto {
                // Non recurring charge amount
                NRCAmount: number;
                // Gets or sets rating key
                RatingKey: string;
        }
}