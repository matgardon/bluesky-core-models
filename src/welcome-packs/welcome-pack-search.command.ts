namespace bluesky.core.models.welcomePacks {
    export interface ISearchWelcomePackCommand {
        Email: string;
        Logo: string;
        BillingAccount: string;
        Status: string;
        Queue: string;
        OrderId: number;

        //TODO MGA: common contract for Start / Limit params of all search commands ?
        Start: number;
        Limit: number;
    }
}
