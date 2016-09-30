namespace bluesky.core.commands.emailTemplates {
    export interface IEmailTemplateSearchCommand {
        Name: string;
        Company: string;
        Skeleton: string;
        Start: number;
        Limit: number;
    }
}