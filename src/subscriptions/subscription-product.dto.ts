namespace bluesky.core.models.subscription {
	/** DTO of a product attached to a subscription. */
	export interface ISubscriptionProductDto {
		/** Element name of the product. */
		Name: string;
		/** Name of the Technical Product Specification. */
		TechnicalProductSpecName: string;
		/** Identifier of the Technical Product in the Technical Inventory. */
		TechnicalProductId: string;
	}
}
