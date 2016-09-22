 namespace bluesky.core.models.account {
	/** Management Subsidiaries are used in the Platform Selection algorithms. */
	export interface IManagementSubsidiaryDto extends bluesky.core.models.IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Flag to identify the Management Subsidiary at Logo level. */
		IsMain: boolean;
		/** Subsidiary code. */
		SubsidiaryCode: string;
		/** Name of the management subsidiary to be used for AudioClassicplatform selection. */
		SubsidiaryName: string;
	}
}
