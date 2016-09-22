 namespace bluesky.core.models.account {
	/** Header DTO of a UserAccount. */
	export interface IUserAccountHeaderDto extends bluesky.core.models.account.IAccountHeaderDto {
		Email: string;
		Login: string;
		SelfCareRelation: string;
		SelfCareRole: string;
		HasExtendedScope: boolean;
	}
}
