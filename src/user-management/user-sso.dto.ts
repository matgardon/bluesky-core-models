 namespace bluesky.core.model.userManagement {
	export interface IUserSsoDto extends IResourceBase {
		Subsidiary: string;
		Owners: string[];
		UserRoleEntry: userManagement.IUserRoleEntryDto;
		ActiveDirectoryGroups: userManagement.IUserRoleEntryDto[];
		Regions: string[];
		UserDisplayName: string;
		/** Gets or sets the user's identifier in the active directory. */
		UserIdentifier: string;
		Countries: string[];
		Subsidiaries: string[];
	}
}
