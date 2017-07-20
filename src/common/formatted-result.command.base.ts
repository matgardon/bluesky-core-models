namespace bluesky.core.command {
	/** Shared properties for formatted results of search commands. */
	export interface IFormattedResultCommand {
		/** Specifies the format expected for the output response. Can be at the moment CSV & ??? TODO MGA StringEnum */
		Format?: SupportedResponseFormatEnum;
	}

	export enum SupportedResponseFormatEnum {
		CSV = 'csv'
	}
}
