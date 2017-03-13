namespace bluesky.core.command.emailTemplate {
    export interface IEmailTemplateSearchCommand {
        Name: string;
        Company: string;
        Skeleton: string;
        Start: number;
        Limit: number;
    }
}