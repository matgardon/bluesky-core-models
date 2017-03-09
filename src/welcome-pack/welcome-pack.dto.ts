namespace bluesky.core.models.welcomePack {
    export enum WelcomePackStateEnum {
        Submitted,
        Bounced,
        Success,
        Error,
        Empty,
        AwaitingAdmin,
        Unsubscribed,
        GlobalUnsubscribed,
        Excluded,
        Unknown,
    }

    export enum WelcomePackQueueEnum {
        Submitted,
        Rejected,
        Pending,
        Read,
        Waiting,
        Imported,
        Complete,
        Empty,
        Unknown,
        Excluded,
    }

    export interface IWelcomePackDto {
        Id: string;
        TemplateId: string;
        OrderManagementId: string;
        TemplateName: string;
        EmailAddress: string;
        State: string;
        Queue: string;
        Message: string;
        ReceivedDate: Date;
        SendingDate: Date;
        AdminEmailAddress: string;
        IsAdminRecipient: boolean;
        //IsAdminStrategy: boolean;
        ContactId: string;
        UserCountry: string;
        Subsidiary: string;
        XmlString: string;
        FirstName: string;
        LastName: string;
        SendingPriority: string;
        SelfCareRole: string;
        BillingAccountName: string;
        LogoName: string;
        UserId: string;
        Login: string;
        OrderId: string;
        CustomerServicePhone: string;
        CustomerServiceEmail: string;
        Hierarchy: IHierarchyDto;
        UserRecipient: IUserRecipientDto;
        Products: IProductDto[];
        OfferName: string;
        RecipientType: string;
    }
}
