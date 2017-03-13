namespace bluesky.core.model.customerOrder {
	/** Movable subscription. */
	export interface IMovableSubscriptionDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Source identifier. */
		SourceId: number;
		/** Target identifier. */
		TargetId: number;
		/** List of movable technical products. */
		movableTechnicalProducts: IMovableTechnicalProductDto[];
	}
}
