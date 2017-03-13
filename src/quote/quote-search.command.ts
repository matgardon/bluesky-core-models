namespace bluesky.core.command.quote {
    export interface IQuoteSearchCommand {
        Name?: string;
        Label?: string;
        LogoUid?: string;
        QuoteStatusFilter?: string;
        Subsidiaries?: string;
        Ids?: string;
        IncludeSubscriptions?: boolean;
        CurrentApprover?: string;
        Start?: number;
        Limit?: number;
    }
}