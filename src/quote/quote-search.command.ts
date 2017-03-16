namespace bluesky.core.command.quote {
    export interface IQuoteSearchCommand extends IBasePaginatedSearchCommand {
        Name?: string;
        Label?: string;
        LogoUid?: string;
        QuoteStatusFilter?: string;
        Subsidiaries?: string;
        Ids?: string;
        IncludeSubscriptions?: boolean;
        CurrentApprover?: string;
    }
}