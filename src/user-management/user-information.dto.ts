 namespace bluesky.core.models.userManagement {
	/** Informations about a user. */
	export interface IUserInformationDto {
		/** File Name. */
		FirstName: string;
		/** Last Name. */
		LastName: string;
		/** DisplayName. */
		DisplayName: string;
		/** Identifier of the User. */
		UserIdentifier: string;
		/** Email. */
		Email: string;
		/** Phoe number. */
		PhoneNumber: string;
	}
}
