namespace bluesky.core.model.quote {
	/** Model for udrc unit definition */
	export interface IUdrcUnitDefinition {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Unit name. */
		UnitName: string;
		/** Unit value. */
		UnitValue: number;
		/** Gets or sets the UnitDependentRecurringCharge (PI) identifier. */
		UnitDependentRecurringChargePriceableItemId: number;
	}
}
