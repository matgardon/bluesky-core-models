 namespace bluesky.core.models.userManagement {
	export interface UserSsoDto extends ResourceBase {
		subsidiary: string;
		owners: string[];
		userRoleEntry: UserRoleEntryDto;
		activeDirectoryGroups: UserRoleEntryDto[];
		regions: string[];
		userDisplayName: string;
		/** Gets or sets the user's identifier in the active directory. */
		userIdentifier: string;
		countries: string[];
		subsidiaries: string[];
	}
}
