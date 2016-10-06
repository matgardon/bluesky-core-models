 namespace bluesky.core.models.account {
	/** Dto of a billing view.Contains informations related to a billing account and financial processing. */
	export interface IBillingViewDto extends models.IResourceBase {
		/** Gets or sets the Arkadin bank account details (defined in MT SDD). */
		ArkadinBankAccountDetailsId: string;
		/** Gets or sets a value indicating whether the related billing account is a GSA account with a unique central invoice. */
		IsCentralBilling: boolean;
		/** Gets or sets a value indicating whether a cover page is required. */
		IsCoverPageRequired: boolean;
		/** Gets or sets a value indicating whether a customer purchase order is mandatory. */
		IsPurchaseOrderMandatory: boolean;
		/** Gets or sets the username of a legal entity node in the same account hierarchy (children of the same Logo). */
		MasterLegalEntityUserName: string;
		/** Gets or sets the expiry date for the customer purchase order. */
		PurchaseOrderExpiryDate?: Date;
		/** Gets or sets the customer purchase order reference. */
		PurchaseOrderReference: string;
		/** Gets or sets the registration number in the country of the account (i.e. SIRET/RCS numbers in France). */
		RegistrationNumber: string;
		/** Gets or sets the value of the corresponding opportunity file (SFDC externalID). */
		SalesForceId: string;
		/** Gets or sets the billing subsidiary code. */
		SubBillingCode: string;
		/** Invoice minimum amount. */
		InvoiceMinimumAmount: number;
		/** Indicates if the general admin fee must be applied. */
		GeneralAdminFeeApplied: boolean;
		/** Indicates if the paper based invoice fee must be applied. */
		PaperBasedInvoiceFeeApplied: boolean;
		/** Gets the subsidiary managing the invoice. */
		BillingSubsidiary: string;
		/** Gets the Collaboration Usage Details template. */
		CUDTemplate: string;
		/** Gets an Event Usage Details template. */
		EUDTemplate: string;
		/** Gets the invoice delivery method. */
		InvoiceDeliveryMethod: string;
		/** Gets the invoice language. */
		InvoiceLanguage: string;
		/** Gets the invoice output format. */
		InvoiceOutputFormat: string;
		/** Gets the legal entity inheritance. */
		LegalEntityInheritance: string;
		/** Gets the subsidiary managing thebilling account if necessary from a provisioning point of view. */
		ManagementSubsidiary: string;
		/** Gets the navision instance where this customer billing data is reported to. */
		NavisionInstance: string;
		/** Gets the payment term code. */
		PaymentTermCode: string;
		/** Gets the print house in charge of invoice generation. */
		PrintHouse: string;
		/** Gets the subsidiary managing the revenue fo the current billing account if different from the billing subsidiary. */
		RevenueSubsidiary: string;
		/** IST (Invoice Suppression Threshold) IMA (Invoice Minimum Amount) information. */
		IstimaInfo: account.IIstimaInfoDto;
	}
}
