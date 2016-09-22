 namespace bluesky.core.models.technicalData {
	/** AccessAccount characteristics */
	export interface IAccessCharacteristicDto extends models.IOrderManagementEntityDto {
		/** Gets or sets the name of the characteristic. */
		Name: string;
		/** Gets or sets the value of the characteristic. */
		Value: string;
		/** Technical option specification name. */
		TechnicalOptionSpecName: string;
		/** Business Value of the access characteristic. */
		BusinessValue: string;
	}
}
