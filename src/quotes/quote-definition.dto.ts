namespace bluesky.core.models.quote {
	/** Model for Quote definition */
	export interface IQuoteDefinition {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the label. */
		Label: string;
		/** Gets or sets the name. */
		Name: string;
		/** Gets or sets the owner first name. */
		OwnerFirstName: string;
		/** Gets or sets the owner last name. */
		OwnerLastName: string;
		/** Gets or sets the owner login. */
		OwnerLogin: string;
		/** Gets or sets the quote creation date. */
		CreationDate: Date;
		/** Gets or sets the contract start date. */
		ContractStartDate: Date;
		/** Gets or sets the duration. */
		Duration: number;
		/** Gets or sets the quote status value. */
		QuoteStatusValue: number;
		/** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.QuoteType value. */
		QuoteTypeValue: number;
		/** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.BusinessUnit value. */
		BusinessUnitValue: string;
		/** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency value. */
		CurrencyValue: string;
		/** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.CustomerSize value. */
		CustomerSizeValue: string;
		/** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName value. */
		SubsidiaryNameValue: string;
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
		/** Gets or sets the Sales Force Customer Account Id. */
		SFACustomerAccountId: string;
		/** Gets or sets the Sales Force Customer Account Name. */
		SFACustomerAccountName: string;
		/** Gets or sets the current approver. */
		CurrentApprover: string;
		/** Gets or sets the opportunity Id. */
		OpportunityId: string;
		/** Gets or sets the SFA quote Id. */
		SFAQuoteId: string;
		/** Gets or sets the related export parameter identifier. */
		ExportParameterId: number;
		/** Gets or sets the C And C ProductOffering Id. */
		ConferencingAndCollaborationProductOfferingId: number;
		/** Gets or sets the customized Rate schedules. */
		RateSchedules: IRateScheduleDefinition[];
		/** Gets or sets the Udrc units */
		UdrcUnits: IUdrcUnitDefinition[];
		/** Gets the related approval decisions for quote. */
		ApprovalDecisions: IApprovalDecisionDefinition[];
		/** Gets or sets the Supporting Product Offering Ids */
		SupportingProductOfferingIds: number[];
	}
}
