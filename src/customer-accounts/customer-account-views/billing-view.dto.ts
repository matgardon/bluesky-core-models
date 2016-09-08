 namespace bluesky.core.models.account {
	/** Dto of a billing view.Contains informations related to a billing account and financial processing. */
	export interface BillingViewDto extends ResourceBase {
		/** Gets or sets the Arkadin bank account details (defined in MT SDD). */
		arkadinBankAccountDetailsId: string;
		/** Gets or sets a value indicating whether the related billing account is a GSA account with a unique central invoice. */
		isCentralBilling: boolean;
		/** Gets or sets a value indicating whether a cover page is required. */
		isCoverPageRequired: boolean;
		/** Gets or sets a value indicating whether a customer purchase order is mandatory. */
		isPurchaseOrderMandatory: boolean;
		/** Gets or sets the username of a legal entity node in the same account hierarchy (children of the same Logo). */
		masterLegalEntityUserName: string;
		/** Gets or sets the expiry date for the customer purchase order. */
		purchaseOrderExpiryDate: Date;
		/** Gets or sets the customer purchase order reference. */
		purchaseOrderReference: string;
		/** Gets or sets the registration number in the country of the account (i.e. SIRET/RCS numbers in France). */
		registrationNumber: string;
		/** Gets or sets the value of the corresponding opportunity file (SFDC externalID). */
		salesForceId: string;
		/** Gets or sets the billing subsidiary code. */
		subBillingCode: string;
		/** Invoice minimum amount. */
		invoiceMinimumAmount: number;
		/** Indicates if the general admin fee must be applied. */
		generalAdminFeeApplied: boolean;
		/** Indicates if the paper based invoice fee must be applied. */
		paperBasedInvoiceFeeApplied: boolean;
		/** Gets the subsidiary managing the invoice. */
		billingSubsidiary: string;
		/** Gets the Collaboration Usage Details template. */
		cUDTemplate: string;
		/** Gets an Event Usage Details template. */
		eUDTemplate: string;
		/** Gets the invoice delivery method. */
		invoiceDeliveryMethod: string;
		/** Gets the invoice language. */
		invoiceLanguage: string;
		/** Gets the invoice output format. */
		invoiceOutputFormat: string;
		/** Gets the legal entity inheritance. */
		legalEntityInheritance: string;
		/** Gets the subsidiary managing thebilling account if necessary from a provisioning point of view. */
		managementSubsidiary: string;
		/** Gets the navision instance where this customer billing data is reported to. */
		navisionInstance: string;
		/** Gets the payment term code. */
		paymentTermCode: string;
		/** Gets the print house in charge of invoice generation. */
		printHouse: string;
		/** Gets the subsidiary managing the revenue fo the current billing account if different from the billing subsidiary. */
		revenueSubsidiary: string;
		/** IST (Invoice Suppression Threshold) IMA (Invoice Minimum Amount) information. */
		istimaInfo: {
		/** Product offering MetraNet identifier. */
			productOfferingMNId: number;
		/** Invoice Suppression Threshold from. */
			invoiceSuppressionThresholdFrom: number;
		/** Invoice Suppression Threshold to. */
			invoiceSuppressionThresholdTo: number;
		/** Subscription identifier. */
			subscriptionId: number;
		};
	}
}
