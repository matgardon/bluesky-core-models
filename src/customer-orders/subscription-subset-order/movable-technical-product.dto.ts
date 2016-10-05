namespace bluesky.core.models.customerOrder {
	/** Dto of a MovableTechnicalProduct */
	export interface IMovableTechnicalProductDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets SourceName of the movable technical product. */
		SourceName: string;
		/** Gets or sets TargetName of the movable technical product. */
		TargetName: string;
	}
}
