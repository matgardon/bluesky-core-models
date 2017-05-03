namespace bluesky.core.command.salesforce {
    /**
     * Search parameter used to retrieve a list of sales force account.
     */
    export interface ISearchSalesForceAccountCommand extends IBasePaginatedSearchCommand {
        Name: string;
    }
}