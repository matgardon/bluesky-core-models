namespace bluesky.core.command.account {
	/** Command to authenticate a user account in BlueSky. */
	export interface IAuthenticateUserAccountCommand {
		/** User account's identifier in MetraNet. */
		UserUid: string;
		/** User account's password, used by the user to access MetraView. */
		Password: string;
	}
}
