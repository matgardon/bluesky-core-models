 namespace bluesky.core.model.systemInfo {
	/** DTO of the webapp version. */
	//TODO MGA uniformize with api version dto
	export interface IWebAppVersionDto extends IResourceBase {
		/** Version's number. */
		AppVersion: string;
	}
}
