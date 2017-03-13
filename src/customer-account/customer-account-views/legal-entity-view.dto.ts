 namespace bluesky.core.model.account {
	/** Dto of a legal entity view.The Legal Entity view contains attributes related to Legal Entity setup. */
	export interface ILegalEntityViewDto extends IResourceBase {
		/** Gets or sets the company registration number to National Commercial Board (ex: SIREN in France). */
		CommercialRegistrationNumber: string;
		/** Gets or sets the equivalent to EU tax registration number. */
		TaxRegistrationNumber: string;
		/** Gets or sets the billing subsidiary code. */
		SubBillingCode: string;
		/** Gets the billing currency. */
		BillingCurrency: string;
		/** Gets the subsidiary managing the billing subsidiaries of billing accounts (OE inheritance mechanism). */
		BillingSubsidiary: string;
		/** Gets the payment term. */
		PaymentTerm: string;
	}
}
