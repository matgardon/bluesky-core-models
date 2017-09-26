namespace bluesky.core.model.offer {
        export interface IUdrcTaperedRateEntryDto extends IRateEntryWithPriceDto {
                // Gets or sets Room size
                RoomSize: number;
                // Gets or sets number of units.
                UnitValue: number;
                // Gets or sets Unit amount
                UnitAmount: number;
                // Gets or sets rating key
                RatingKey: string;
        }
}