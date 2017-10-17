namespace bluesky.core.model.offer {

        export interface IFlatRecurringChargeRateEntryDto extends IRateEntryWithPriceDto {

                // Gets or sets Recurring charge amount
                RCAmount: number;

                // Gets or sets rating key
                RatingKey: string;
        }
}