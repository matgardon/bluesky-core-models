 namespace bluesky.core.model {
	/** Base DTO class to give the Id of an entity existing in the OrderManagement Database. */
	export interface IOrderManagementEntityDto extends IResourceBase {
		/** Entity Id of the item existing in OM DB. */
		OrderManagementEntityId?: number;
	}
}
