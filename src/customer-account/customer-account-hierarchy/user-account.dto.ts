 namespace bluesky.core.model.account {
	/** DTO of a user.The UserAccount represents individual (person) or inanimate entity that that receivesand consumes services provided by Arkadin. */
	export interface IUserAccountDto extends IAccountDto {
		/** The UserAccount-Contact view contains the contact and address of a physical user of Arkadin services. */
		UserContactView: IUserContactViewDto;
		/** The UserAccount view contains attributes related to UserAccount setup. */
		UserView: IUserViewDto;
		/** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
		TechnicalAdminContactView: ITechnicalAdminContactViewDto;
	}
}
