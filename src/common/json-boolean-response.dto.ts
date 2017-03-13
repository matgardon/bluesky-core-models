namespace bluesky.core.model {
	/** Json wrapper for boolean responses.TODO MGA: it must be made clear to external consumers how to read the value of the boolean response. */
	export interface IJsonBooleanResponseDto {
		/** the status of the flag. */
		BooleanResponse: boolean;
		ErrorMessageList: string[];
	}
}
