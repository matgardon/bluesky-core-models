namespace bluesky.core.model.offer {
        export interface IOptionChargeRateReDto extends IRateEntryWithPriceDto{
        // Gets or sets Rate per unit
        RatePerUnit :number;
        // Gets or sets Flat rate
        FlatRate:number;
        // Gets or Sets Is Flat Rate Used 
        IsFlatRateUsed :boolean;
        // Gets or Sets Is Unit Rate Used
        IsUnitRateUsed:string;
        // Gets or sets the OptionChargeType.
        OptionChargeType:IOrderManagementEnumerationDto;
}
}