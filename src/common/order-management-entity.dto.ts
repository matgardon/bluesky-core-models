 namespace bluesky.core.models {
	/** Base DTO class to give the Id of an entity existing in the OrderManagement Database. */
	export interface IOrderManagementEntityDto extends models.IResourceBase {
		/** Entity Id of the item existing in OM DB. */
		OrderManagementEntityId?: number;
	}
}
