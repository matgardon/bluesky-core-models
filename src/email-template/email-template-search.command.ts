namespace bluesky.core.command.emailTemplate {
    export interface IEmailTemplateSearchCommand extends IBasePaginatedSearchCommand {
        Name: string;
        Company: string;
        Skeleton: string;
    }
}