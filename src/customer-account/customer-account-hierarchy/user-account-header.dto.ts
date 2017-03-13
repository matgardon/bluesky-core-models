 namespace bluesky.core.model.account {
	/** Header DTO of a UserAccount. */
	export interface IUserAccountHeaderDto extends IAccountHeaderDto {
		Email: string;
		Login: string;
		SelfCareRelation: string;
		SelfCareRole: string;
		HasExtendedScope: boolean;
	}
}
