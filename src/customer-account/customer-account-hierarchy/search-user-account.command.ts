
namespace bluesky.core.command.account {
	/** Command to search UserAccounts in BlueSky. */
	export interface ISearchUserAccountCommand extends IBasePaginatedSearchCommand {
		LogoUid?: string;
		Email?: string;
		CustomerNodeName?: string;
		PrimaryGroupUid?: string;
		BillingAccountUid?: string;
		SelfCareRole?: string;
		AccountStatusList?: string;
		LastName?: string;
	}
}