 namespace bluesky.core.models.account {
	/** DTO of a user.The UserAccount represents individual (person) or inanimate entity that that receivesand consumes services provided by Arkadin. */
	export interface IUserAccountDto extends bluesky.core.models.account.IAccountDto {
		/** The UserAccount-Contact view contains the contact and address of a physical user of Arkadin services. */
		UserContactView: bluesky.core.models.account.IUserContactViewDto;
		/** The UserAccount view contains attributes related to UserAccount setup. */
		UserView: bluesky.core.models.account.IUserViewDto;
		/** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
		TechnicalAdminContactView: bluesky.core.models.account.ITechnicalAdminContactViewDto;
	}
}
