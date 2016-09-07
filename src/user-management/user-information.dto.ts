declare namespace bluesky.core.models.userManagement {
	/** Informations about a user. */
	interface UserInformationDto {
		/** File Name. */
		firstName: string;
		/** Last Name. */
		lastName: string;
		/** DisplayName. */
		displayName: string;
		/** Identifier of the User. */
		userIdentifier: string;
		/** Email. */
		email: string;
		/** Phoe number. */
		phoneNumber: string;
	}
}
