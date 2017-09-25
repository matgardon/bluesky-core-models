namespace bluesky.core.model.offer {
        export interface IUdrcTaperedRateEntryDto extends IRateEntryWithPriceDto {
                // size of the conference room
                RoomSize: number;
                UnitValue: number;
                UnitAmount: number;
                RatingKey: string;
        }
}