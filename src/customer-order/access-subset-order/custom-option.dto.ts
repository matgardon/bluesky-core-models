namespace bluesky.core.model.customerOrder {
	/** Dto of a custom option.This class represents a customized option for a given User for which accesses are to be created. */
	export interface ICustomOptionDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Name of the Option. */
		Name: string;
		/** Customized valued of the Option. */
		Value: string;
		/** Technical Specification of the Option. */
		TechnicalOptionSpec: string;
	}
}
