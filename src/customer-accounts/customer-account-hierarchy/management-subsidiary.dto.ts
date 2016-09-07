declare namespace bluesky.core.models.account {
	/** Management Subsidiaries are used in the Platform Selection algorithms. */
	interface ManagementSubsidiaryDto extends ResourceBase {
		/** Gets or sets the unique identifier. */
		id: number;
		/** Flag to identify the Management Subsidiary at Logo level. */
		isMain: boolean;
		/** Subsidiary code. */
		subsidiaryCode: string;
		/** Name of the management subsidiary to be used for AudioClassicplatform selection. */
		subsidiaryName: string;
	}
}
