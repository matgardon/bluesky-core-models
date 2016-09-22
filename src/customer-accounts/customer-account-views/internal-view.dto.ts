 namespace bluesky.core.models.account {
	/** Dto of an internal view.Contains the internal account information. */
	export interface IInternalViewDto extends models.IResourceBase {
		/** Gets or sets a value indicating whether the is billable. */
		IsBillable: boolean;
		/** Gets or sets the name of the division associated with the account. */
		Division: string;
		/** Gets or sets a value indicating whether the  is a folder. */
		IsFolder: boolean;
		/** Gets or sets the answer to the security question. */
		SecurityAnswer: string;
		/** Gets or sets the status reason text. */
		StatusReasonOther: string;
		/** Gets or sets a value indicating whether the  is tax exempt. */
		IsTaxExempt: boolean;
		/** Gets or sets the tax exempt identifier. */
		TaxExemptId: string;
		/** Gets or sets the tax exemption start date. */
		TaxExemptStartDate: Date;
		/** Gets or sets the tax exemption end date. */
		TaxExemptEndDate: Date;
		/** Gets or sets the tax service address Pcode. */
		TaxServiceAddressPcode: number;
		/** Gets or sets the additional tax information */
		AdditionalTaxInformation: string;
		/** Gets or sets the Additional tax exemption. */
		AdditionalTax: boolean;
		/** Gets the currency. */
		Currency: string;
		/** Gets the invoice delivery method. */
		InvoiceDeliveryMethod: string;
		/** Gets the language. */
		Language: string;
		/** Gets the MetraTax country eligiblity. */
		MetraTaxCountryEligibility: string;
		/** Gets the MetraTax country zone. */
		MetraTaxCountryZone: string;
		/** Gets the MetraTax override band. */
		MetraTaxOverrideBand: string;
		/** Gets the payment method. */
		PaymentMethod: string;
		/** Gets the security question. */
		SecurityQuestion: string;
		/** Gets the status reason. */
		StatusReason: string;
		/** Gets the tax vendor. */
		TaxVendor: string;
		/** Gets the time zone identifier. */
		TimeZoneId: string;
	}
}
