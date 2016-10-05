namespace bluesky.core.models.customerOrder {
	/** Response for a Create users command. */
	export interface ICreateOrderResponseDto {
		/** Identifier of the generated Customer Order. */
		orderId: number;
		/** Order check status. */
		orderCheckStatus: string;
		/** Concurrent order, when the current order is frozen. */
		concurrentOrder: number;
	}
}
