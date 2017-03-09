namespace bluesky.core.models.customerOrder {
	/** Dto of a movable access. */
	export interface IMovableAccessDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Source access name. */
		SourceAccessName: string;
		/** Target access name. */
		TargetAccessName: string;
	}
}
