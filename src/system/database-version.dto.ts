declare namespace bluesky.core.models.systemInfo {
	/** DTO of the Order Management Database Version. */
	interface DatabaseVersionDto {
		/** Gets or sets version of the [OrderManagement] Database at a current date. */
		version: string;
		/** Gets or sets date of the specified version of the [OrderManagement] Database. */
		startDate: Date;
	}
}
