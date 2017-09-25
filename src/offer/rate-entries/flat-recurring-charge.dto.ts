namespace bluesky.core.model.offer {

        export interface IFlatRecurringChargeRateEntryDtoDto extends IRateEntryWithPriceDto{
       
        /// <summary>
        /// Gets or sets Recurring charge amount
        /// </summary>
        /// <remarks>Mandatory.</remarks>
        RCAmount:number;

        /// <summary>
        /// Gets or sets rating key
        /// </summary>
        /// <remarks>Optional.</remarks>
        RatingKey:string;
}}