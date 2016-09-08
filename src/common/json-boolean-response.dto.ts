namespace bluesky.core.models {
	/** Json wrapper for boolean responses.TODO MGA: it must be made clear to external consumers how to read the value of the boolean response. */
	export interface JsonBooleanResponseDto {
		/** the status of the flag. */
		booleanResponse: boolean;
	}
}
