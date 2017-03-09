namespace bluesky.core.commands.emailTemplate {
    export interface IEmailTemplateSearchCommand {
        Name: string;
        Company: string;
        Skeleton: string;
        Start: number;
        Limit: number;
    }
}