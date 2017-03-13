namespace bluesky.core.model.quote {
	/** Model for Quote definition */
	export interface ISimpleQuoteCreation {
		/** Gets or sets the label. */
		Label: string;
		/** Gets or sets the contract start date. */
		ContractStartDate: Date;
		/** Gets or sets the duration. */
		Duration: number;
		/** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.BusinessUnit value. */
		BusinessUnitValue: string;
		/** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency value. */
		CurrencyValue: string;
		/** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.CustomerSize value. */
		CustomerSizeValue: string;
		/** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName value. */
		SubsidiaryNameValue: string;
		/** Gets or sets the notes. */
		Notes: string;
		/** Gets or sets the name of the SFDC customer. */
		SFDCCustomerName: string;
		/** Gets or sets the sales account. */
		SalesAccount: string;
		/** Gets or sets the Sales Force Customer Account Id. */
		SFACustomerAccountId: string;
		/** Gets or sets the Sales Force Customer Account Name. */
		SFACustomerAccountName: string;
		/** Gets or sets the opportunity Id. */
		OpportunityId: string;
		/** Gets or sets the SFA quote Id. */
		SFAQuoteId: string;
		/** Gets or sets the C And C ProductOffering Id. */
		ConferencingAndCollaborationProductOfferingId: number;
	}
}
