namespace bluesky.core.models.taxExemption {
	/** Informations about a PCode. */
	export interface IPCodeDto extends IResourceBase {
		/** Gets or sets the code. */
		Code: number;
		/** Indicates if the tax pcode is primary for the given location. */
		IsDefault: boolean;
	}
}
