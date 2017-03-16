namespace bluesky.core.command.subscription {
    export interface IQuoteSubscriptionSearchCommand extends IBasePaginatedSearchCommand {
        QuoteId?: number;
        SubscriptionId?: number;
        GroupSubId?: number;
        BillingAccountUserName?: string;
    }
}