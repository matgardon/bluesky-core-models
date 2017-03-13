namespace bluesky.core.model.customerOrder {
	/** Response for a Create users command. */
	export interface ICreateOrderResponseDto {
		/** Identifier of the generated Customer Order. */
		OrderId: number;
		/** Order check status. */
		OrderCheckStatus: string;
		/** Concurrent order, when the current order is frozen. */
		ConcurrentOrder?: number;
	}
}
