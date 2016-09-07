declare namespace bluesky.core.models.account {
	/** Header DTO of a UserAccount. */
	interface UserAccountHeaderDto extends AccountHeaderDto {
		email: string;
		login: string;
		selfCareRelation: string;
		selfCareRole: string;
		hasExtendedScope: boolean;
	}
}
