 namespace bluesky.core.models {
	/** Base DTO class to give the Id of an entity existing in the OrderManagement Database. */
	export interface OrderManagementEntityDto extends ResourceBase {
		/** Entity Id of the item existing in OM DB. */
		orderManagementEntityId: number;
	}
}
