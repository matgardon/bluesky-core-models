namespace bluesky.core.model {
	/** TODO MGA: legacy contract temporarily used to keep backward compatibility with QW & OT file attachements for earlier releases before 5.0. To remove here and usage in file-attachments & CAPI endpoint after 5.0 ! */
	export interface IJsonBooleanResponseLegacyDto {
		/** the status of the flag. */
		booleanResponse: boolean;
	}
}
