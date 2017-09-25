namespace bluesky.core.model.offer {
        export interface IOptionChargeRateReDto extends IRateEntryWithPriceDto{
     
        /// <summary>
        /// Gets or sets Rate per unit
        /// </summary>
        /// <remarks>Mandatory.</remarks>
        RatePerUnit :number;

        /// <summary>
        /// Gets or sets Flat rate
        /// </summary>
        /// <remarks>Mandatory.</remarks>
        FlatRate:number;

        /// <summary>
        /// Gets or Sets Is Flat Rate Used 
        /// </summary>
        /// <remarks>Mandatory.</remarks>
        IsFlatRateUsed :boolean;

        /// <summary>
        /// Gets or Sets Is Unit Rate Used
        /// </summary>
        /// <remarks>Mandatory.</remarks>
        IsUnitRateUsed:string;

        /// <summary>
        /// Gets or sets the OptionChargeType.
        /// </summary>
        OptionChargeType:IOrderManagementEnumerationDto;
}
}