namespace bluesky.core.command.customerOrder {
	/** Command to create a Hierarchy light */
	interface ICreateHierarchyLightCustomerOrderCommand extends IBaseCreateOrderCommand  {
		/** Name of the company required to create the hierarchy */
		CompanyName: string;
		/** Currency used by the company for billing purpose */
		Currency: string;
		/** Subsidiary on which will depend this hierarchy */
		Subsidiary: string;
		/** Related quote identifier */
		QuoteId: number;
		/** Mandatory contact for Hierarchy Light creation */
		Contact: IHierarchyLightContactDto;
	}
}
