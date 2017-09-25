namespace bluesky.core.model.offer {
        export interface INonRecurringChargesRateEntryDto extends IRateEntryWithPriceDto {

                NRCAmount: number;
                RatingKey: string;
        }
}