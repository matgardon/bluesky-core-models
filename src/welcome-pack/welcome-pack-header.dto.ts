namespace bluesky.core.model.welcomePack {
    export interface IWelcomePackHeaderDto extends IResourceBase {
        Id: string;
        TemplateId: string;
        TemplateName: string;
        EmailAddress: string;
        State: string;
        Queue: string;
        ReceivedDate: Date;
        SendingPriority: string;
        AdminEmailAddress: string;
        IsAdminRecipient: boolean;
        ContactId: string;
        Data: { [key: string]: string };
        LogoName: string;
        OrderId: string;
    }
}
