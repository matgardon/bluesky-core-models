namespace bluesky.core.model.quote {

    import QuoteSubscriptionDto = subscription.IQuoteSubscriptionDto;

    /** Header DTO of a quote. */
    export interface IQuoteHeaderDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the label. */
        Label: string;
        /** Gets or sets the name. */
        Name: string;
        /** Gets or sets the version.The version is updated when it enters an approval process.Mandatory for quote contracts, addendum and migration. */
        Version?: number;
        /** Gets or sets the owner first name. */
        OwnerFirstName: string;
        /** Gets or sets the owner last name. */
        OwnerLastName: string;
        /** Gets or sets the owner login. */
        OwnerLogin: string;
        /** Gets or sets the creation date. */
        CreationDate: Date;
        /** Gets or sets the last modification date. */
        ModificationDate?: Date;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteStatus. */
        QuoteStatus: IOrderManagementEnumerationDto;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteType. */
        QuoteType: IOrderManagementEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency. */
        Currency: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName. */
        SubsidiaryName: IMetraNetEnumerationDto;
        /** Gets or sets the sfa contract identifier. */
        SFAContractId: string;
        /** Gets or sets the name of the SFDC customer. */
        SFDCCustomerName: string;
        /** Gets or sets the C And C ProductOffering Id. */
        ConferencingAndCollaborationProductOfferingId: number;
        /** Quote's subscriptions. */
        QuoteSubscriptions: QuoteSubscriptionDto[];
    }
}
