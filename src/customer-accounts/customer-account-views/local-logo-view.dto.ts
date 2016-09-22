 namespace bluesky.core.models.account {
	/** Dto of a local logo view.Contains attributes related to the local logo setup. */
	export interface ILocalLogoViewDto extends core.models.IResourceBase {
		/** Gets the subsidiary managing the local Logo. */
		ManagementSubsidiary: string;
	}
}
