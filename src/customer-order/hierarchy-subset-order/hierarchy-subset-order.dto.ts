namespace bluesky.core.models.customerOrder {
	/** DTO of a hierarchy subset order. */
	export interface IHierarchySubsetOrderDto extends ISubsetOrderBaseDto {
		/** A hierarchy subset order is composed of at least one hierarchy order item. */
		hierarchyOrderItems: IHierarchyOrderItemHeaderDto[];
	}
}
