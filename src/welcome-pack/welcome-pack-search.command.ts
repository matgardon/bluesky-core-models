namespace bluesky.core.command.welcomePack {
    export interface ISearchWelcomePackCommand extends IBasePaginatedSearchCommand {
        UserId?: string;
        Email?: string;
        LogoName?: string;
        BillingAccountName?: string;
        Status?: string;
        Queue?: string;
        OrderId?: number;
        CreationDateFrom?: string;
        CreationDateTo?: string;
        SendingDate?: string;
    }
}
