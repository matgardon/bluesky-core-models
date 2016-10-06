namespace bluesky.core.models.customerOrder {
    import TechnicalProductDto = bluesky.core.models.technicalData.ITechnicalProductDto;

    /** Dto of a subscriptionA subscription is product offering sold to a customer and applied to a singlesubscriber node. */
    export interface ICustomerOrderSubscriptionDto extends IResourceBase {
        /** Identifier of an existing subscription in MetraNet. It is null incase of a new subscription and therefore filled by Orchestration. */
        SubId?: number;
        /** Subscription Name, if required by the Customer. It will be availableon its invoice. */
        DisplayName: string;
        /** This will be filled by OrderEntry with the Product Offering 'Product Offering Display Name' attribute in MetraNet. */
        OfferName: string;
        /** Identifier of an existing group subscription. It is null in case ofa new subscription and therefore filled by Orchestration. It is null in case ofSupporting PO subscription too, as they are Individually Subscribed. */
        GroupSubId?: number;
        /** Identifies the parent subscription of the current subscription. Itis filled after subscription has been made. */
        ParentSubId?: number;
        /** Identifier of a Product Offering in MetraNet. */
        POId: number;
        /** Identifier of the parent product offering. */
        ParentPOId?: number;
        /** Quote identifier. */
        QuoteId?: number;
        /** Subscription start date. */
        StartDate?: Date;
        /** Subscription end date. */
        EndDate?: Date;
        /** Gets or sets the contract start date. */
        ContractStartDate?: Date;
        /** Gets or sets the duration (in months). */
        Duration?: number;
        /** Gets or sets the quote reference. */
        QuoteReference: string;
        /** Type of Product Offering. */
        ProductOfferingType: string;
        /** List of management subsidiaries. */
        ManagementSubsidiaries: any[];
        /** List of UdrcInfos */
        UdrcInfos: IUdrcInfoDto[];
        /** List of technical links */
        TechnicalLinks: TechnicalProductDto[];
    }
}
