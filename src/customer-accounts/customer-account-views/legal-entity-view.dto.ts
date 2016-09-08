 namespace bluesky.core.models.account {
	/** Dto of a legal entity view.The Legal Entity view contains attributes related to Legal Entity setup. */
	export interface LegalEntityViewDto extends ResourceBase {
		/** Gets or sets the company registration number to National Commercial Board (ex: SIREN in France). */
		commercialRegistrationNumber: string;
		/** Gets or sets the equivalent to EU tax registration number. */
		taxRegistrationNumber: string;
		/** Gets or sets the billing subsidiary code. */
		subBillingCode: string;
		/** Gets the billing currency. */
		billingCurrency: string;
		/** Gets the subsidiary managing the billing subsidiaries of billing accounts (OE inheritance mechanism). */
		billingSubsidiary: string;
		/** Gets the payment term. */
		paymentTerm: string;
	}
}
