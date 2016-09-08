 namespace bluesky.core.models.account {
	/** Dto of IST IMA Information.ISTIMA information.IST: Invoice Suppression Threshold.IMA: Invoice Minimum Amount. */
	export interface IstimaInfoDto extends ResourceBase {
		/** Product offering MetraNet identifier. */
		productOfferingMNId: number;
		/** Invoice Suppression Threshold from. */
		invoiceSuppressionThresholdFrom: number;
		/** Invoice Suppression Threshold to. */
		invoiceSuppressionThresholdTo: number;
		/** Subscription identifier. */
		subscriptionId: number;
	}
}
