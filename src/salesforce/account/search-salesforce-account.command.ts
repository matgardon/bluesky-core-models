namespace bluesky.core.command.salesforce {
    /**
     * Search parameter used to retrieve a list of sales force account.
     */
    export interface SearchSalesForceAccountCommand extends IBasePaginatedSearchCommand {
        Name: string;
    }
}