namespace bluesky.core.model.offer {
        export interface IUdrcTieredRateEntryDto extends IRateEntryWithPriceDto{
                
                RoomSize: number;

                BaseAmount: number;

                UnitAmount: number;

                UnitValue: number;

                RatingKey: string;

                UnitValueOperator: string;
        }
}