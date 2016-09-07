declare namespace bluesky.core.models.account {
	/** Dto of a local logo view.Contains attributes related to the local logo setup. */
	interface LocalLogoViewDto extends ResourceBase {
		/** Gets the subsidiary managing the local Logo. */
		managementSubsidiary: string;
	}
}
