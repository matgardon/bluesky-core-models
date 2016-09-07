declare namespace bluesky.core.models {
	/** Base information for a file upload. */
	interface FileUploadBaseDto {
		/** File encoded in base 64. */
		fileBase64Url: string;
		/** Name of the file. */
		fileName: string;
		/** Content Type. */
		contentType: string;
	}
}
