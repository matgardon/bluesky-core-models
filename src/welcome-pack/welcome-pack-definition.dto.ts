namespace bluesky.core.model.welcomePack {
	export interface IWelcomePackDefinitionDto extends IWelcomePackDto {
		WelcomePackCount: number;
		SubmittedDate: Date;
		Source: string;
		SubscriptionMemberShipId: string;
		SubmittedBy: string;
		IsTrial: boolean;
		TimeZone: string;
		UserLanguage: string;
		UserLocalSalutation: string;
		CarbonCopyRecipients: string[];
	}
}
