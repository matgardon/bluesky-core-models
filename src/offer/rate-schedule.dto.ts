namespace bluesky.core.model.offer {
	/** Model for Rate Schedule definition */
	export interface IRateScheduleDto {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the id of a parameter table. */
		PTId: number;
		/** Gets or sets the name of the Parameter Table. */
		PTName: string;
		/** Gets or sets the rate schedule type. 
		 * TODO CLA should be string enum type
		*/
		RateScheduleType: string;
		/** Gets or sets the start date. */
		StartDate: Date;
		/** Gets or sets the end date. */
		EndDate: Date;
	}
}
