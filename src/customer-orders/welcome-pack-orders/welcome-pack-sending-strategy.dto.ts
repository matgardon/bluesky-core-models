namespace bluesky.core.models.customerOrder {
	/** Welcome pack sending strategy. */
	export interface IWelcomePackSendingStrategyDto {
		/** Welcome Recipient Strategy :- to user (ToUser),- to technical admin ToTechnicalAdmin. */
		WelcomePackRecipientStrategy: string;
		/** Welcome Pack sending mode :- sent instantly (Instantly),- not sent (NoSending),- sent in the future, in a specific date (InTheFuture). */
		WelcomePackSendMode: string;
		/** Date when the welcome pack will be send if the sending mode is inthefuture. */
		FutureSendDate: Date;
		/** Admin user id to whom the welcome pack is sent if the recipient strategy is technical admin. */
		AdminUserUid: string;
	}
}
