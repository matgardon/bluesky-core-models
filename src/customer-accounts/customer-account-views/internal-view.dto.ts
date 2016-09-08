 namespace bluesky.core.models.account {
	/** Dto of an internal view.Contains the internal account information. */
	export interface InternalViewDto extends ResourceBase {
		/** Gets or sets a value indicating whether the is billable. */
		isBillable: boolean;
		/** Gets or sets the name of the division associated with the account. */
		division: string;
		/** Gets or sets a value indicating whether the  is a folder. */
		isFolder: boolean;
		/** Gets or sets the answer to the security question. */
		securityAnswer: string;
		/** Gets or sets the status reason text. */
		statusReasonOther: string;
		/** Gets or sets a value indicating whether the  is tax exempt. */
		isTaxExempt: boolean;
		/** Gets or sets the tax exempt identifier. */
		taxExemptId: string;
		/** Gets or sets the tax exemption start date. */
		taxExemptStartDate: Date;
		/** Gets or sets the tax exemption end date. */
		taxExemptEndDate: Date;
		/** Gets or sets the tax service address Pcode. */
		taxServiceAddressPcode: number;
		/** Gets or sets the additional tax information */
		additionalTaxInformation: string;
		/** Gets or sets the Additional tax exemption. */
		additionalTax: boolean;
		/** Gets the currency. */
		currency: string;
		/** Gets the invoice delivery method. */
		invoiceDeliveryMethod: string;
		/** Gets the language. */
		language: string;
		/** Gets the MetraTax country eligiblity. */
		metraTaxCountryEligibility: string;
		/** Gets the MetraTax country zone. */
		metraTaxCountryZone: string;
		/** Gets the MetraTax override band. */
		metraTaxOverrideBand: string;
		/** Gets the payment method. */
		paymentMethod: string;
		/** Gets the security question. */
		securityQuestion: string;
		/** Gets the status reason. */
		statusReason: string;
		/** Gets the tax vendor. */
		taxVendor: string;
		/** Gets the time zone identifier. */
		timeZoneId: string;
	}
}
