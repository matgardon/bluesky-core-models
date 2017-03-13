namespace bluesky.core.model.subscription {
	/** DTO of an option attached to a subscription. */
	export interface ISubscriptionOptionDto {
		/** Name of the Option. */
		Name: string;
		/** Indicate in which product category the option is defined. */
		ProductCategory: string;
		/** Technical spec value of the Technical Option. */
		TechnicalSpec: string;
		/** Default value chosen for the option on the subscription. */
		Value: string;
		/** Type of the value */
		ValueType: string;
	}
}
