namespace bluesky.core.command.welcomePack {
    export interface ISearchWelcomePackCommand {
        UserId?: string;
        Email?: string;
        LogoName?: string;
        BillingAccountName?: string;
        Status?: string;
        Queue?: string;
        OrderId?: number;
        CreationDateFrom?: string;
        CreationDateTo?: string;
        //TODO MGA: common contract for Start / Limit params of all search commands ?

        SendingDate?: string;
        Start?: number;
        Limit?: number;
    }
}
