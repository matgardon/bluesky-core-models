 namespace bluesky.core.models.account {
	/** Dto of IST IMA Information.ISTIMA information.IST: Invoice Suppression Threshold.IMA: Invoice Minimum Amount. */
	export interface IIstimaInfoDto extends models.IResourceBase {
		/** Product offering MetraNet identifier. */
		ProductOfferingMnId: number;
		/** Invoice Suppression Threshold from. */
		InvoiceSuppressionThresholdFrom?: number;
		/** Invoice Suppression Threshold to. */
		InvoiceSuppressionThresholdTo?: number;
		/** subscription identifier. */
		SubscriptionId: number;
	}
}
