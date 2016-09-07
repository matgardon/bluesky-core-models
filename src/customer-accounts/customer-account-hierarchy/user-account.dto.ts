declare namespace bluesky.core.models.account {
	/** DTO of a user.The UserAccount represents individual (person) or inanimate entity that that receivesand consumes services provided by Arkadin. */
	interface UserAccountDto extends AccountDto {
		/** The UserAccount-Contact view contains the contact and address of a physical user of Arkadin services. */
		userContactView: UserContactViewDto;
		/** The UserAccount view contains attributes related to UserAccount setup. */
		userView: UserViewDto;
		/** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
		technicalAdminContactView: TechnicalAdminContactViewDto;
	}
}
