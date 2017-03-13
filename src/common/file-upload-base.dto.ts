namespace bluesky.core.model {
	/** Base information for a file upload. */
	export interface IFileUploadBaseDto {
		/** File encoded in base 64. */
		FileBase64Url: string;
		/** Name of the file. */
		FileName: string;
		/** Content Type. */
		ContentType: string;
	}
}
