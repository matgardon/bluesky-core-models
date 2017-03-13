namespace bluesky.core.command.customerOrder {
	/** Contains main information about the order to create. */
	export interface IBaseCreateOrderCommand {
		/** Identifier of the company. */
		CompanyId: string;
		/** Gets or sets Name of the system which submitted the order in the first place. */
		CallingSystem: string;
		/** Gets or sets the login of the end user who creates the customer order. */
		EndUser: string;
		/** Indicates if the order must be submitted. */
		IsSubmit: boolean;
		/** When specified, the execution date is the date when the customer order will be executed. */
		ExecutionDate?: Date;
	}
}