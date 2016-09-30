namespace bluesky.core.models.emailTemplates {
    export interface IEmailTemplateSkeletonDto {
        Id: number;
        Name: string;
        Description: string;
        Type: string;
        EloquaEmailTemplateId: string;
        EloquaEmailTemplateName: string;
    }
}
