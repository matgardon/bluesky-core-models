declare namespace bluesky.core.models.technicalData {
	/** AccessAccount characteristics */
	interface AccessCharacteristicDto extends OrderManagementEntityDto {
		/** Gets or sets the name of the characteristic. */
		name: string;
		/** Gets or sets the value of the characteristic. */
		value: string;
		/** Technical option specification name. */
		technicalOptionSpecName: string;
		/** Business Value of the access characteristic. */
		businessValue: string;
	}
}
