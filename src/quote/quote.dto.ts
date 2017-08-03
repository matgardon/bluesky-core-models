namespace bluesky.core.model.quote {
    /** DTO of a quote. */
    export interface IQuoteDto extends IResourceBase {
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
        /** Gets or sets the effective date. */
        EffectiveDate?: Date;
        /** Gets or sets the contract start date. */
        ContractStartDate?: Date;
        /** Gets or sets the duration. */
        Duration?: number;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteStatus. */
        QuoteStatus: IOrderManagementEnumerationDto;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteType. */
        QuoteType: IOrderManagementEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.BusinessUnit. */
        BusinessUnit: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency. */
        Currency: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.CustomerSize. */
        CustomerSize: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName. */
        SubsidiaryName: IMetraNetEnumerationDto;
        /** Gets or sets the name of the assigned logo. */
        AssignedLogo: string;
        /** Gets or sets the display name of the assigned logo. */
        AssignedLogoName: string;
        /** Gets or sets the notes. */
        Notes: string;
        /** Gets or sets the internal note. */
        InternalNote: string;
        /** Gets or sets the origin name, for addendum and migration. */
        OriginName: string;
        /** Gets or sets the sfa contract identifier. */
        SFAContractId: string;
        /** Gets or sets the name of the SFDC customer. */
        SFDCCustomerName: string;
        /** Gets or sets the sales account. */
        SalesAccount: string;
        /** Gets or sets the current approver. */
        CurrentApprover: string;
        /** Gets or sets the opportunity Id. */
        OpportunityId: string;
        /** Gets or sets the SFA quote Id. */
        SFAQuoteId: string;
        /** Gets or sets the Sales Force Customer Account Id. */
        SFACustomerAccountId: string;
        /** Gets or sets the Sales Force Customer Account Name. */
        SFACustomerAccountName: string;
        /** Gets or sets the C And C ProductOffering Id. */
        ConferencingAndCollaborationProductOfferingId: number;
        /** Gets or sets the export parameter id. */
        ExportParameterId?: number;
        /** Gets or sets the automated deactivation at contract's end date. */
        IsAutomatedDeactivation: boolean;
        /** Gets or sets the Sales Force Account online segment  */
        SFAIsOnlineCustomer: boolean;
    }
}
