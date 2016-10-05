namespace bluesky.core.models.customerOrder {
	/** Information needed to send a welcome pack. */
	export interface ISendWelcomePackInformation {
		/** Identifier of the group subscription in MetraNet. */
		GroupSubscriptionId: number;
		/** Identifiers of the user for which the welcome pack will be sent. */
		UserUid: string;
	}
}
