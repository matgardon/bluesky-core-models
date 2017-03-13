namespace bluesky.core.model.offer {
    /**
     * Product offering.
     */
    export interface IProductOfferingDto {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the Offer type. */
        OfferType: string;
        /** Gets or sets the name. */
        Name: string;
        /** Gets or sets the display name. */
        DisplayName: string;
        /** Gets or sets the description. */
        Description: string;
        /** Gets or sets the availability start date. */
        AvailabilityStartDate: Date;
        /** Gets or sets the availability end date. */
        AvailabilityEndDate: Date;
        /** Gets or sets the effective start date. */
        EffectiveStartDate: Date;
        /** Gets or sets the effective end date. */
        EffectiveEndDate: Date;
        /**Gets or sets the AggregateType enumeration. */
        AggregateType: IMetraNetEnumerationDto;
    }
}
