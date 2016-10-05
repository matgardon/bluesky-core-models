namespace bluesky.core.models.customerOrder {
	/** DTO header of a hierarchy order item. */
	export interface IHierarchyOrderItemHeaderDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets Processing status of an OrderItem. */
		OrderItemStatus: string;
		/** This describes the action held by the Hierarchy OrderItem */
		HierarchyAction: string;
		/** Gets or sets the UserName of the account linked to the hierarchy order item. */
		AccountUserName: string;
		/** Gets or sets the Type of the account linked to the hierarchy order item. */
		AccountType: string;
		/** Gets or sets the id of the account linked to the hierarchy order item. */
		AccountId: number;
		/** Information needed to merge a logo in another one. */
		MergeLogoInformation: IMergeLogoInformationDto;
		/** A hierarchy order item contains at most one movable account. */
		movableAccount: IMovableAccountDto;
	}
}
