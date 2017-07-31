declare namespace bluesky.core.model.userCase {
    interface ICaseCreationUrlDto {
        CaseUrl: string;
    }
}

declare namespace bluesky.core.command.userCase {
    interface IGetCaseCreationUrlCommand {
        UserId: string;
        SalesForceAccountId: string;
        PinCode: string;
        WebLogin: string;
    }
}

declare namespace bluesky.core.model.userCase {
    /** Dto of a sales force case.
    * A case is a description of a customer's feedback, problem, or question.
    * Cases are used to track and solve customers' issues. */
    interface ISalesforceCaseDto {
        /** Identifier of the case. */
        Id: string;
        /** Case status.Example: New, Acknowledge, Pending customer, On going, Raised to Supplier, Raised, Closing, Pending completion, Update of supplier case, Closing of supplier case, Close. */
        Status: string;
        /** Case severity. */
        Severity: string;
        /** Unique number automatically assigned to the case. */
        Number: string;
        /** Record type name. */
        RecordType: string;
        /** Brief description of customer's issue. */
        Subject: string;
        /** Creation date of the case. */
        CreatedDate: Date;
        /** Case owner's name. */
        OwnerName: string;
        /** Case contact's name. */
        ContactName: string;
        /** Url to the case in SalesForce. */
        CaseUrl: string;
    }
}

declare namespace bluesky.core.model.clientConfig {
    interface IAjaxClientEndpointConfigurationDto {
        EndpointBaseURL: string;
        EndpointSuffix: string;
        AuthToken: string;
        AuthTokenValidityEndDate: string;
    }
}

declare namespace bluesky.core.model.clientConfig {
    import UserSsoDto = userManagement.IUserSsoDto;
    interface IBlueskyAjaxClientConfigurationDto {
        /**
         * Dictionnary of client configuration per-endpoint.
         * @param endpointType : EndpoinTypeEnum type string representation. It cannot be strongly typed to the related enum (EndpointTypeEnum) due to TS not implementing it atm: https://github.com/Microsoft/TypeScript/issues/2491. So we use the string representation of the enum as key.
         * @returns {}
         *
         * TODO MGA: C# json native json serializer doesn't handle dictionnaries with enum keys, so we use an array of endpoint config based on string representation. http://stackoverflow.com/questions/2892910/problems-with-json-serialize-dictionaryenum-int32
         */
        EndpointConfigurationDictionnary: {
            [endpointType: string]: clientConfig.IAjaxClientEndpointConfigurationDto;
        };
        CurrentUserRole: string;
        CurrentUser?: UserSsoDto;
    }
}

declare namespace bluesky.core.model.clientConfig {
    /**
     * Enum generated from the server to know the list of supported endpoint configuration.
     */
    enum EndpointTypeEnum {
        /**
         * Origin domain from which the current client was loaded.
         */
        CurrentDomain = 0,
        CoreApi = 1,
        MarketingApi = 2,
        SelfcareApi = 3,
        QuoteWizard = 4,
        OrderEntry = 5,
        OrderTracking = 6,
        Metranet = 7,
        TechnicalInventory = 8,
        TemplateGenerator = 9,
        Salesforce = 10,
        /**
         * External URLs (not treatment applied, rejected if URL is not full)
         */
        External = 11,
    }
}

declare namespace bluesky.core.model {
    /** Base information for a file upload. */
    interface IFileUploadBaseDto {
        /** File encoded in base 64. */
        FileBase64Url: string;
        /** Name of the file. */
        FileName: string;
        /** Content Type. */
        ContentType: string;
    }
}

declare namespace bluesky.core.command {
    /** Shared properties for formatted results of search commands. */
    interface IFormattedResultCommand {
        /** Specifies the format expected for the output response. Can be at the moment CSV & ??? TODO MGA StringEnum */
        Format?: SupportedResponseFormatEnum;
    }
    enum SupportedResponseFormatEnum {
        CSV = "csv",
    }
}

declare namespace bluesky.core.model {
    /** Return DTO of an endpoint parsing input param for business validation. */
    interface IInputValidationResultDto {
        IsValid: boolean;
        ValidationErrorMessages: string[];
    }
}

declare namespace bluesky.core.model {
    /** TODO MGA: legacy contract temporarily used to keep backward compatibility with QW & OT file attachements for earlier releases before 5.0. To remove here and usage in file-attachments & CAPI endpoint after 5.0 ! */
    interface IJsonBooleanResponseLegacyDto {
        /** the status of the flag. */
        booleanResponse: boolean;
    }
}

declare namespace bluesky.core.model {
    /** Json wrapper for boolean responses.TODO MGA: it must be made clear to external consumers how to read the value of the boolean response. */
    interface IJsonBooleanResponseDto {
        /** the status of the flag. */
        BooleanResponse: boolean;
        ErrorMessageList: string[];
    }
}

declare namespace bluesky.core.model {
    /** Dto for MetraNet Enumerations */
    interface IMetraNetEnumerationDto {
        Key: string;
        Value: string;
        DisplayValue: string;
        ExportCode: string;
        MetraNetNamespace: string;
        NaturalEnglish: string;
    }
}

declare namespace bluesky.core.model {
    /** Base DTO class to give the Id of an entity existing in the OrderManagement Database. */
    interface IOrderManagementEntityDto extends IResourceBase {
        /** Entity Id of the item existing in OM DB. */
        OrderManagementEntityId?: number;
    }
}

declare namespace bluesky.core.model {
    /** DTO for OM Enumerations. */
    interface IOrderManagementEnumerationDto {
        Key: number;
        Value: string;
        DisplayValue: string;
    }
}

declare namespace bluesky.core.model {
    interface IPagedResourceList<T extends IResourceBase> extends IResourceBase {
        /** La liste interne concrète des ressources de type T de cette liste non paginée. */
        Items: T[];
        FirstItemOnPage: number;
        HasNextPage: boolean;
        HasPreviousPage: boolean;
        IsFirstPage: boolean;
        IsLastPage: boolean;
        LastItemOnPage: number;
        PageCount: number;
        PageNumber: number;
        PageSize: number;
        TotalItemCount: number;
    }
}

declare namespace bluesky.core.command {
    /** Shared properties for paginated search commands. */
    interface IBasePaginatedSearchCommand {
        /** Start index for the paginated results (index of the nth item as the starting one to retrieve from). */
        Start?: number;
        /** Page size (number of items) to retrieve starting from the Start index. */
        Limit?: number;
    }
}

declare namespace bluesky.core.model {
    /** Base class for all resources.TODO MGA : Move this class in a base API project */
    interface IResourceBase {
        /** Links to related resources. */
        Links?: {
            [key: string]: string;
        };
    }
}

declare namespace bluesky.core.model {
    interface IResourceList<T extends IResourceBase> extends IResourceBase {
        /** La liste interne concrète des ressources de type T de cette liste non paginée. */
        Items: T[];
        /** Le nombre d'éléments retournés dans cette liste non paginée. */
        TotalCount: number;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Response for a Create users command. */
    interface ICreateOrderResponseDto {
        /** Identifier of the generated Customer Order. */
        OrderId: number;
        /** Order check status. */
        OrderCheckStatus: string;
        /** Concurrent order, when the current order is frozen. */
        ConcurrentOrder?: number;
    }
}

declare namespace bluesky.core.command.customerOrder {
    /** Contains main information about the order to create. */
    interface IBaseCreateOrderCommand {
        /** Identifier of the company. */
        CompanyId: string;
        /** Gets or sets Name of the system which submitted the order in the first place. */
        CallingSystem: string;
        /** Gets or sets the login of the end user who creates the customer order. */
        EndUser: string;
        /** Indicates if the order must be submitted. */
        IsSubmit: boolean;
        /** When specified, the execution date is the date when the customer order will be executed. */
        ExecutionDate?: Date;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Header DTO of a customer order. */
    interface ICustomerOrderHeaderDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Customer order name */
        OrderName: string;
        /** Gets or sets Customer order status. */
        CustomerOrderStatus: string;
        /** Gets or sets the OrderType. */
        OrderType: string;
        /** Gets or sets Filled with the end-user who creates the order */
        CreatedBy: string;
        /** Gets or sets the Logo UserName, it is an unique identifier in the IS. */
        LogoId: string;
        /** Gets or sets the Logo display Name. It is the customer node name. */
        LogoName: string;
        /** Gets or sets Date of submission of the customer order. */
        SubmitDate?: Date;
        /** Gets or sets Effective date of order execution. */
        ExecutionDate: Date;
        /** Gets or sets Name of the Order Manager responsible for the fulfillment of thecustomer order. It is left empty by default, but it can be assigned throughOrder Tracking UI. */
        TechnicalCoordinator: string;
        /** Gets or sets Calling system of the order */
        CallingSystem: string;
    }
}

declare namespace bluesky.core.command.customerOrder {
    interface ICustomerOrderSearchCommandBase {
        CustomerOrderStatusFilter?: string;
        CustomerOrderTypeFilter?: string;
        UserAccountUid?: string;
        LogoUid?: string;
        OrderId?: string;
        LogoName?: string;
        CallingSystem?: string;
        SubsidiaryFilter?: string;
        SubmitDateFrom?: string;
        SubmitDateTo?: string;
    }
    interface ICustomerOrderSearchFormattedResponseCommand extends ICustomerOrderSearchCommandBase, IFormattedResultCommand {
    }
    interface ICustomerOrderSearchCommand extends ICustomerOrderSearchCommandBase, IBasePaginatedSearchCommand {
    }
}

declare namespace bluesky.core.model.customerOrder {
    /**
     * Type of Arkadin.BlueSky.BSIC.Domain.OrderManagement.CustomerOrder
     */
    enum CustomerOrderStatusEnum {
        Created = 0,
        Submitted = 1,
        Pending = 2,
        OnHold = 3,
        ManualOp = 4,
        Error = 5,
        Completed = 6,
        Canceled = 7,
    }
}

declare namespace bluesky.core.model.customerOrder {
    /**
     * Type of Arkadin.BlueSky.BSIC.Domain.OrderManagement.CustomerOrder
     */
    enum CustomerOrderTypeEnum {
        InitialOrder = 0,
        InitialSimplifiedOrder = 1,
        CreateUpdateCustomerHierarchy = 2,
        UpdateSubscription = 3,
        ChangeUsersSubscription = 4,
        ModifyUser = 5,
        ModifyAccess = 6,
        DisableUser = 7,
        ReenableUser = 8,
        CeaseUsers = 9,
        CeaseAccesses = 10,
        TerminateSubscription = 11,
        CeaseNode = 12,
        ScheduleOTPConference = 13,
        UpdateOTPConference = 14,
        CancelOTPConference = 15,
        AddSubscription = 16,
        AddUser = 17,
        AddAccess = 18,
        RaiseMiscellaneousCharges = 19,
        MoveUsers = 20,
        SendWelcomePack = 21,
        ChangeOffer = 22,
        MoveNode = 23,
        ApplyAddendum = 24,
        MergeLogo = 25,
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** DTO of a customer order. */
    interface ICustomerOrderDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Customer (Logo) */
        Customer: ICustomerDto;
        /** Gets or sets Customer order name */
        OrderName: string;
        /** Gets or sets Customer order status. */
        CustomerOrderStatus: string;
        /** Gets or sets the OrderType. */
        OrderType: string;
        /** Identifier of the workflow, generated by Workflow Foundation. */
        WorkflowId?: string;
        /** Identifier of the related case in SalesForce.When an order is in error, a case can be created to report the issue. */
        CaseId: string;
        /** Gets or sets HierarchySubsetOrder: The customer order may contain a hierarchy subset order */
        HierarchySubsetOrder: IHierarchySubsetOrderDto;
        /** Gets or sets SubscriptionSubsetOrder: The customer order may contain a subscription subset order */
        SubscriptionSubsetOrder: ISubscriptionSubsetOrderDto;
        /** Gets or sets UserSubsetOrder: The customer order may contain a user subset order */
        UserSubsetOrder: IUserSubsetOrderDto;
        /** Gets or sets Customer order context */
        OrderContext: IOrderContextDto;
        /** Gets or sets Offer Name */
        OfferName: string;
        /** Gets or sets the number of processed nodes */
        ProcessedNodesCount: string;
        /** Gets or sets Calling system of the order */
        CallingSystem: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** DTO of a customer. */
    interface ICustomerDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the Logo UserName, it is an unique identifier in the IS. */
        LogoId: string;
        /** Gets or sets the Logo display Name. It is the customer node name. */
        LogoName: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Context of the order. */
    interface IOrderContextDto extends IResourceBase {
        /** Gets or sets a Flag to indicate if subscription modification must be applied to all existing accesses,in terms of options. Only required for a CustomerOrder "Update Subscription". */
        IsAppliedToAllAccesses?: boolean;
        /** Gets or sets a Flag to indicate If the flag isAudioCustom is set to true, is filled with the path ofthe file containing the custom information. */
        AudioCustomDetail: string;
        /** Gets or sets Name of the system which submitted the order in the first place :OrderEntry, PartnerIS, Selfcare. */
        CallingSystem: string;
        /** Gets or sets Free text zone of 2048 char (text area). */
        Comment: string;
        /** Gets or sets Filled with the end-user who creates the order */
        CreatedBy: string;
        /** Gets or sets Date of creation */
        CreatedDate: Date;
        /** Gets or sets Filled with the end-user who loads the order */
        EditingUserLogin: string;
        /** Gets or sets Effective date of order execution */
        ExecutionDate: Date;
        /** Gets or sets It corresponds to the identifier of a concurrent Customer Order which must be terminated before processingcurrent order. */
        FrozenBy?: number;
        /** Gets or sets Flag to indicate if Domain Selection is done automatically ormanually. */
        IsAudioCustom?: boolean;
        /** Gets or sets a Flag to indicate if Subscriptions and Accesses are created as trialones. */
        IsTrial: boolean;
        /** Gets or sets the end-user who last modified the order */
        ModifiedBy: string;
        /** Gets or sets Date of last modification */
        ModifiedDate?: Date;
        /** Gets or sets OrderHistory : Read-only text area of 2048 char filled with the name of the end-user who saved the order and the date when it was saved */
        OrderHistory: string;
        /** Gets or sets Date of submission of the customer order. */
        SubmitDate?: Date;
        /** Gets or sets the end-user who submit the Order. Filled with PartnerName for orders with SalesChannel set to Partner, or with the Selfcare fororders coming from the Selfcare. */
        SubmittedBy: string;
        /** Gets or sets Name of the sales channel from which the order was submitted. Forexample: Arkadin-Direct */
        SalesChannel: string;
        /** Gets or sets Name of the Order Manager responsible for the fulfillment of thecustomer order. It is left empty by default, but it can be assigned throughOrder Tracking UI. */
        TechnicalCoordinator: string;
        /** This flag indicates if Welcome Packs are to be sent to the Users for which accesses were created/modified. */
        IsUserRecipient?: boolean;
        /** Status reason other. */
        StatusReasonOther: string;
        /** Gets or sets WelcomePack send date */
        WelcomePackSendDate?: Date;
        /** Gets or sets the Name of the subsidiary from which the order was submitted. */
        Subsidiary: string;
        /** Gets or sets the Status reason. */
        StatusReason: string;
        /** Gets or sets Welcome pack send mode */
        WelcomePackSendMode: string;
        /** Indicates if users' usages  must be corrected after a move user. */
        IsUsageCorrected: boolean;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Base class for the different types of subset orders:for subscriptionfor user/accessfor hierarchy */
    interface ISubsetOrderBaseDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Indicates if the subset Order has warnings, its default value is "false".It is used when an Order Item raises an error that has to be ignored.In that case, the Order Item is in error and the attribute "HasWarnings" of the Subset Order is set to "true". */
        HasWarnings: boolean;
        /** Indicates the high-level functional action held by the subset. */
        SubsetAction: string;
        /** Processing status of a SubsetOrder. */
        SubsetOrderStatus: string;
    }
}

declare namespace bluesky.core.command.emailTemplate {
    interface IEmailTemplateBrandingData {
        Value: string;
    }
}

declare namespace bluesky.core.command.emailTemplate {
    interface IEmailTemplateSearchCommand extends IBasePaginatedSearchCommand {
        Name: string;
        Company: string;
        Skeleton: string;
    }
}

declare namespace bluesky.core.model.emailTemplate {
    interface IEmailTemplateSkeletonDto {
        Id: number;
        Name: string;
        Description: string;
        Type: string;
        EloquaEmailTemplateId: string;
        EloquaEmailTemplateName: string;
    }
}

declare namespace bluesky.core.model.emailTemplate {
    interface IMarketingApiResponseBase {
        Status: "Ok";
    }
}

declare namespace bluesky.core.command.technicalData {
    interface IEmailTemplateUpdateIdCommand {
        NewTemplateId: string;
        OldTemplateId: string;
    }
}

declare namespace bluesky.core.model.emailTemplate {
    interface IEmailTemplateUpdateIdResponse extends IMarketingApiResponseBase {
        NewTemplateId: string;
    }
}

declare namespace bluesky.core.model.emailTemplate {
    /**
     * TODO MGA: which fields are mandatory and which aren't ? in hub, we only instantiate a few of them at first.
     */
    interface IWelcomePackTemplateDto extends IResourceBase {
        ID: string;
        Name?: string;
        Company?: string;
        Create_Date?: Date;
        Modified_Date?: Date;
        Owner_ID?: string;
        Preview?: string;
        BrandData: string;
        TopLeftCompanyLogo?: string;
        TopRightBanner?: string;
        TopTitle?: string;
        DearText?: string;
        YACPTitleFont?: string;
        YACPTitleBG?: string;
        YACPTitleUL?: string;
        YACPSentence?: string;
        OnePassTopLeftLogo?: string;
        OnePassTopRightTitle?: string;
        OnePassProdCombination?: string;
        OnePassProd1?: string;
        OnePassProd2?: string;
        SYCTitleFont?: string;
        SYCTitleBG?: string;
        SYCTitleUL?: string;
        Product1?: string;
        Product2?: string;
        MYALoungeTitleFont?: string;
        MYALoungeTitleBG?: string;
        MYALoungeTitleUL?: string;
        NHTitleFont?: string;
        NHTitleBG?: string;
        NHTitleUL?: string;
        Footer?: string;
        TopRightBannerAlt?: string;
        TopLeftCompanyLogoAlt?: string;
        OnePassTopLeftLogoAlt?: string;
        FooterAlt?: string;
        Branding: string;
        Skeleton?: string;
        Master?: boolean;
        OnePortal?: boolean;
        ToolBarBlock?: string;
        Salutation?: string;
        WP___COMPANY_NAME?: string;
        CLIENT_NAME?: string;
        ASD_NUMBER?: string;
        ARKADIN_COUNTRY?: string;
        Arkadin_CS_Phone?: string;
        Arladin_CS_EMail?: string;
        T_NUMBER?: string;
        TF_NUMBER?: string;
        MOD_PIN?: string;
        PART_PIN?: string;
        WP___CONF_PB_NUM?: string;
        CONF_PB_REF?: string;
        WEBEX_USER?: string;
        WEBEX_PSWD?: string;
        NEED_Help?: string;
        Language: string;
        TG___NHBlock1?: string;
        TG___NHBlock2?: string;
        TG___NHBlock3?: string;
        TG___NHBlock4?: string;
        IsAdmin?: boolean;
        WP___PROD2_URL?: string;
        WP___PROD1_URL?: string;
        WP___PROD1_USER?: string;
        WP___PROD1_PSWD?: string;
        Product3?: string;
        Playback?: boolean;
        SendingStrategy: string;
    }
}

declare namespace bluesky.core.model.offer {
    /**
     * Product offering.
     */
    interface IProductOfferingDto {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the Offer type. */
        OfferType: string;
        /** Gets or sets the name. */
        Name: string;
        /** Gets or sets the display name. */
        DisplayName: string;
        /** Gets or sets the description. */
        Description: string;
        /** Gets or sets the availability start date. */
        AvailabilityStartDate: Date;
        /** Gets or sets the availability end date. */
        AvailabilityEndDate: Date;
        /** Gets or sets the effective start date. */
        EffectiveStartDate: Date;
        /** Gets or sets the effective end date. */
        EffectiveEndDate: Date;
        /**Gets or sets the AggregateType enumeration. */
        AggregateType: IMetraNetEnumerationDto;
    }
}

declare namespace bluesky.core.model.location {
    interface IBillSoftLocationDto extends IResourceBase {
        PCode: string;
        IsPrimaryLocation: boolean;
        County: string;
        City: string;
        BeginningZipCode: string;
        EndingZipCode: string;
        CountryIsoCode: string;
        CountrySubdivision: ICountrySubdivisionDto;
    }
}

declare namespace bluesky.core.model.location {
    interface ICountrySubdivisionDto extends IResourceBase {
        CountryCode: string;
        CountrySubdivisionCode: string;
        CountrySubdivisionName: string;
    }
}

declare namespace bluesky.core.model.location {
    interface ICountryDto extends IResourceBase {
        Name?: string;
        IsoCode?: string;
        IcoCode?: string;
        GeoRegion?: string;
    }
}

declare namespace bluesky.core.command.location {
    /** Search parameter used to retrieve a list of location. */
    interface ISearchLocationCommand extends IBasePaginatedSearchCommand {
        /** Gets or sets the zip or postal code. */
        ZipCode?: string;
        /** Gets or sets the city or town. */
        City?: string;
        /** Boolean indicating if the search on city should be an exact match or a contains() */
        IsExactCitySearch?: boolean;
        /** Gets or sets the the country code. */
        CountryCode?: string;
        /** Gets or sets the country subdivision code (state or province). */
        CountrySubdivisionCode?: string;
        /** Gets or sets the county. */
        County?: string;
        /** Boolean indicating if the search on county should be an exact match or a contains() */
        IsExactCountySearch?: boolean;
    }
}

declare namespace bluesky.core.command.location {
    /** Search parameter used to retrieve a list of state (country subdivisions). */
    interface ISearchStateCommand {
        /** Country ISO code. */
        CountryCode: string;
    }
}

declare namespace bluesky.core.model.location {
    interface IStateDto extends IResourceBase {
        Name?: string;
        Code?: string;
        PCode?: number;
    }
}

declare namespace bluesky.core.command.subscription {
    interface IQuoteSubscriptionSearchCommand extends IBasePaginatedSearchCommand {
        QuoteId?: number;
        SubscriptionId?: number;
        GroupSubId?: number;
        BillingAccountUserName?: string;
    }
}

declare namespace bluesky.core.model.subscription {
    /** This entity links a quote, a billing account, and the resulting subscription */
    interface IQuoteSubscriptionDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Quote identifier */
        QuoteId: number;
        /** Subscription identifier */
        SubscriptionId: number;
        /** GroupSubscription identifier */
        GroupSubId?: number;
        /** BillingAccount identifier */
        BillingAccountUserName: string;
        /** BillingAccount customer node name */
        BillingAccountCustomerNodeName: string;
        /** Set to true when a disable user is sent by the OO */
        IsUserDeactivationOrderSent: boolean;
    }
}

declare namespace bluesky.core.model.subscription {
    /** DTO of an option attached to a subscription. */
    interface ISubscriptionOptionDto {
        /** Name of the Option. */
        Name: string;
        /** Indicate in which product category the option is defined. */
        ProductCategory: string;
        /** Technical spec value of the Technical Option. */
        TechnicalSpec: string;
        /** Default value chosen for the option on the subscription. */
        Value: string;
        /** Type of the value */
        ValueType: string;
    }
}

declare namespace bluesky.core.model.subscription {
    /** DTO of a product attached to a subscription. */
    interface ISubscriptionProductDto {
        /** Element name of the product. */
        Name: string;
        /** Name of the Technical Product Specification. */
        TechnicalProductSpecName: string;
        /** Identifier of the Technical Product in the Technical Inventory. */
        TechnicalProductId: string;
    }
}

declare namespace bluesky.core.model.subscription {
    /** Header DTO of a subscription summary.
    * A subscription is a product offering sold to a Customer and applied to a single subscriber Billing account. */
    interface ISubscriptionSummaryHeaderDto extends IResourceBase {
        /** Offer display name of the subscription. */
        DisplayName: string;
        /** Identifier of the subscription defined into MetraNet. */
        GroupSubscriptionId: number;
        /** List of products linked to the subscription. */
        Products: subscription.ISubscriptionProductDto[];
    }
}

declare namespace bluesky.core.model.subscription {
    /** DTO of a subscription summary.
    * A subscription is a product offering sold to a Customer and applied to a single subscriber Billing account. */
    interface ISubscriptionSummaryDto extends IResourceBase {
        /** Offer display name of the subscription. */
        DisplayName: string;
        /** Identifier of the subscription defined into MetraNet. */
        GroupSubscriptionId: number;
        /** Identifier of the billing account owner of the subscription. */
        BillingAccountUid: string;
        /** Identifier of the billing account's logo. */
        LogoUid: string;
        /** List of products linked to the subscription. */
        Products: subscription.ISubscriptionProductDto[];
        /** subscription options. */
        Options: subscription.ISubscriptionOptionDto[];
    }
}

declare namespace bluesky.core.model {
    enum SubsidiaryEnum {
        _263_China = "_263_China",
        Arkadin_Australia = "Arkadin_Australia",
        Arkadin_Belux = "Arkadin_Belux",
        Arkadin_Brazil = "Arkadin_Brazil",
        Arkadin_Canada = "Arkadin_Canada",
        Arkadin_China = "Arkadin_China",
        Arkadin_Colombia = "Arkadin_Colombia",
        Arkadin_France = "Arkadin_France",
        Arkadin_Germany = "Arkadin_Germany",
        Arkadin_Hong_Kong = "Arkadin_Hong_Kong",
        Arkadin_India = "Arkadin_India",
        Arkadin_Ireland = "Arkadin_Ireland",
        Arkadin_Italy = "Arkadin_Italy",
        Arkadin_Japan = "Arkadin_Japan",
        Arkadin_Korea = "Arkadin_Korea",
        Arkadin_Malaysia = "Arkadin_Malaysia",
        Arkadin_Mexico = "Arkadin_Mexico",
        Arkadin_Middle_East = "Arkadin_Middle_East",
        Arkadin_Netherlands = "Arkadin_Netherlands",
        Arkadin_New_Zealand = "Arkadin_New_Zealand",
        Arkadin_Norway = "Arkadin_Norway",
        Arkadin_Portugal = "Arkadin_Portugal",
        Arkadin_Singapore = "Arkadin_Singapore",
        Arkadin_South_Africa = "Arkadin_South_Africa",
        Arkadin_Spain = "Arkadin_Spain",
        Arkadin_Switzerland = "Arkadin_Switzerland",
        Arkadin_Turkey = "Arkadin_Turkey",
        Arkadin_UK = "Arkadin_UK",
        Arkadin_US = "Arkadin_US",
        Chunghwa_Taiwan = "Chunghwa_Taiwan",
        NTTC_Japan = "NTTC_Japan",
    }
}

declare namespace bluesky.core.model.systemInfo {
    /** DTO of the API version. */
    interface IApiVersionDto extends IResourceBase {
        /** Version's number. */
        Version: string;
    }
}

declare namespace bluesky.core.model.systemInfo {
    /** DTO of the Order Management Database Version. */
    interface IDatabaseVersionDto {
        /** Gets or sets version of the [OrderManagement] Database at a current date. */
        Version: string;
        /** Gets or sets date of the specified version of the [OrderManagement] Database. */
        StartDate: Date;
    }
}

declare namespace bluesky.core.model.quote {
    /** Model for the approval decision definition */
    interface IApprovalDecisionDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the approver login. */
        ApproverLogin: string;
        /** Gets or sets the approver display name. */
        ApproverDisplayName: string;
        /** Gets or sets the approver decision. */
        Decision: boolean;
        /** Gets or sets the approval decision date. */
        Date: Date;
        /** Gets or sets a decision comment. */
        Comment: string;
        /** Gets or sets IsLastIterationDecision flag. */
        IsLastIterationDecision: boolean;
        /** Gets the UserRole. */
        UserRoleValue: number;
    }
}

declare namespace bluesky.core.model.quote {
}

declare namespace bluesky.core.model.quote {
    /** DTO of an export parameter. */
    interface IExportParameterDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the export format. */
        ExportFormat: string;
        /** Gets or sets the export language. */
        ExportLanguage: string;
        /** Gets or sets the template name. */
        TemplateName: string;
        /** Gets or sets the template path. */
        TemplatePath: string;
        /** Gets or sets the quote export id. */
        QuoteExportId: number;
        /** Gets or sets the quote export. */
        QuoteExport: IQuoteExportDto;
    }
}

declare namespace bluesky.core.model.quote {
    /** Model for On Demand Information definition */
    interface IOdpInfoDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the Unit. */
        Unit: number;
    }
}

declare namespace bluesky.core.model.quote {
    /** Model for Quote definition */
    interface IQuoteDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the label. */
        Label: string;
        /** Gets or sets the name. */
        Name: string;
        /** Gets or sets the owner first name. */
        OwnerFirstName: string;
        /** Gets or sets the owner last name. */
        OwnerLastName: string;
        /** Gets or sets the owner login. */
        OwnerLogin: string;
        /** Gets or sets the quote creation date. */
        CreationDate: Date;
        /** Gets or sets the contract start date. */
        ContractStartDate: Date;
        /** Gets or sets the duration. */
        Duration: number;
        /** Gets or sets the quote status value. */
        QuoteStatusValue: number;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.QuoteType value. */
        QuoteTypeValue: number;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.BusinessUnit value. */
        BusinessUnitValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency value. */
        CurrencyValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.CustomerSize value. */
        CustomerSizeValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName value. */
        SubsidiaryNameValue: string;
        /** Gets or sets the name of the assigned logo. */
        AssignedLogo: string;
        /** Gets or sets the display name of the assigned logo. */
        AssignedLogoName: string;
        /** Gets or sets the notes. */
        Notes: string;
        /** Gets or sets the internal note. */
        InternalNote: string;
        /** Gets or sets the origin name, for addendum and migration. */
        OriginName: string;
        /** Gets or sets the sfa contract identifier. */
        SFAContractId: string;
        /** Gets or sets the name of the SFDC customer. */
        SFDCCustomerName: string;
        /** Gets or sets the sales account. */
        SalesAccount: string;
        /** Gets or sets the Sales Force Customer Account Id. */
        SFACustomerAccountId: string;
        /** Gets or sets the Sales Force Customer Account Name. */
        SFACustomerAccountName: string;
        /** Gets or sets the current approver. */
        CurrentApprover: string;
        /** Gets or sets the opportunity Id. */
        OpportunityId: string;
        /** Gets or sets the SFA quote Id. */
        SFAQuoteId: string;
        /** Gets or sets the related export parameter identifier. */
        ExportParameterId: number;
        /** Gets or sets the C And C ProductOffering Id. */
        ConferencingAndCollaborationProductOfferingId: number;
        /** Gets or sets the customized Rate schedules. */
        RateSchedules: IRateScheduleDefinition[];
        /** Gets or sets the Udrc units */
        UdrcUnits: IUdrcUnitDefinition[];
        /** Gets the related approval decisions for quote. */
        ApprovalDecisions: IApprovalDecisionDefinition[];
        /** Gets or sets the Supporting Product Offering Ids */
        SupportingProductOfferingIds: number[];
    }
}

declare namespace bluesky.core.model.quote {
    /** DTO of a quote export. */
    interface IQuoteExportDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the businessunit. */
        BusinessUnit: IMetraNetEnumerationDto;
        /** Gets or sets the subsidiary name. */
        SubsidiaryName: IMetraNetEnumerationDto;
    }
}

declare namespace bluesky.core.model.quote {
    import QuoteSubscriptionDto = subscription.IQuoteSubscriptionDto;
    /** Header DTO of a quote. */
    interface IQuoteHeaderDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the label. */
        Label: string;
        /** Gets or sets the name. */
        Name: string;
        /** Gets or sets the version.The version is updated when it enters an approval process.Mandatory for quote contracts, addendum and migration. */
        Version?: number;
        /** Gets or sets the owner first name. */
        OwnerFirstName: string;
        /** Gets or sets the owner last name. */
        OwnerLastName: string;
        /** Gets or sets the owner login. */
        OwnerLogin: string;
        /** Gets or sets the creation date. */
        CreationDate: Date;
        /** Gets or sets the last modification date. */
        ModificationDate?: Date;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteStatus. */
        QuoteStatus: IOrderManagementEnumerationDto;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteType. */
        QuoteType: IOrderManagementEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency. */
        Currency: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName. */
        SubsidiaryName: IMetraNetEnumerationDto;
        /** Gets or sets the sfa contract identifier. */
        SFAContractId: string;
        /** Gets or sets the name of the SFDC customer. */
        SFDCCustomerName: string;
        /** Gets or sets the C And C ProductOffering Id. */
        ConferencingAndCollaborationProductOfferingId: number;
        /** Quote's subscriptions. */
        QuoteSubscriptions: QuoteSubscriptionDto[];
    }
}

declare namespace bluesky.core.command.quote {
    interface IQuoteSearchCommand extends IBasePaginatedSearchCommand {
        Name?: string;
        Label?: string;
        LogoUid?: string;
        QuoteStatusFilter?: string;
        Subsidiaries?: string;
        Ids?: string;
        IncludeSubscriptions?: boolean;
        CurrentApprover?: string;
        SegmentType?: string;
        HasModifiedPrices?: boolean;
        IsAutomatedDeactivation?: boolean;
    }
}

declare namespace bluesky.core.model.quote {
    enum QuoteStatusEnum {
        Pending = 0,
        Submitted = 1,
        SignedOff = 2,
        Allocated = 3,
        Rejected = 4,
        Canceled = 5,
        Closed = 6,
        Initialized = 7,
        Discarded = 8,
        Available = 9,
        Approval_In_Progress = 10,
        Approved = 11,
        Disapproved = 12,
    }
}

declare namespace bluesky.core.model.quote {
    /** Dto for quote work items summary.Returns information about the number of quotes for each type of action to perform. */
    interface IQuoteWorkItemsSummaryDto extends IResourceBase {
        /** Gets or sets the number of quotes in pending status. */
        QuotesPendingCount: number;
        /** Gets or sets the number of quotes in approval in progress status. */
        QuotesUnderApprovalCount: number;
        /** Gets or sets the number of quotes to approve by the authenticated user. */
        QuotesToApproveCount: number;
        /** Gets or sets the number of quotes to work on. */
        TotalCount: number;
    }
}

declare namespace bluesky.core.model.quote {
    /** DTO of a quote. */
    interface IQuoteDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the label. */
        Label: string;
        /** Gets or sets the name. */
        Name: string;
        /** Gets or sets the version.The version is updated when it enters an approval process.Mandatory for quote contracts, addendum and migration. */
        Version?: number;
        /** Gets or sets the owner first name. */
        OwnerFirstName: string;
        /** Gets or sets the owner last name. */
        OwnerLastName: string;
        /** Gets or sets the owner login. */
        OwnerLogin: string;
        /** Gets or sets the creation date. */
        CreationDate: Date;
        /** Gets or sets the last modification date. */
        ModificationDate?: Date;
        /** Gets or sets the effective date. */
        EffectiveDate?: Date;
        /** Gets or sets the contract start date. */
        ContractStartDate?: Date;
        /** Gets or sets the duration. */
        Duration?: number;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteStatus. */
        QuoteStatus: IOrderManagementEnumerationDto;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteType. */
        QuoteType: IOrderManagementEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.BusinessUnit. */
        BusinessUnit: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency. */
        Currency: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.CustomerSize. */
        CustomerSize: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName. */
        SubsidiaryName: IMetraNetEnumerationDto;
        /** Gets or sets the name of the assigned logo. */
        AssignedLogo: string;
        /** Gets or sets the display name of the assigned logo. */
        AssignedLogoName: string;
        /** Gets or sets the notes. */
        Notes: string;
        /** Gets or sets the internal note. */
        InternalNote: string;
        /** Gets or sets the origin name, for addendum and migration. */
        OriginName: string;
        /** Gets or sets the sfa contract identifier. */
        SFAContractId: string;
        /** Gets or sets the name of the SFDC customer. */
        SFDCCustomerName: string;
        /** Gets or sets the sales account. */
        SalesAccount: string;
        /** Gets or sets the current approver. */
        CurrentApprover: string;
        /** Gets or sets the opportunity Id. */
        OpportunityId: string;
        /** Gets or sets the SFA quote Id. */
        SFAQuoteId: string;
        /** Gets or sets the Sales Force Customer Account Id. */
        SFACustomerAccountId: string;
        /** Gets or sets the Sales Force Customer Account Name. */
        SFACustomerAccountName: string;
        /** Gets or sets the C And C ProductOffering Id. */
        ConferencingAndCollaborationProductOfferingId: number;
        /** Gets or sets the export parameter id. */
        ExportParameterId?: number;
        /** Gets or sets the automated deactivation at contract's end date. */
        IsAutomatedDeactivation: boolean;
    }
}

declare namespace bluesky.core.model.quote {
    /** Model for Rate Entry definition */
    interface IRateEntryDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the identifier of the rate schedule linked to the rate entry. */
        RateScheduleId: number;
        /** Gets or sets the rate entry type. */
        RateEntryType: string;
        /** Gets or sets the rate entry index. */
        Index: number;
        /** Gets or sets rating key */
        RatingKey: string;
        /** Gets or sets the rate entry audit. */
        Audit: number;
        /** Gets or sets the atomic target name priceable item id. */
        AtomicTargetNameId?: number;
        /** Gets or sets the compound target name product offering id. */
        CompoundTargetNameId?: number;
        /** Gets or sets the AuxiliaryPricingModel enumeration value */
        AuxiliaryPricingModelValue: string;
        /** Gets or sets the ParameterDataType enumeration value */
        ParameterDataTypeValue: string;
        /** Gets or sets the ProductCategory enumeration value */
        ProductCategoryValue: string;
        /** Gets or sets the OrderEntryDisplayMode enumeration value */
        OrderEntryDisplayModeValue: string;
        /** Gets or sets the ElementType enumeration value */
        ElementTypeValue: string;
        /** Gets or sets the element name. */
        ElementName: string;
        /** Gets or sets the display order. */
        DisplayOrder?: number;
        /** Gets or sets the is required flag. */
        IsRequired: boolean;
        /** Gets or sets the is selected flag. */
        IsSelected: boolean;
        /** Gets or sets the is default flag. */
        IsDefault: boolean;
        /** Gets or sets the Parameter Enumerator. */
        ParameterEnumerator: string;
        /** Gets or sets the Parameter Default Value. */
        ParameterDefaultValue: string;
        /** Gets or sets Is Value Required.selected */
        IsValueRequired?: boolean;
        /** Gets or sets Parameter Value. */
        ParameterValue: string;
        /** Gets or sets Is User Displayed. */
        IsUserDisplayed?: boolean;
        /** Gets or sets Is User Over Writable. */
        IsUserOverWritable?: boolean;
        /** Gets or sets Is Selfcare Manageable. */
        IsSelfcareManageable?: boolean;
        /** Gets or sets the IsSelfcareDisplayable. */
        IsSelfcareDisplayable?: boolean;
        /** Gets or sets IsAdminSelfcareManageable. */
        IsAdminSelfcareManageable?: boolean;
        /** Gets or sets  Is Invoice Printable. */
        IsInvoicePrintable?: boolean;
        /** Gets or sets Is Welcome Pack Printable. */
        IsWelcomePackPrintable?: boolean;
        /** Gets or sets the Technical Spec. */
        TechnicalSpec: string;
        /** Gets or sets Technical Instance ID. */
        TechnicalInstanceId: string;
        /** Gets or sets ODPInfo */
        ODPInfo: quote.IOdpInfoDefinition;
        /** Gets or sets the SubsidiaryName value. */
        SubsidiaryNameValue: string;
        /** Gets or sets Number of PO. */
        Number?: number;
        /** Gets or sets the Currency value. */
        CurrencyValue: string;
        /** Gets or sets the BusinessUnit value. */
        BusinessUnitValue: string;
        /** Gets or sets the CustomerSize value. */
        CustomerSizeValue: string;
        /** Gets or sets the ServiceType value. */
        ServiceTypeValue: string;
        /** Gets or sets the ServiceUnit value. */
        ServiceUnitValue: string;
        /** Gets or sets User tariff group to band mapping */
        UseTariffGroupToBandMapping: boolean;
        /** Gets or sets Use band rates */
        UseBandRates: boolean;
        /** Gets or sets  Use  bridging rates */
        UseBridgingRates: boolean;
        /** Gets or sets Use surcharge rates */
        UseSurchargeRates: boolean;
        /** Gets or sets the MainPricingModel enumeration value */
        MainPricingModelValue: string;
        /** Gets or sets product group name. */
        ProductGroupName: string;
        /** Gets or sets the ProductName value. */
        ProductNameValue: string;
        /** Gets or sets the DurationRoundingStrategy value. */
        DurationRoundingStrategyValue: string;
        /** Gets or sets the Retail Product Group Name Rate Entry */
        RetailProductGroupNameRateEntryId?: number;
        /** Gets or sets is retail selected */
        IsRetailSelected: boolean;
        /** Gets or sets the Partner Product Group Name Rate Entry */
        PartnerProductGroupNameRateEntryId?: number;
        /** Gets or sets is partner selected */
        IsPartnerSelected: boolean;
        /** Gets or sets the SourceCountryCode value. */
        SourceCountryCodeValue: string;
        /** Gets or sets the DestinationCountryCode value. */
        DestinationCountryCodeValue: string;
        /** Gets or sets the DirectDialInType value. */
        DirectDialInTypeValue: string;
        /** Gets or sets the PhoneKind value. */
        PhoneKindValue: string;
        /** Gets or sets Source region. */
        SourceRegion: string;
        /** Gets or sets band. */
        Band: string;
        /** Gets or sets Cluster. */
        Cluster: string;
        /** Gets or sets Tariff Group Retail / Partner Band Rate Per Minute. */
        TGRetailBandRatePerMinute: number;
        /** Gets or sets Use Tariff Group Retail / Partner Rate. */
        IsUseTariffGroupRetailRate: boolean;
        /** Gets or sets Tariff Group Retail / Partner Band Rate Per Minute. */
        TGPartnerBandRatePerMinute?: number;
        /** Gets or sets Use Tariff Group Retail / Partner Rate. */
        IsUseTariffGroupPartnerRate: boolean;
        /** Gets or sets Retail band rate per minute */
        RetailBandRatePerMinute?: number;
        /** Gets or sets Partner band rate per minute */
        PartnerBandRatePerMinute?: number;
        /** Gets or sets Retail bridging rate per minute */
        RetailBridgingRatePerMinute?: number;
        /** Gets or sets Partner bridging rate per minute */
        PartnerBridgingRatePerMinute?: number;
        /** Gets or sets the CountryCode value. */
        CountryCodeValue: string;
        /** Gets or sets Zone. */
        Zone: string;
        /** Gets or sets Retail surcharge rate per minute */
        RetailSurchargeRatePerMinute: number;
        /** Gets or sets Partner surcharge rate per minute */
        PartnerSurchargeRatePerMinute: number;
        /** Gets or sets Minute threshold start. */
        MinuteThresholdStart: number;
        /** Gets or sets Minute threshold end. */
        MinuteThresholdEnd: number;
        /** Gets or sets Retail discount percentage */
        RetailDiscountPercentage?: number;
        /** Gets or sets Partner discount percentage */
        PartnerDiscountPercentage?: number;
        /** Gets or sets the IncludedCharges value. */
        IncludedChargesValue: string;
        /** Gets or sets Number of free minutes */
        NumberOfFreeMinutes: number;
        /** Gets or sets Room size */
        RoomSize?: number;
        /** Gets or sets the billed hosts percentage. */
        BilledHostsPercentage?: number;
        /** Gets or sets is converted. */
        IsConverted?: boolean;
        /** Gets or sets the number of minimum active hosts. */
        MinimumActiveHosts?: number;
        /** Gets or sets the number of purchased licenses. */
        PurchasedLicenses?: number;
        /** Gets or sets the port overage rate. */
        PortOverageRate?: number;
        /** Gets or sets the LicenseFeePriceableItemId */
        LicenseFeePriceableItemId?: number;
        /** Gets or sets the LicenseFeeCalculationMode value. */
        LicenseFeeCalculationModeValue: string;
        /** Gets or sets Service type group */
        ServiceTypeGroup?: number;
        /** Gets or sets the MiscChargeType value. */
        MiscChargeTypeValue: string;
        /** Gets or sets Rate per unit */
        RatePerUnit: number;
        /** Gets or sets Flat rate */
        FlatRate: number;
        /** Gets or sets the OptionChargeType value. */
        OptionChargeTypeValue: string;
        /** Non recurring charge amount */
        NRcAmount: number;
        /** Gets or sets Recurring charge amount */
        RCAmount: number;
        /** Gets or sets number of units. */
        UnitValue: number;
        /** Gets or sets Unit amount */
        UnitAmount: number;
        /** Gets or sets base amount */
        BaseAmount: number;
        /** Gets or sets Flat unconditional discount amount */
        FlatUnconditionalDiscountAmount: number;
        /** Gets or sets Flat discount amount */
        FlatDiscountAmount: number;
        /** Gets or sets DiscountPercent */
        DiscountPercent: number;
        /** Gets or sets Qualifier condition. */
        Qualifier?: number;
        /** Gets or sets the QualifierOperator value. */
        QualifierOperatorValue: string;
        /** Commitment start date. */
        CommitmentStartDate?: Date;
        /** Gets or sets the CommitmentFrequency value. */
        CommitmentFrequencyValue: string;
        /** Commitment amount. */
        CommitmentAmount?: number;
        /** Gets or sets the CancellationFeePolicy value. */
        CancellationFeePolicyValue: string;
        /** Gets or sets the frequency value. */
        FrequencyValue: string;
        /** Global discount threshold. */
        Threshold?: number;
        /** Global discount discount percentage. */
        DiscountPercentage?: number;
        /** Gets or Sets Is Flat Rate Used */
        IsFlatRateUsed: boolean;
        /** Gets or Sets Is Unit Rate Used */
        IsUnitRateUsed: boolean;
    }
}

declare namespace bluesky.core.model.quote {
    /** Model for Rate Schedule definition */
    interface IRateScheduleDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the id of the quote. */
        QuoteId: number;
        /** Gets or sets the id of a parameter table. */
        PTId: number;
        /** Gets or sets the name of the Parameter Table. */
        PTName: string;
        /** Gets or sets the rate schedule type. */
        RateScheduleType: string;
        /** Gets or sets the start date. */
        StartDate: Date;
        /** Gets or sets the end date. */
        EndDate: Date;
        /** Gets or sets the priceable item id. */
        PriceableItemId: number;
        /** Gets or sets the rate entries. */
        RateEntries: IRateEntryDefinition[];
    }
}

declare namespace bluesky.core.model.quote {
    /** DTO of an sign off decision. */
    interface ISignOffDecisionDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the approver login. */
        ApproverLogin: string;
        /** Gets or sets the approver display name. */
        ApproverDisplayName: string;
        /** Gets or sets the approver decision. */
        Decision: boolean;
        /** Gets or sets the approval decision date. */
        SignOffDate: Date;
        /** Gets or sets a decision comment. */
        Comment: string;
        /** Gets the UserRole. */
        UserRole: IOrderManagementEnumerationDto;
    }
}

declare namespace bluesky.core.model.quote {
    /** Model for Quote definition */
    interface ISimpleQuoteCreation {
        /** Gets or sets the label. */
        Label: string;
        /** Gets or sets the contract start date. */
        ContractStartDate: Date;
        /** Gets or sets the duration. */
        Duration: number;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.BusinessUnit value. */
        BusinessUnitValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency value. */
        CurrencyValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.CustomerSize value. */
        CustomerSizeValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName value. */
        SubsidiaryNameValue: string;
        /** Gets or sets the notes. */
        Notes: string;
        /** Gets or sets the name of the SFDC customer. */
        SFDCCustomerName: string;
        /** Gets or sets the sales account. */
        SalesAccount: string;
        /** Gets or sets the Sales Force Customer Account Id. */
        SFACustomerAccountId: string;
        /** Gets or sets the Sales Force Customer Account Name. */
        SFACustomerAccountName: string;
        /** Gets or sets the opportunity Id. */
        OpportunityId: string;
        /** Gets or sets the SFA quote Id. */
        SFAQuoteId: string;
        /** Gets or sets the C And C ProductOffering Id. */
        ConferencingAndCollaborationProductOfferingId: number;
    }
}

declare namespace bluesky.core.model.quote {
    /** Model for udrc unit definition */
    interface IUdrcUnitDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Unit name. */
        UnitName: string;
        /** Unit value. */
        UnitValue: number;
        /** Gets or sets the UnitDependentRecurringCharge (PI) identifier. */
        UnitDependentRecurringChargePriceableItemId: number;
    }
}

declare namespace bluesky.core.command.quote {
    interface IUpdateQuoteStatusCommand {
        Id: number;
        Comment?: string;
    }
}

declare namespace bluesky.core.model.technicalData {
    /** AccessAccount characteristics */
    interface IAccessCharacteristicDto extends IOrderManagementEntityDto {
        /** Gets or sets the name of the characteristic. */
        Name: string;
        /** Gets or sets the value of the characteristic. */
        Value: string;
        /** Technical option specification name. */
        TechnicalOptionSpecName: string;
        /** Business Value of the access characteristic. */
        BusinessValue: string;
    }
}

declare namespace bluesky.core.model.technicalData {
    /** This entity contains the information to configure, modify an access audio conference for a user. */
    interface IAudioAccessDto extends technicalData.ITechnicalAccessDto {
        /** Gets or sets Audio access type coming from the TI : Used values: MeetMe or Meet Me Secure.Additional values: Attended, FlexFlow, ManagementAlert, MeetMeDirect, MeetMeOperatorAssisted, Playback, TollFree.TODO ABE : Unused, duplicated with ConferenceType. To be removed from model (Domain, DAL OM...) */
        AccessType: string;
        /** Gets or sets Extension */
        Extension: string;
        /** Gets or sets Access Personal Information Number (used by User to access the service) */
        ModeratorPIN: string;
        /** Gets or sets Access Personal Information Number (used by audio participant to access the service) */
        ParticipantPIN: string;
        /** List of participants. */
        Participants: technicalData.IParticipantDto[];
    }
}

declare namespace bluesky.core.model.technicalData {
    /** Integrated audio access */
    interface IBaseIntegratedAudioAccessDto extends technicalData.IAudioAccessDto {
        /** Gets or sets AudioIntegrationIndex */
        AudioIntegrationIndex: number;
        /** Gets or sets Web access identifier. */
        WebAccessId: number;
    }
}

declare namespace bluesky.core.model.technicalData {
    /** DTO of a branding profile.A branding profile contains the technical data about a welcome pack email template. */
    interface IBrandingProfileDto extends IResourceBase {
        /** Gets or sets the identifier of the branding profile. */
        Uid: string;
        /** Gets or sets the name of the branding profile. */
        Name: string;
        /** Gets or sets the level of the branding profile. */
        Level: string;
        /** Gets or sets the description of the branding profile. */
        Description: string;
        /** Gets or sets the version of the branding profile. */
        Version: number;
    }
}

declare namespace bluesky.core.command.technicalData {
    /** Command for branding profile's creation. */
    interface ICreateBrandingProfileCommand {
        /** Gets or sets the identifier of the branding profil. */
        BrandingProfileIdentifier: string;
        /** Gets or sets the name of the branding profile. */
        Name: string;
        /** Gets or sets the description of the branding profile. */
        Description: string;
        /** Gets or sets the level of the branding profile.Corresponds to name of the associated branding model. */
        Level: string;
    }
}

declare namespace bluesky.core.model.technicalData {
    /** DDIs (Direct Dial In) correspond to external conference number which permits tothe customer to access an audio conference. */
    interface IDirectDialInDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Unique identifier of a DDI */
        InternationalDirectDialIn: string;
        /** Identifies the carrier of a DDI */
        Carrier: string;
        /** Identifies the City of a DDI */
        City: string;
        /** Identifies the Country of a DDI */
        Country: string;
        /** Description of a DDI */
        Description: string;
        /** Identifies the spoken language of a DDI */
        Language: string;
        /** Displayed Number of a DDI */
        PresentedVisualDirectDialIn: string;
        /** Identifies the Reference Order of a DDI */
        ReferenceOrder: string;
        /** Server address of the bridge AMG on which a DDI is provisioned */
        AMGAddress: string;
        /** Server port of the bridge AMG on which a DDI is provisioned */
        AMGPort: number;
        /** Identifies the DDI country in ISO 3166-2 format */
        IsoCountryCode: string;
        /** Regional area code of the visual DDI */
        TelephoneAreaCode: string;
        /** Telephone Country Code */
        TelephoneCountryCode: string;
        /** Welcome Message */
        WelcomeMessage: string;
        /** Waiting Music */
        WaitingMusic: string;
        /** Flag indicating whether the DDI is dedicated.True if the field Role is equal to Dedicated. False if Role is equal to Shared. */
        IsDedicated: boolean;
        /** Flag indicating whether the DDI is branded. */
        IsBranded?: boolean;
        /** When a DDI is returned in the list of access' DDIs, this flag indicates if the DDI is chosen by the Technical Inventory as the priorized one for a given type and a given usage.The Technical Inventory chooses a DDI based on its role, the user's primary group and country, and the service platform's country. */
        IsLocal: boolean;
        /** Gets or sets Required action on DDI */
        DirectDialInAction: string;
        /** Gets or sets Role of the DDI */
        DirectDialInRole: string;
        /** Type of conference that is assigned to the DDI */
        ConferenceType: string;
        /** Booking status of a DDI */
        Status: string;
        /** Type of the DDI */
        DirectDialInType: string;
        /** List of TerminatingNumbers */
        TerminatingNumbers: technicalData.ITerminatingNumberDto[];
    }
}

declare namespace bluesky.core.model.technicalData {
    /** This entity contains the information needed to configure, modify an access generic conference for a user. */
    interface IGenericAccessDto extends technicalData.ITechnicalAccessDto {
        /** Login to access the generic conference. */
        Login: string;
        /** Password to access to the generic conference. */
        Password: string;
    }
}

declare namespace bluesky.core.model.technicalData {
    /** Integrated audio access */
    interface IIntegratedAudioAccessDto extends technicalData.IBaseIntegratedAudioAccessDto {
    }
}

declare namespace bluesky.core.model.technicalData {
    /** A participant of a conference is related to a meet me secure access. */
    interface IParticipantDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Identifier of the participant in the technical inventory. */
        TechnicalParticipantId: string;
        /** Identifier of the participant in the service platform. */
        PlatformParticipantId: string;
        /** Participant name. */
        Name: string;
        /** Meet me secure code, generated by the technical inventory or by the service platform. */
        MeetMeSecureCode: string;
        /** Participant email. */
        Email: string;
        /** Participant phone number. */
        PhoneNumber: string;
        /** Additional comments. */
        Comments: string;
        /** Gets or sets the Action for a participant: add, update or delete. */
        Action: string;
        /** Gets or sets the Participant type. A participant can have a Moderator or Participant type. */
        ParticipantType: string;
    }
}

declare namespace bluesky.core.model.technicalData {
    import ManagementSubsidiaryDto = account.IManagementSubsidiaryDto;
    /** Domain is the parent class and should be abstract for export interface purpose.A Domain corresponds to a technical environment set up for a Sales Channel /Subsidiary, on which the customer will be provisioned: it is hosted byone/several Service Platforms, uses subset of logical resources which can bespecifically branded, and defines a default set of options. */
    interface IServicePlatformDomainDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the Unique name of the Domain */
        Name: string;
        /** Gets or sets the Domain's Sales Channel */
        SalesChannel: string;
        /** Gets or sets Provisioning status of the Domain. */
        DomainStatus: string;
        /** Gets or sets Domain specification name. */
        DomainSpecName: string;
        /** List of service platforms */
        ServicePlatforms: technicalData.IServicePlatformDto[];
        /** List of management subsidiaries. */
        ManagementSubsidiaries: ManagementSubsidiaryDto[];
    }
}

declare namespace bluesky.core.model.technicalData {
    /** Service Platform is a physical resource in Arkadin network. It can groupseveral Technical Elements.Different kinds of service platform can be created: AVAYA 6200, AVAYA 7000,SEP/VIPER, AnyWhere, WebEx, WebEx Gateway, Vidyo, COBRA. */
    interface IServicePlatformDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Name of the Service Platform. */
        Name: string;
        /** Gets or sets Primary Bridge for an AccessAccount */
        IsPrimary?: boolean;
        /** Gets or sets Code of the language known by the Service Platform. */
        ServicePlatformCode: string;
        /** Gets or sets Language name known by the Service Platform. */
        ServicePlatformLanguage: string;
        /** Gets or sets Role. */
        Role: string;
        /** Gets or sets Extention */
        Extension: string;
        /** Subsidiary of the Service Platform */
        Subsidiary: string;
        /** Service Platform country */
        Country: string;
        /** Status of the service platform */
        Status: string;
        /** Service platform specification */
        ServicePlatformSpec: string;
    }
}

declare namespace bluesky.core.model.technicalData {
    /** A Subdomain is instantiated for a given Customer when subscribing to aTechnicalProduct.It is dedicated to a Customer and inherits the characteristics of the parentDomain.It can be of type Audio, Web or Video. */
    interface ISubdomainDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Unique name of the Subdomain */
        Name: string;
        /** Gets or sets a flag indicates if the subdomain was created at the same time as the technical product.This value is returned by the Technical Inventory */
        IsNew?: boolean;
        /** Gets or sets Company identifier. */
        CompanyIdentifier: string;
        /** Description */
        Description: string;
        /** Gets or sets DomainSpecName of the user */
        DomainSpecName: string;
        /** Subdomain belongs to a domain. */
        ServicePlatformDomain: technicalData.IServicePlatformDomainDto;
        /** This resource describes microsites for WebEx. */
        Url: technicalData.IUrlDto;
        /** DDIs list. */
        DirectDialIns: technicalData.IDirectDialInDto[];
    }
}

declare namespace bluesky.core.model.technicalData {
    /** Dto header of a technical access **/
    interface ITechnicalAccessHeaderDto extends IOrderManagementEntityDto {
        /** Value of the technical access type enumeration. */
        TechnicalAccessType: string;
        /** Gets or sets Name of the AccessAccount, generated by TI. */
        AccessName: string;
        /** Gets or sets Conference reference */
        ConferenceRef: string;
        /** Gets or sets Domain name */
        DomainName: string;
        /** Gets or sets a flag indicates if is one time event */
        IsOneTime?: boolean;
        /** Gets or sets Technical product name */
        TechnicalProductName: string;
        /** Gets or sets Technical product specification name */
        TechnicalProductSpecName: string;
        /** Gets or sets Technical access start date */
        StartDate?: Date;
        /** Gets or sets Technical access end date */
        EndDate?: Date;
        /** Gets or sets User reference. */
        UserRef: string;
        /** Gets or sets Billing code. */
        BillingCode: string;
        /** Gets or sets a flag indicates if defined by Technical Inventory and used by Provisioning to determine if the User must be createdor if he already exists on the platform. */
        IsUserImpacted: boolean;
        /** Gets or sets Subsidiary code */
        SubsidiaryCode: string;
        /** Gets or sets Duration of the conference. */
        Duration: number;
        /** Gets or sets topic of the conference. */
        Topic: string;
        /** Gets or sets the flag indicating whether provisioning is required. */
        IsProvisioningRequired?: boolean;
        /** Gets or sets the integration link. */
        IntegrationLink: string;
        /** Getss whether this access can be used to create OTP accesses.It is true if the access is permanent and the product supports OTP. */
        CanCreateOTP: boolean;
        /** Gets or sets the commercial name of the access' technical product specification. */
        CommercialProductName: string;
        /** Gets or sets Subdomain identifier. Used in mapping referential constraint. */
        SubdomainId: number;
        /** Gets or sets User identifier. Used in mapping referential constraint. */
        UserId?: number;
        /** Gets or sets Subsidiary of the user */
        UserSubsidiary: string;
        /** Gets or sets DomainSpecName of the user */
        DomainSpecName: string;
        /** Value of the conference type. */
        ConferenceType: string;
        /** Indicates if the access will be hidden for One Portal users. */
        IsHidden: boolean;
        /** Gets or sets the access status. */
        Status: string;
    }
}

declare namespace bluesky.core.model.technicalData {
    enum TechnicalAccessTypeEnum {
        None = 0,
        AudioAccess = 1,
        WebAccess = 2,
        IntegratedAudioAccess = 3,
        GenericAccess = 4,
    }
}

declare namespace bluesky.core.model.technicalData {
    import UserAccountHeaderDto = account.IUserAccountHeaderDto;
    interface ITechnicalAccessDto extends IOrderManagementEntityDto {
        /** Value of the technical access type enumeration. */
        TechnicalAccessType: string;
        /** Gets or sets Name of the Access, generated by TI. */
        AccessName: string;
        /** Gets or sets Conference reference */
        ConferenceRef: string;
        /** Gets or sets Domain name */
        DomainName: string;
        /** Gets or sets a flag indicates if is one time event */
        IsOneTime?: boolean;
        /** Gets or sets Technical product name */
        TechnicalProductName: string;
        /** Gets or sets Technical product specification name */
        TechnicalProductSpecName: string;
        /** Gets or sets Technical access start date */
        StartDate?: Date;
        /** Gets or sets Technical access end date */
        EndDate?: Date;
        /** Gets or sets User reference. */
        UserRef: string;
        /** Gets or sets Billing code. */
        BillingCode: string;
        /** Gets or sets a flag indicates if defined by Technical Inventory and used by Provisioning to determine if the User must be createdor if he already exists on the platform. */
        IsUserImpacted: boolean;
        /** Gets or sets Subsidiary code */
        SubsidiaryCode: string;
        /** Gets or sets Duration of the conference. */
        Duration: number;
        /** Gets or sets topic of the conference. */
        Topic: string;
        /** Gets or sets the flag indicating whether provisioning is required. */
        IsProvisioningRequired?: boolean;
        /** Gets or sets the integration link. */
        IntegrationLink: string;
        /** Gets whether this access can be used to create OTP accesses.It is true if the access is permanent and the product supports OTP. */
        CanCreateOTP: boolean;
        /** Gets or sets the commercial name of the access' technical product specification. */
        CommercialProductName: string;
        /** Gets or sets Subdomain identifier. Used in mapping referential constraint. */
        SubdomainId: number;
        /** Gets or sets User identifier. Used in mapping referential constraint. */
        UserId?: number;
        /** Gets or sets Subsidiary of the user */
        UserSubsidiary: string;
        /** Gets or sets DomainSpecName of the user */
        DomainSpecName: string;
        /** Value of the conference type. */
        ConferenceType: string;
        /** Indicates if the access will be hidden for One Portal users. */
        IsHidden: boolean;
        /** Identifier of the user account. */
        UserAccountUid: string;
        /** Identifier of the logo account. */
        LogoUid: string;
        /** Gets or sets the access status. */
        Status: string;
        /** Gets or sets User */
        UserAccount: UserAccountHeaderDto;
        /** Gets or sets parent subdomain. */
        Subdomain: technicalData.ISubdomainDto;
        /** Gets List of service platforms */
        ServicePlatforms: technicalData.IServicePlatformDto[];
        /** Gets AccessAccount characteristics */
        AccessCharacteristics: technicalData.IAccessCharacteristicDto[];
        /** DDIs linked to the Audio Access, inherited from the subdomain or from the domain. */
        DirectDialIns: technicalData.IDirectDialInDto[];
    }
}

declare namespace bluesky.core.model.technicalData {
    /** Defines specifications (templates) for TechnicalOptions. */
    interface ITechnicalOptionSpecDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Name of the TechnicalOptionSpecification. */
        Name: string;
        /** Gets or sets Technical option specification value. */
        Value: string;
        /** Gets or sets Provisioning type */
        ProvisioningType: string;
    }
}

declare namespace bluesky.core.model.technicalData {
    /** Defines specifications (templates) for TechnicalProducts. */
    interface ITechnicalProductSpecificationDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets name of the Technical Product Specification */
        Name: string;
        /** Gets List of technical options specifications */
        TechnicalOptionSpecs: technicalData.ITechnicalOptionSpecDto[];
    }
}

declare namespace bluesky.core.model.technicalData {
    /** A TechnicalProduct is the technical view of a CommercialProduct subscribed by a customer.
    * It can be atomic (one commercial product is corresponding to one technicalproduct) or composite (one commercial product is decomposed in severaltechnical products).If a Customer has several subscriptions for the same Technical Product, severalTechnical Products will be instantiated.A technical product has its own characteristics and values (thus overwritingDomain Characteristic values) */
    interface ITechnicalProductDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Name of the Technical Product */
        Name: string;
        /** Gets or sets Technical product status. */
        TechnicalProductStatus: string;
        /** Technical Product Specification.Inverse navigation. */
        TPSpecification: technicalData.ITechnicalProductSpecificationDto;
        /** List of subdomains. */
        Subdomains: technicalData.ISubdomainDto[];
    }
}

declare namespace bluesky.core.model.technicalData {
    /** TerminatingNumber. */
    interface ITerminatingNumberDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Platform Number */
        PlatformNumber: string;
        /** Gets or sets the service platform name */
        ServicePlatformName: string;
        /** Gets or sets the service platform spec name */
        ServicePlatformSpecName: string;
        /** Gets or sets the phone kind */
        PhoneKind: string;
    }
}

declare namespace bluesky.core.model.technicalData {
    /** This resource describes microsites for WebEx.It may be shared between several Logos or dedicated to one Logo. */
    interface IUrlDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets value of the URL. */
        UrlValue: string;
        /** Gets or sets the administrator login to connect to the URL. */
        Login: string;
        /** Gets or sets administrator password to connect to the URL. */
        Password: string;
        /** Gets or sets URL type. */
        UrlType: string;
        /** Gets or sets site name. */
        SiteName: string;
        /** Gets or sets the expiration date. */
        ExpirationDate?: Date;
        /** Gets or sets the provider. */
        Provider: string;
        /** Gets or sets required action on URL. */
        UrlAction: string;
    }
}

declare namespace bluesky.core.model.technicalData {
    /** This entity contains the information necessary to configure, modify an access web conference for a user. Web Conference can be Anywhere, Livemeeting or WebEx. */
    interface IWebAccessDto extends technicalData.ITechnicalAccessDto {
        /** Name of access whose category is audio */
        AudioAccessName: string;
        /** Password to access to the web conference.Usually, it is the participant or moderator PIN Code. */
        Password: string;
        /** Login to access to the conference. By default it will be user email information.If this information is not available, it will be the Web login. */
        WebLoginAlias: string;
        /** WebLogin which is provided by the "Audio platform". */
        WebLoginTechnical: string;
        /** Anywhere OneClick URL. */
        OneClickURL: string;
        /** Anywhere Participant OneClick URL. */
        ParticipantOneClickURL: string;
        /** List of integrated audio accesses. */
        IntegratedAudioAccesses: technicalData.IIntegratedAudioAccessDto[];
    }
}

declare namespace bluesky.core.model.taxManagement {
    interface INoramTaxExemptionDto extends IResourceBase {
        Level: TaxExemptTypeEnum;
        Location: number;
        CertificateId: string;
        StartDate: string;
        ExpirationDate: string;
        TaxExemptionTypes: Array<ITaxExemptionTypeDto>;
        TaxAction: TaxActionEnum;
        IsExpired: boolean;
    }
}

declare namespace bluesky.core.model.taxManagement {
    /** Informations about a PCode. */
    interface IPCodeDto extends IResourceBase {
        /** Gets or sets the code. */
        Code: number;
        /** Indicates if the tax pcode is primary for the given location. */
        IsDefault: boolean;
    }
}

declare namespace bluesky.core.model.taxManagement {
    /** Information about the result of search tax pcodes. */
    interface ISearchTaxPCodeResultDto extends IResourceBase {
        /** List of Tax-PCodes available for the search input. */
        AvailablePCodes: IPCodeDto[];
        /** Indicates if the response is based on a partial search. */
        IsResultBasedOnPartialSearch: boolean;
        /** Message indicating the rule used during a partial search. */
        PartialSearchMessage: string;
    }
}

declare namespace bluesky.core.command.taxManagement {
    /** Search parameter used to retrieve a list of PCode. */
    interface ISearchPCodeCommand {
        /** Gets or sets the zip or postal code. */
        ZipCode?: string;
        /** Gets or sets the city or town. */
        City?: string;
        /** Gets or sets the the country code.TODO MGA: the searchPCodeCommandDto should accept CountryCode with 2 or 3 letters (ISO alpha2 or alpha3). */
        CountryCode?: string;
        /** Gets or sets the country subdivision code (state or province). */
        CountrySubdivisionCode?: string;
        /** Gets or sets the county. */
        County?: string;
        /** Indicates if search using partial input parameters is allowed. */
        IsPartialSearchAllowed?: boolean;
    }
}

declare namespace bluesky.core.model.taxManagement {
    enum TaxActionEnum {
        Add = 0,
        Modify = 1,
        Cease = 2,
    }
}

declare namespace bluesky.core.model.taxManagement {
    /** Model for a noram tax exemption type. */
    interface ITaxExemptionTypeDto extends IResourceBase {
        Code: number;
        Name: string;
        MetranetTaxExemptionId?: number;
        IsSelected: boolean;
    }
}

declare namespace bluesky.core.model.taxManagement {
    enum TaxExemptTypeEnum {
        Federal = 0,
        State = 1,
    }
}

declare namespace bluesky.core.model.userManagement {
    /** Dto of an application work items summary.The summary contains for a specific application a summarized view of the work items.Each work item contains the number of the elements to monitor for a specific type of action to perform. */
    interface IApplicationWorkItemsSummaryDto extends IResourceBase {
        /** Gets or sets the list of work items to track. */
        WorkItemHeaders: userManagement.IWorkItemHeaderDto[];
        /** Gets or sets the total number of monitored elements. */
        TotalCount: number;
    }
}

declare namespace bluesky.core.model.userManagement {
    /** DTO Header of a scope management (Aggregation of the BME CountryReference, SubsidiaryReference andCurrencyReference, defined in MN). */
    interface IScopeManagementHeaderDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the country name value. */
        CountryNameValue: string;
        /** Geo region enum value (EMEA, ...) from the BME CountryReference.  We miss this MetraNet enum, so for now, it is a string. */
        GeoRegion: string;
        /** Gets or sets the silo name from the BME SubsidiaryReference. */
        SiloName: string;
        /** Gets or sets the subsidiary code from the BME SubsidiaryReference. */
        SubsidiaryCode: string;
        /** Gets or sets the subsidiary name value. */
        SubsidiaryNameValue: string;
        /** Gets or sets the management subsidiary name value. */
        ManagementSubsidiaryNameValue: string;
    }
}

declare namespace bluesky.core.model.userManagement {
    /** DTO of a scope management (Aggregation of the BME CountryReference, SubsidiaryReference andCurrencyReference, defined in MN). */
    interface IScopeManagementDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the country name. */
        CountryName: string;
        /** Gets or sets the country name value. */
        CountryNameValue: number;
        /** Gets or sets the currency. */
        Currency: string;
        /** Gets or sets the currency value. */
        CurrencyValue: number;
        /** Geo region enum value (EMEA, ...) from the BME CountryReference.  We miss this MetraNet enum, so for now, it is a string. */
        GeoRegion: string;
        /** Gets or sets the management's subsidiary name. */
        ManagementSubsidiaryName: string;
        /** Gets or sets the management's subsidiary name value. */
        ManagementSubsidiaryNameValue: number;
        /** Gets or sets the navision instance. */
        NavisionInstance: string;
        /** Gets or sets the navision instance value. */
        NavisionInstanceValue: number;
        /** Gets or sets the partner account name from the BME SubsidiaryReference. */
        PartnerAccountName: string;
        /** Gets or sets the silo name from the BME SubsidiaryReference. */
        SiloName: string;
        /** Gets or sets the subsidiary code from the BME SubsidiaryReference. */
        SubsidiaryCode: string;
        /** Gets or sets the subsidiary name. */
        SubsidiaryName: string;
        /** Gets or sets the subsidiary name value. */
        SubsidiaryNameValue: number;
        /** Gets or sets the tax vendor.. */
        TaxVendor: string;
        /** Gets or sets the tax vendor value. */
        TaxVendorValue: number;
    }
}

declare namespace bluesky.core.model.userManagement {
    /** Informations about a user. */
    interface IUserInformationDto {
        /** File Name. */
        FirstName: string;
        /** Last Name. */
        LastName: string;
        /** DisplayName. */
        DisplayName: string;
        /** Identifier of the User. */
        UserIdentifier: string;
        /** Email. */
        Email: string;
        /** Phoe number. */
        PhoneNumber: string;
    }
}

declare namespace bluesky.core.model.userManagement {
    interface IUserRoleEntryDto {
        Name: string;
        Role: string;
        Silo: string;
        IsBlueSkyRole: boolean;
    }
}

declare namespace bluesky.core.model.userManagement {
    interface IUserSsoDto extends IResourceBase {
        Subsidiary: string;
        Owners: string[];
        UserRoleEntry: userManagement.IUserRoleEntryDto;
        ActiveDirectoryGroups: userManagement.IUserRoleEntryDto[];
        Regions: string[];
        UserDisplayName: string;
        /** Gets or sets the user's identifier in the active directory. */
        UserIdentifier: string;
        Countries: string[];
        Subsidiaries: string[];
    }
}

declare namespace bluesky.core.model.userManagement {
    /** Header Dto of a work item.A work item contains a type and number of elements to be monitored for a connected user (e.g.: 7 quotes to approve). */
    interface IWorkItemHeaderDto extends IResourceBase {
        /** Gets or sets the identifier of the work item.Used to identify the action to be performed by the user. */
        Identifier: string;
        /** Gets or sets the name of the work item.The name is the displayed value of the identifier. */
        Name: string;
        /** Gets or sets the number of monitored elements. */
        Count: number;
    }
}

declare namespace bluesky.core.model.welcomePack {
    interface ICountryDdisDto {
        Country: string;
        TollDdis: string[];
        TollFreeDdis: string[];
        TollPlaybackDdis: string[];
        TollFreePlaybackDdis: string[];
    }
}

declare namespace bluesky.core.model.welcomePack {
    interface IHierarchyDto {
        BillingAccountDisplayName: string;
        BillingAccountUid: string;
        GlobalLogoDisplayName: string;
        GlobalLogoUid: string;
        LocalLogoDisplayName: string;
        LocalLogoUid: string;
    }
}

declare namespace bluesky.core.model.welcomePack {
    interface IProductUrlDto {
        Url: string;
        Type: string;
    }
}

declare namespace bluesky.core.model.welcomePack {
    interface IProductDto {
        TechnicalName: string;
        TechnicalType: string;
        ModeratorPin: string;
        ParticipantPin: string;
        ConferenceRef: string;
        Login: string;
        Password: string;
        Urls: IProductUrlDto[];
        LocalDdis: ICountryDdisDto;
        OtherDdis: ICountryDdisDto[];
    }
}

declare namespace bluesky.core.model.welcomePack {
    interface IUserRecipientDto {
        Country: string;
        EmailAddress: string;
        Language: string;
        TimeZone: string;
    }
}

declare namespace bluesky.core.model.welcomePack {
    interface IWelcomePackDefinitionDto extends IWelcomePackDto {
        WelcomePackCount: number;
        SubmittedDate: Date;
        Source: string;
        SubscriptionMemberShipId: string;
        SubmittedBy: string;
        IsTrial: boolean;
        TimeZone: string;
        UserLanguage: string;
        UserLocalSalutation: string;
        CarbonCopyRecipients: string[];
    }
}

declare namespace bluesky.core.model.welcomePack {
    interface IWelcomePackHeaderDto extends IResourceBase {
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
        Data: {
            [key: string]: string;
        };
        LogoName: string;
        OrderId: string;
    }
}

declare namespace bluesky.core.command.welcomePack {
    interface ISearchWelcomePackCommand extends IBasePaginatedSearchCommand {
        UserId?: string;
        Email?: string;
        LogoName?: string;
        BillingAccountName?: string;
        Status?: string;
        Queue?: string;
        OrderId?: number;
        CreationDateFrom?: string;
        CreationDateTo?: string;
        SendingDate?: string;
    }
}

declare namespace bluesky.core.model.welcomePack {
    enum WelcomePackSendingModeEnum {
        Instantly = 0,
        NoSending = 1,
        InTheFuture = 2,
    }
}

declare namespace bluesky.core.model.welcomePack {
    enum WelcomePackSendingStrategyEnum {
        ToUser = 0,
        ToSingleUserRecipient = 1,
    }
}

declare namespace bluesky.core.model.welcomePack {
    enum WelcomePackStateEnum {
        Submitted = 0,
        Bounced = 1,
        Success = 2,
        Error = 3,
        Empty = 4,
        AwaitingAdmin = 5,
        Unsubscribed = 6,
        GlobalUnsubscribed = 7,
        Excluded = 8,
        Unknown = 9,
    }
    enum WelcomePackQueueEnum {
        Submitted = 0,
        Rejected = 1,
        Pending = 2,
        Read = 3,
        Waiting = 4,
        Imported = 5,
        Complete = 6,
        Empty = 7,
        Unknown = 8,
        Excluded = 9,
    }
    interface IWelcomePackDto {
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

declare namespace bluesky.externals.smartTable {
    /** Internal state of the smart-table component. Should not be exposed but is needed for server-side pagination.
     * TODO MGA ongoing work, might not be needed.
     */
    interface ITableState {
        sort?: {
            predicate?: any;
            reverse?: boolean;
            functionName?: string;
        };
        search?: {
            predicateObject?: any;
        };
        pagination?: {
            /** default: 0. */
            start?: number;
            /** default: 0. */
            totalItemCount?: number;
            /** number of items displayed? */
            number?: number;
            /** total number of pages for current collection. */
            numberOfPages?: number;
        };
    }
    interface IStConfig {
        pagination?: {
            /** path to template partial as registered in $templateCache. */
            template?: string;
            /** displayed number of items per page. */
            itemsByPage?: number;
            /** number of pages displayed in the widget to scroll through. */
            displayedPages?: number;
        };
        search?: {
            /** in ms. default: 400ms */
            delay?: number;
            /** default: 'input' */
            inputEvent?: string;
        };
        select?: {
            /** default: 'single' */
            mode?: string;
            /** default: 'st-selected' */
            selectedClass?: string;
        };
        sort?: {
            /** default : 'st-sort-ascent' */
            ascentClass?: string;
            /** Default : 'st-sort-descent' */
            descentClass?: string;
            /** default: false */
            descendingFirst?: boolean;
            /** default: false */
            skipNatural?: boolean;
            /** default: 300 (ms) */
            delay?: number;
        };
        pipe?: {
            /** in ms. default: 100ms. */
            delay?: number;
        };
    }
}

declare namespace bluesky.core.model.bulk {
    interface IBulkImportEntryErrorDto {
        /**
         * The ErrorMessage
         */
        ErrorMessage: string;
        /**
         * The field that is causing an error (corresponds to the column in the excel file)
         */
        FieldName: string;
        /**
         * The Value that is causing the error
         */
        AttemptedValue: string;
    }
}

declare namespace bluesky.core.model.bulk {
    interface IBulkImportEntryErrorsDto {
        /**
         * The line number in the excel file this entry corresponds to.
         */
        LineNumber: number;
        /**
         * List of error messages each concerning a specific validation error of this entry.
         */
        Errors: IBulkImportEntryErrorDto[];
        /**
         * Shortcut to display a concatenation of all errors concerning this line entry.
         */
        ErrorMessage: string;
    }
}

declare module bluesky.core.model.bulk {
    interface IBulkImportResultDto {
        /**
         * The total number of lines processed during import.
         */
        TotalLinesCount: number;
        /**
         * The number of valid lines in the file.
         */
        ValidLinesCount: number;
        /**
         * The number of lines that didn't match all validation criterias.
         * This is a shortcut to TotalLinesCount - ValidLinesCount.
         */
        LinesInErrorCount: number;
        /**
         * Global flag to indicate if the file is conform to contracts and could be processe.
         * A file can be processed without all its entries being valid, this flag indicates a well-formed file.
         */
        IsValid: boolean;
        /**
         * The filename (with extension) of the processed file.
         */
        Filename: string;
        /**
         * List of global errors not specific to a single line in the file.
         * These errors can concern global validations of data (double entries for expl.) or problems with the file itself.
         */
        GlobalErrors: string[];
        /**
         * List of entries with specific errors (as opposed to global errors).
         * The format of <see cref="BulkImportEntryInErrorDTO{T}"/>"/> includes necessary informations to handle line-specific errors.
         */
        EntriesInError: IBulkImportEntryErrorsDto[];
    }
}

declare namespace bluesky.core.model.bulk {
    interface IFileUploadContractDto {
        MaxFileSize: number;
        SupportedFileExtensionList: Array<string>;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Access credential for generic accesses */
    interface IAccessCredentialsDto {
        /** Login for generic accesse */
        Login: string;
        /** Password for generic accesse */
        Password: string;
        /** TechnicalSpecification of generic access */
        TechnicalSpecification: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Additional information on a User used for audio and web accesses creation. */
    interface IAccessInfoDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** If specified, this is the value of Moderator PIN requested by the customer. */
        ModeratorPIN: string;
        /** If specified, this is the value of Participant PIN requested by the customer */
        ParticipantPIN: string;
        /** Used for WebEx Product, in case the user specifies a login for itsWebEx access creation. */
        WebLogin: string;
        /** Used for WebEx Product, in case the user specifies a password for its Webex access creation. */
        WebPassword: string;
        /** AccessAccount Name of the permanent Audio AccessAccount */
        AudioAccessName: string;
        /** Start Date of the one-time access */
        StartDate?: Date;
        /** Flag to indicate if the accesses to create are One-Time accesses. */
        IsOneTime?: boolean;
        /** Billing code. */
        BillingCode: string;
        /** Gets or sets the billing reference, additional information at access level to be displayed in the invoice. */
        BillingRef: string;
        /** Topic. Used by Selfcare. */
        Topic: string;
        /** Duration. Used by Selfcare. */
        Duration?: number;
        /** Comment. */
        Comment: string;
        /** Management subsidiary for the given user. It is filled by OrderEntry before order submission. This attributes corresponds to the Managementsubsidiary specified on the closest direct ascendant of the User node */
        Subsidiary: string;
        /** Value of the conference type. */
        ConferenceType: string;
        /** Indicates if the participant PIN must be reset. */
        IsParticipantPinReset: boolean;
        /** Indicates if the moderator PIN must be reset. */
        IsModeratorPinReset: boolean;
        /** If specified, gets or sets the list of technical specifications for which hidden accesses will be created. */
        HiddenAccessesTechnicalSpecifications: string[];
        /** If specified, gets or sets the list of technical specifications for which hidden accesses will be created. */
        AccessCredentials: IAccessCredentialsDto[];
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Dto of a custom option.This class represents a customized option for a given User for which accesses are to be created. */
    interface ICustomOptionDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Name of the Option. */
        Name: string;
        /** Customized valued of the Option. */
        Value: string;
        /** Technical Specification of the Option. */
        TechnicalOptionSpec: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Dto of a movable access. */
    interface IMovableAccessDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Source access name. */
        SourceAccessName: string;
        /** Target access name. */
        TargetAccessName: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** A participant of a conference is related to a meet me secure access. */
    interface IParticipantDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Identifier of the participant in the technical inventory. */
        TechnicalParticipantId: string;
        /** Identifier of the participant in the service platform. */
        PlatformParticipantId: string;
        /** Participant name. */
        Name: string;
        /** Meet me secure code, generated by the technical inventory or by the service platform. */
        MeetMeSecureCode: string;
        /** Participant email. */
        Email: string;
        /** Participant phone number. */
        PhoneNumber: string;
        /** Additional comments. */
        Comments: string;
        /** Gets or sets the Action for a participant: add, update or delete. */
        Action: string;
        /** Gets or sets the Participant type. A participant can have a Moderator or Participant type. */
        ParticipantType: string;
    }
}

declare namespace bluesky.core.command.customerOrder {
    /** Command to create a merge logo order. */
    interface ICreateMergeLogoCustomerOrderCommand extends IBaseCreateOrderCommand {
        /** Identifier of the source logo to merge. */
        SourceLogoUid: string;
        /** Identifier of the destination logo, under which all source logo hierarchy must be moved. */
        DestinationLogoUid: string;
        /** Indicates if the DDIs configured for the source logo must be merged in the target logo. */
        MergeConfiguredDDIs: boolean;
    }
}

declare namespace bluesky.core.command.customerOrder {
}

declare namespace bluesky.core.command.customerOrder {
    /** Contact information used in Create Hierarchy light order */
    interface IHierarchyLightContactDto {
        /** Contact First Name */
        FirstName: string;
        /** Contact Last name */
        LastName: string;
        /** Contact address */
        Address: string;
        /** Contact City */
        City: string;
        /** Contact Zip Code */
        ZipCode: string;
        /** Contact country */
        Country: string;
        /** Contact state */
        State: string;
        /** Contact County (US Only) */
        County: string;
        /** Contact Phone Number */
        PhoneNumber: string;
        /** Contact Email */
        Email: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** DTO header of a hierarchy order item. */
    interface IHierarchyOrderItemHeaderDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Processing status of an OrderItem. */
        OrderItemStatus: string;
        /** This describes the action held by the Hierarchy OrderItem */
        HierarchyAction: string;
        /** Gets or sets the UserName of the account linked to the hierarchy order item. */
        AccountUserName: string;
        /** Gets or sets the Type of the account linked to the hierarchy order item. */
        AccountType: string;
        /** Gets or sets the id of the account linked to the hierarchy order item. */
        AccountId: number;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** DTO of a hierarchy subset order. */
    interface IHierarchySubsetOrderDto extends ISubsetOrderBaseDto {
        /** A hierarchy subset order is composed of at least one hierarchy order item. */
        hierarchyOrderItems: IHierarchyOrderItemHeaderDto[];
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Dto of a Movable account. */
    interface IMovableAccountDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the Target payer user name. */
        PayerUserName: string;
        /** Gets or sets the User name of the node to move. */
        SourceName: string;
        /** Gets or sets the New user name. */
        TargetName: string;
        /** Gets or sets the User name of the target parent. */
        TargetParentName: string;
        /** Gets or sets the New password. */
        NewPassword: string;
        /** Gets or sets new currency */
        NewCurrency: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    import TechnicalProductDto = bluesky.core.model.technicalData.ITechnicalProductDto;
    /** Dto of a subscriptionA subscription is product offering sold to a customer and applied to a singlesubscriber node. */
    interface ICustomerOrderSubscriptionDto extends IResourceBase {
        /** Identifier of an existing subscription in MetraNet. It is null incase of a new subscription and therefore filled by Orchestration. */
        SubId?: number;
        /** Subscription Name, if required by the Customer. It will be availableon its invoice. */
        DisplayName: string;
        /** This will be filled by OrderEntry with the Product Offering 'Product Offering Display Name' attribute in MetraNet. */
        OfferName: string;
        /** Identifier of an existing group subscription. It is null in case ofa new subscription and therefore filled by Orchestration. It is null in case ofSupporting PO subscription too, as they are Individually Subscribed. */
        GroupSubId?: number;
        /** Identifies the parent subscription of the current subscription. Itis filled after subscription has been made. */
        ParentSubId?: number;
        /** Identifier of a Product Offering in MetraNet. */
        POId: number;
        /** Identifier of the parent product offering. */
        ParentPOId?: number;
        /** Quote identifier. */
        QuoteId?: number;
        /** Subscription start date. */
        StartDate?: Date;
        /** Subscription end date. */
        EndDate?: Date;
        /** Gets or sets the contract start date. */
        ContractStartDate?: Date;
        /** Gets or sets the duration (in months). */
        Duration?: number;
        /** Gets or sets the quote reference. */
        QuoteReference: string;
        /** Type of Product Offering. */
        ProductOfferingType: string;
        /** List of management subsidiaries. */
        ManagementSubsidiaries: any[];
        /** List of UdrcInfos */
        UdrcInfos: IUdrcInfoDto[];
        /** List of technical links */
        TechnicalLinks: TechnicalProductDto[];
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Movable subscription. */
    interface IMovableSubscriptionDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Source identifier. */
        SourceId: number;
        /** Target identifier. */
        TargetId: number;
        /** List of movable technical products. */
        movableTechnicalProducts: IMovableTechnicalProductDto[];
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Dto of a MovableTechnicalProduct */
    interface IMovableTechnicalProductDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets SourceName of the movable technical product. */
        SourceName: string;
        /** Gets or sets TargetName of the movable technical product. */
        TargetName: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** DTO header of a subscription order item. */
    interface ISubscriptionOrderItemHeaderDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Processing status of an OrderItem. */
        OrderItemStatus: string;
        /** This describes the action held by the Subscription OrderItem */
        SubscriptionAction: string;
        /** Gets or sets the userName of the billing account linked to the subscription order item. */
        BillingAccountUserName: string;
        /** Gets or sets the offerName of the subscription linked to the subscription order item. */
        OfferName: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    import BillingAccountDto = bluesky.core.model.account.IBillingAccountDto;
    /** DTO header of a subscription order item. */
    interface ISubscriptionOrderItemDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Processing status of an OrderItem. */
        OrderItemStatus: string;
        /** This describes the action held by the Subscription OrderItem */
        SubscriptionAction: string;
        /** A subscription order item contains a BillingAccount */
        BillingAccount: BillingAccountDto;
        /** A subscription order item contains a Subscription */
        Subscription: ICustomerOrderSubscriptionDto;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** DTO of a subscription subset order. */
    interface ISubscriptionSubsetOrderDto extends ISubsetOrderBaseDto {
        /** A subscription subset order is composed of at least one subscription order item. */
        subscriptionOrderItems: ISubscriptionOrderItemHeaderDto[];
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** UDRC information to handle UDRC values. */
    interface IUdrcInfoDto extends IResourceBase {
        /** Unit name. */
        PriceableItemId: number;
        /** Unit value. */
        UdrcValue: number;
    }
}

declare namespace bluesky.core.command.customerOrder {
    import ISendWelcomePackInformationDto = bluesky.core.model.customerOrder.ISendWelcomePackInformationDto;
    import IWelcomePackSendingStrategyDto = bluesky.core.model.customerOrder.IWelcomePackSendingStrategyDto;
    /** Command to create a send welcome packs order. */
    interface ICreateSendWelcomePacksCustomerOrderCommand extends IBaseCreateOrderCommand {
        /** For each welcome pack to send, provide information about the user and the subscription. */
        SendWelcomePackInformationList: ISendWelcomePackInformationDto[];
        /** Welcome pack sending strategy. */
        WelcomePackSendingStrategy?: IWelcomePackSendingStrategyDto;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Information needed to send a welcome pack. */
    interface ISendWelcomePackInformationDto {
        /** Identifier of the group subscription in MetraNet. */
        GroupSubscriptionId: number;
        /** Identifiers of the user for which the welcome pack will be sent. */
        UserUid: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Dto of WelcomePackInfo.
    * It contains information to send to the Template Generator for the user recipient strategy. */
    interface IWelcomePackInfoDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** The email of the target Technical Admin Contact. */
        AdminEmail: string;
        /** Language of the target Technical Admin Contact. */
        AdminLanguage: string;
        /** The CountryName of the target Technical Admin Contact. */
        AdminCountryName: string;
        /** The TimeZone of the target Technical Admin Contact. */
        AdminTimeZone: string;
        /** Priority of a Welcome Pack. */
        WelcomePackPriority: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Welcome pack sending strategy. */
    interface IWelcomePackSendingStrategyDto {
        /** Welcome Recipient Strategy :- to user (ToUser),- to technical admin ToTechnicalAdmin. */
        WelcomePackRecipientStrategy: string;
        /** Welcome Pack sending mode :- sent instantly (Instantly),- not sent (NoSending),- sent in the future, in a specific date (InTheFuture). */
        WelcomePackSendMode: string;
        /** Date when the welcome pack will be send if the sending mode is inthefuture. */
        FutureSendDate?: Date;
        /** Admin user id to whom the welcome pack is sent if the recipient strategy is technical admin. */
        AdminUserUid: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** Movable user. */
    interface IMovableUserDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Payer user name. */
        PayerUserName: string;
        /** Source name. */
        SourceName: string;
        /** Target name. */
        TargetName: string;
        /** Target parent name. */
        TargetParentName: string;
        /** Gets or sets new currency */
        NewCurrency: string;
        /** List of movable accesses. */
        MovableAccesses: IMovableAccessDto[];
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** DTO header of a user order item. */
    interface IUserOrderItemHeaderDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Processing status of an OrderItem. */
        OrderItemStatus: string;
        /** This describes the action held by the user OrderItem */
        UserAction: string;
        /** Gets or sets the userName of the user linked to the user order item, if any. */
        UserName: string;
        /** Gets or sets the userName of the access linked to the user order item, if any. */
        AccessUserName: string;
        /** Gets or sets the offerName of the subscription linked to the user order item, if any. */
        OfferName: string;
    }
}

declare namespace bluesky.core.model.customerOrder {
    import UserAccountDto = bluesky.core.model.account.IUserAccountDto;
    import AccessAccountDto = bluesky.core.model.account.IAccessAccountDto;
    /** DTO of a user order item. */
    interface IUserOrderItemDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Processing status of an OrderItem. */
        OrderItemStatus: string;
        /** This describes the action held by the User OrderItem */
        UserAction: string;
        /** UserAccount linked to the User Order Item.The UserAccount represents individual (person) or inanimate entity that receives and consumes services provided by Arkadin. */
        UserAccount: UserAccountDto;
        /** AccessAccount linked to the User Order Item.The AccessAccount is the customer hierarchy node that represents the instance of a subscribed product for a given user (i.e. the use  of a particular Arkadin or Arkadin's supplier resource). */
        AccessAccount: AccessAccountDto;
        /** Subscription linked to the User Order Item.A subscription is product offering sold to a customer and applied to a single subscriber node. */
        Subscription: ICustomerOrderSubscriptionDto;
        /** Additional information on a User used for audio and web accesses creation. */
        AccessInfo: IAccessInfoDto;
        /** Additional information for Send Welcome Pack. */
        WelcomePackInfo: IWelcomePackInfoDto;
        /** List of custom options. */
        CustomOptions: ICustomOptionDto[];
        /** List of movable users. */
        MovableUsers: IMovableUserDto[];
        /** List of participants. */
        Participants: IParticipantDto[];
    }
}

declare namespace bluesky.core.model.customerOrder {
    /** DTO of a user subset order. */
    interface IUserSubsetOrderDto extends ISubsetOrderBaseDto {
        /** A user subset order is composed of at least one user order item. */
        UserOrderItems: IUserOrderItemHeaderDto[];
        /** List of movable subscriptions */
        MovableSubscriptions: IMovableSubscriptionDto[];
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of an access.The AccessAccount is the customer hierarchy node that represents the instance of asubscribed product for a given user (i.e. the use  of a particular Arkadin orArkadin's supplier resource).It holds access identifier that allows connection, CDR guidance.It is linked to a unique service platform.It represents service end point - access to Arkadin conferencing infrastructure,provisioned in the network. */
    interface IAccessAccountDto extends IAccountDto {
        /** Gets or sets the Alias of the access. */
        Alias: string;
        /** The AccessAccount view contains attributes storing technical information for each UserAccount's AccessAccount instance. */
        AccessView: IAccessViewDto;
    }
}

declare namespace bluesky.core.model.account {
    /** Header DTO of an accountTODO MGA : inheriting from OrderManagementEntityDto is a hack, as we do not have custom DTOs for Accounts comming from OrderManagement DB. TOFIX when we don't have these entities saved in OM. */
    interface IAccountHeaderDto extends IOrderManagementEntityDto {
        /** Gets or sets the user name assigned to the account.TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        UserName: string;
        /** Gets or sets the account type. */
        AccountType: string;
        /** Gets or sets the customer node name. */
        CustomerNodeName: string;
        /** TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        PayerUserName: string;
        /** TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        LogoUserName: string;
        /** The status of the account.
            TODO MGA: this should be migrated to an AccountStatusEnum type both here & server-side (enum value serialization works in TS) */
        AccountStatus: string;
    }
}

declare namespace bluesky.core.model.account {
    interface IAccountHierarchyTreeNodeDto {
        Uid: string;
        UserName: string;
        AccountType: string;
        IsOnline: boolean;
        Children: Array<IAccountHierarchyTreeNodeDto>;
    }
}

declare namespace bluesky.core.model.account {
    enum AccountStatusEnum {
        Undefined = 0,
        PendingActiveApproval = 1,
        Active = 2,
        Suspended = 3,
        PendingFinalBill = 4,
        Closed = 5,
        Archived = 6,
    }
}

declare namespace bluesky.core.model.account {
    enum AccountTypeEnum {
        None = 0,
        Logo = 1,
        LocalLogo = 2,
        LegalEntity = 3,
        ReportingGroup1 = 4,
        ReportingGroup2 = 5,
        BillingAccount = 6,
        Group = 7,
        PrimaryGroup = 8,
        User = 9,
        Access = 10,
    }
}

declare namespace bluesky.core.model.account {
    /** DTO of an account.Base class holding MetraNet core account properties and identifiers.TODO MGA : inheriting from OrderManagementEntityDto is a hack, as we do not have custom DTOs for Accounts comming from OrderManagement DB. TOFIX when we don't have these entities saved in OM. */
    interface IAccountDto extends IOrderManagementEntityDto {
        /** Gets or sets the account type. */
        AccountType: string;
        /** Gets or sets the MetraNet identifier of the account. */
        MNId?: number;
        /** Gets or sets the user name assigned to the account.TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        UserName: string;
        /** Gets or sets the parent account.TODO MGA : to be renamed to AncestorAccountUid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        AncestorAccountUserName: string;
        /** Gets or sets the account status value.
            TODO MGA: this should be migrated to an AccountStatusEnum type both here & server-side (enum value serialization works in TS) */
        AccountStatus: string;
        /** Gets or sets the payer username.TODO MGA : to be renamed to PayerUid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        PayerUserName: string;
        /** Gets or sets the start date of the account. */
        AccountStartDate: Date;
        /** Gets or sets the end date of the account. */
        AccountEndDate?: Date;
        /** Gets or sets the start date of the association with the current parent account (ancestor). */
        HierarchyStartDate?: Date;
        /** Gets or sets the end date of the association with the current parent account (ancestor). */
        HierarchyEndDate?: Date;
        /** Gets or sets the password used by the account to access MetraView site. */
        Password: string;
        /** Gets or sets the start date of the payment redirection with the current payer account. */
        PaymentStartDate?: Date;
        /** Gets or sets the end date of the payment redirection with the current payer account. */
        PaymentEndDate?: Date;
        /** Gets or sets the Internal view contains the Internal account information.It is required for all types of accounts. */
        InternalView: account.IInternalViewDto;
        /** Gets or sets the Common view gathers attributes shared by all of the Accounts. */
        CommonView: account.ICommonViewDto;
    }
}

declare namespace bluesky.core.command.account {
    /** Command to authenticate a user account in BlueSky. */
    interface IAuthenticateUserAccountCommand {
        /** User account's identifier in MetraNet. */
        UserUid: string;
        /** User account's password, used by the user to access MetraView. */
        Password: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a billing account.The Billing account represents the billing point in the hierarchy.This is the account which collects all charges from itself and all sub-accounts.Billing account defines invoice currency, billing frequency and receives theinvoice.It is linked to an Arkadin subsidiary (this allows to identify the uniqueNavision instance that support the Billing account).By default the Billing account is the entity that support the subscriptions(exception for Event, trial accounts ...).Please note that in the Wholesaler case, the Billing account is a dummy(unknown by Navision, no invoice sent).Please note that in the trial account case, the Billing account is a dummy (forinternal use only). */
    interface IBillingAccountDto extends account.IAccountDto {
        /** Billing account view */
        BillingView: account.IBillingViewDto;
        /** The Contact view of type Bill-to contains the contact and address of a billable entity. */
        BillToView: account.IBillToContactViewDto;
        /** The  Contact view of type Ship-to contains the contact and address where the invoice is sent to. */
        ShipToView: account.IContactViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: account.ITechnicalAdminContactViewDto;
        /** The Contact view of type invoice carbon copy contains the additional contacts who will receive the invoice. */
        InvoiceCarbonCopyRecipients: account.IContactViewDto[];
        /** The Contact view of type welcome pack carbon copy contains the additional contacts who will receive the welcome packs. */
        WelcomePackCarbonCopyRecipients: account.IContactViewDto[];
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a group.The Group is an optional node in the customer hierarchy.It is used for invoicing structure and reporting purposes. */
    interface IGroupDto extends IAccountDto {
        /** The Primary Group view contains attributes specific to Group and Primary Group account. These attributes include specifics of physical platform to which children accounts (Users and their Accesses) were provisioned. */
        PrimaryGroupView: IPrimaryGroupViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: ITechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a Legal Entity.The Legal Entity is a node acting as a Payer template for the Billing account. */
    interface ILegalEntityDto extends IAccountDto {
        /** The Contact view of type Bill-to contains the contact and address of a billable entity. */
        BillToView: IBillToContactViewDto;
        /** The Legal Entity view contains attributes related to Legal Entity setup. */
        LegalEntityView: ILegalEntityViewDto;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a local logo.The Local Logo is an optional node in the customer hierarchy, used for groupingor representing subsidiaries or geolocations of the Customer organization. */
    interface ILocalLogoDto extends IAccountDto {
        /** The Local Logo view contains attributes related to Local Logo setup. */
        LocalLogoView: ILocalLogoViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: ITechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a logo.A Logo represents the Customer which is in relation with Arkadin or Arkadin'spartner. It's the root of any customer hierarchy.In the case of WholeSale the Logo is a dummy node (Arkadin IS hasn't got thecomplete view of the wholesaler's customer).In the case of trial account the Logo is a dummy node.A logo is associated to a Arkadin subsidiary (or to Arkadin SAS). */
    interface ILogoDto extends IAccountDto {
        /** Logo view */
        LogoView: ILogoViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: ITechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.model.account {
    /** Management Subsidiaries are used in the Platform Selection algorithms. */
    interface IManagementSubsidiaryDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Flag to identify the Management Subsidiary at Logo level. */
        IsMain: boolean;
        /** Subsidiary code. */
        SubsidiaryCode: string;
        /** Name of the management subsidiary to be used for AudioClassicplatform selection. */
        SubsidiaryName: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a primary group.The Primary group is a mandatory group of Users.It represents Customer's organizational physical Site, Department, Office orLocation or used purely for grouping purposes.The Primary group is linked to all services platforms used by the users. */
    interface IPrimaryGroupDto extends IAccountDto {
        /** The Primary Group view contains attributes specific to Group and Primary Group account. These attributes include specifics of physical platform to which children accounts (Users and their Accesses) were provisioned. */
        PrimaryGroupView: IPrimaryGroupViewDto;
        /** Dispatching viewContains attributes related to account segmentation and dispatching. */
        DispatchingView: IDispatchingViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: ITechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a reporting group 1.The Reporting Group has no functional requirement for billing, rating,...It is only used for Reporting issues. */
    interface IReportingGroup1Dto extends IAccountDto {
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a reporting group 2.The Reporting Group has no functional requirement for billing, rating,...It is only used for Reporting issues. */
    interface IReportingGroup2Dto extends IAccountDto {
    }
}

declare namespace bluesky.core.command.account {
    /** Command to search UserAccounts in BlueSky. */
    interface ISearchUserAccountCommand extends IBasePaginatedSearchCommand {
        LogoUid?: string;
        Email?: string;
        CustomerNodeName?: string;
        PrimaryGroupUid?: string;
        BillingAccountUid?: string;
        SelfCareRole?: string;
        AccountStatusList?: string;
        LastName?: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Header DTO of a UserAccount. */
    interface IUserAccountHeaderDto extends IAccountHeaderDto {
        Email: string;
        Login: string;
        SelfCareRelation: string;
        SelfCareRole: string;
        HasExtendedScope: boolean;
    }
}

declare namespace bluesky.core.model.account {
    /** DTO of a user.The UserAccount represents individual (person) or inanimate entity that that receivesand consumes services provided by Arkadin. */
    interface IUserAccountDto extends IAccountDto {
        /** The UserAccount-Contact view contains the contact and address of a physical user of Arkadin services. */
        UserContactView: IUserContactViewDto;
        /** The UserAccount view contains attributes related to UserAccount setup. */
        UserView: IUserViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: ITechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of an access view.Contains technical information for each user's access instance. */
    interface IAccessViewDto extends IResourceBase {
        /** Gets or sets the login for Web products. */
        AccessLogin: string;
        /** Gets or sets the password for credential requirements on service platform (= pin moderator). */
        AccessPassword: string;
        /** Gets or sets AccessAccount personal information numberUsed by user to access the service. */
        AudioModeratorPIN: string;
        /** Gets or sets the Personal Information Number for the audio participant. */
        AudioParticipantPIN: string;
        /** Gets or sets the information provided by the customer at creation date. */
        BillingCode: string;
        /** Gets or sets the billing reference, additional information at access level to be displayed in the invoice. */
        BillingRef: string;
        /** Gets or sets the comment. */
        Comment: string;
        /** Gets or sets the external conference reference. */
        ExternalConferenceReference: string;
        /** Gets or sets the conference reference external name for audio. */
        NetworkElementAccessName: string;
        /** Gets or sets the conference reference for audio access, microsite and login for WebEx. */
        NetworkElementAccessReference: string;
        /** Gets or sets the bridge number (if audio), WebEx platform, ANW platform. */
        NetworkElementReference: string;
        /** Gets or sets the technical environment. */
        NetworkElementTechnicalEnvironment: string;
        /** Gets or sets the Topic. */
        Topic: string;
        /** Gets or sets the access product name. */
        AccessProductName: string;
        /** Gets the access category. */
        AccessCategory: string;
        /** Gets the access type. */
        AccessType: string;
        /** Gets the conference type. */
        ConferenceType: string;
    }
}

declare namespace bluesky.core.model.account {
    interface IBillToContactViewDto extends account.IContactViewDto {
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a billing view.Contains informations related to a billing account and financial processing. */
    interface IBillingViewDto extends IResourceBase {
        /** Gets or sets the Arkadin bank account details (defined in MT SDD). */
        ArkadinBankAccountDetailsId: string;
        /** Gets or sets a value indicating whether the related billing account is a GSA account with a unique central invoice. */
        IsCentralBilling: boolean;
        /** Gets or sets a value indicating whether a cover page is required. */
        IsCoverPageRequired: boolean;
        /** Gets or sets a value indicating whether a customer purchase order is mandatory. */
        IsPurchaseOrderMandatory: boolean;
        /** Gets or sets the username of a legal entity node in the same account hierarchy (children of the same Logo). */
        MasterLegalEntityUserName: string;
        /** Gets or sets the expiry date for the customer purchase order. */
        PurchaseOrderExpiryDate?: Date;
        /** Gets or sets the customer purchase order reference. */
        PurchaseOrderReference: string;
        /** Gets or sets the registration number in the country of the account (i.e. SIRET/RCS numbers in France). */
        RegistrationNumber: string;
        /** Gets or sets the value of the corresponding opportunity file (SFDC externalID). */
        SalesForceId: string;
        /** Gets or sets the billing subsidiary code. */
        SubBillingCode: string;
        /** Invoice minimum amount. */
        InvoiceMinimumAmount: number;
        /** Indicates if the general admin fee must be applied. */
        GeneralAdminFeeApplied: boolean;
        /** Indicates if the paper based invoice fee must be applied. */
        PaperBasedInvoiceFeeApplied: boolean;
        /** Gets the subsidiary managing the invoice. */
        BillingSubsidiary: string;
        /** Gets the Collaboration Usage Details template. */
        CUDTemplate: string;
        /** Gets an Event Usage Details template. */
        EUDTemplate: string;
        /** Gets the invoice delivery method. */
        InvoiceDeliveryMethod: string;
        /** Gets the invoice language. */
        InvoiceLanguage: string;
        /** Gets the invoice output format. */
        InvoiceOutputFormat: string;
        /** Gets the legal entity inheritance. */
        LegalEntityInheritance: string;
        /** Gets the subsidiary managing thebilling account if necessary from a provisioning point of view. */
        ManagementSubsidiary: string;
        /** Gets the navision instance where this customer billing data is reported to. */
        NavisionInstance: string;
        /** Gets the payment term code. */
        PaymentTermCode: string;
        /** Gets the print house in charge of invoice generation. */
        PrintHouse: string;
        /** Gets the subsidiary managing the revenue fo the current billing account if different from the billing subsidiary. */
        RevenueSubsidiary: string;
        /** IST (Invoice Suppression Threshold) IMA (Invoice Minimum Amount) information. */
        IstimaInfo: account.IIstimaInfoDto;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a common view.Contains attributes shared by all of the accounts. */
    interface ICommonViewDto extends IResourceBase {
        /** Gets or sets the comment to be manually filled by CSR, SalesAdmin... to provide whatever additional information required. */
        Comment: string;
        /** Gets or sets the requester to be manually filled by CSR, SalesAdmin... to provide whatever additional information required. */
        StatusRequestedBy: string;
        /** Gets or sets the user who created the account. */
        CreatedBy: string;
        /** Gets or sets the account creation date. */
        CreatedDate: Date;
        /** Gets or sets the customer node name. */
        CustomerNodeName: string;
        /** Gets or sets the user name of the logo present in the account hierarchy. */
        LogoUserName: string;
        /** Gets or sets the user who last modified the account. */
        ModifiedBy: string;
        /** Gets or sets the account last modification date. */
        ModifiedDate: Date;
        /** Gets or sets the assigned sales account. */
        SalesAccountAssigned: string;
        /** Gets or sets the display name of the assigned sales account. */
        SalesAccountDisplayName: string;
        /** Gets or sets the communication Opt-in. Used to sign-up to receive email notifications. */
        CommunicationOptIn?: boolean;
        /** Gets or sets the partner external ID. */
        PartnerExternalId: string;
        /** Gets theorder status. */
        OrderStatus: string;
        /** Gets the effective management subsidiary. */
        EffectiveManagementSubsidiary: string;
        /** Indicates if this customer belongs to the online segment. */
        IsOnlineCustomer?: boolean;
        /** The BlueSky userName (uid) of the silo this customer belongs to. */
        SiloUserName?: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a contact view.Contains contact and address information. */
    interface IContactViewDto extends IResourceBase {
        /** Gets or sets the name that may be filled in for invoicing further purposes. */
        Name1: string;
        /** Gets or sets the additionnal name that may be filled in for invoicing further purposes. */
        Name2: string;
        /** Gets or sets the address first line. */
        Address1: string;
        /** Gets or sets the address second line. */
        Address2: string;
        /** Gets or sets the address third line. */
        Address3: string;
        /** Gets or sets the city or town. */
        City: string;
        /** Gets or sets the the country code. */
        CountryCode: string;
        /** Gets or sets the e-mail address. */
        Email: string;
        /** Gets or sets the fax number. */
        FacsimileTelephoneNumber: string;
        /** Gets or sets the first name. */
        FirstName: string;
        /** Gets or sets the last name. */
        LastName: string;
        /** Gets or sets the local address first line. */
        LocalAddress1: string;
        /** Gets or sets the local address second line. */
        LocalAddress2: string;
        /** Gets or sets the local address third line. */
        LocalAddress3: string;
        /** Gets or sets the local city or town. */
        LocalCity: string;
        /** Gets or sets the local first name. */
        LocalFirstName: string;
        /** Gets or sets the local last name. */
        LocalLastName: string;
        /** Gets or sets the local middle initial. */
        LocalMiddleInitial: string;
        /** Gets or sets the local salutation. */
        LocalSalutation: string;
        /** Gets or sets the local state or province. */
        LocalState: string;
        /** Gets or sets the local county. */
        LocalCounty: string;
        /** Gets or sets the middle initial. */
        MiddleInitial: string;
        /** Gets or sets the telephone number. */
        PhoneNumber: string;
        /** Gets or sets the salutation.No academic information (Professor,...), no job title captured. */
        Salutation: string;
        /** Gets or sets the state or province. */
        State: string;
        /** Gets or sets the zip or postal code. */
        Zip: string;
        /** Gets or sets the company. */
        Company: string;
        /** Gets or sets the county: a region which has its own local government. */
        County: string;
        /** Gets the language. */
        CommunicationLanguage: string;
        /** Gets the contact type. */
        ContactType: string;
        /** Gets the country name. */
        CountryName: string;
        /** Gets the time zone identifier. */
        TimeZoneId: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a Dispatching view.Contains attributes related to account segmentation and dispatching. */
    interface IDispatchingViewDto extends IResourceBase {
        /** Gets or sets the cost center. */
        CostCenter: string;
        /** Gets or sets the first free criterion. */
        Dispatch1: string;
        /** Gets or sets the second free criterion. */
        Dispatch2: string;
        /** Gets the branch country. */
        BranchCountry: string;
        /** Gets the branch department. */
        BranchDepartment: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of an internal view.Contains the internal account information. */
    interface IInternalViewDto extends IResourceBase {
        /** Gets or sets a value indicating whether the is billable. */
        IsBillable: boolean;
        /** Gets or sets the name of the division associated with the account. */
        Division: string;
        /** Gets or sets a value indicating whether the  is a folder. */
        IsFolder?: boolean;
        /** Gets or sets the answer to the security question. */
        SecurityAnswer: string;
        /** Gets or sets the status reason text. */
        StatusReasonOther: string;
        /** Gets or sets a value indicating whether the  is tax exempt. */
        IsTaxExempt?: boolean;
        /** Gets or sets the tax exempt identifier. */
        TaxExemptId: string;
        /** Gets or sets the tax exemption start date. */
        TaxExemptStartDate?: Date;
        /** Gets or sets the tax exemption end date. */
        TaxExemptEndDate?: Date;
        /** Gets or sets the tax service address Pcode. */
        TaxServiceAddressPcode?: number;
        /** Gets or sets the additional tax information */
        AdditionalTaxInformation: string;
        /** Gets or sets the Additional tax exemption. */
        AdditionalTax?: boolean;
        /** Gets the currency. */
        Currency: string;
        /** Gets the invoice delivery method. */
        InvoiceDeliveryMethod: string;
        /** Gets the language. */
        Language: string;
        /** Gets the MetraTax country eligiblity. */
        MetraTaxCountryEligibility: string;
        /** Gets the MetraTax country zone. */
        MetraTaxCountryZone: string;
        /** Gets the MetraTax override band. */
        MetraTaxOverrideBand: string;
        /** Gets the payment method. */
        PaymentMethod: string;
        /** Gets the security question. */
        SecurityQuestion: string;
        /** Gets the status reason. */
        StatusReason: string;
        /** Gets the tax vendor. */
        TaxVendor: string;
        /** Gets the time zone identifier. */
        TimeZoneId: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of IST IMA Information.ISTIMA information.IST: Invoice Suppression Threshold.IMA: Invoice Minimum Amount. */
    interface IIstimaInfoDto extends IResourceBase {
        /** Product offering MetraNet identifier. */
        ProductOfferingMnId: number;
        /** Invoice Suppression Threshold from. */
        InvoiceSuppressionThresholdFrom?: number;
        /** Invoice Suppression Threshold to. */
        InvoiceSuppressionThresholdTo?: number;
        /** subscription identifier. */
        SubscriptionId: number;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a legal entity view.The Legal Entity view contains attributes related to Legal Entity setup. */
    interface ILegalEntityViewDto extends IResourceBase {
        /** Gets or sets the company registration number to National Commercial Board (ex: SIREN in France). */
        CommercialRegistrationNumber: string;
        /** Gets or sets the equivalent to EU tax registration number. */
        TaxRegistrationNumber: string;
        /** Gets or sets the billing subsidiary code. */
        SubBillingCode: string;
        /** Gets the billing currency. */
        BillingCurrency: string;
        /** Gets the subsidiary managing the billing subsidiaries of billing accounts (OE inheritance mechanism). */
        BillingSubsidiary: string;
        /** Gets the payment term. */
        PaymentTerm: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a local logo view.Contains attributes related to the local logo setup. */
    interface ILocalLogoViewDto extends IResourceBase {
        /** Gets the subsidiary managing the local Logo. */
        ManagementSubsidiary: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a logo view.Contains attributes related to the logo setup. */
    interface ILogoViewDto extends IResourceBase {
        /** Gets or sets a value indicating whether this logo is a GSA account with a unique central invoice. */
        IsCentralBilling: boolean;
        /** Gets the subsidiary managing the logo. */
        ManagementSubsidiary: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Contains attributes related to the group and primary group. */
    interface IPrimaryGroupViewDto extends IResourceBase {
        /** Gets or sets a value indicating whether the request flow validation is activated. */
        IsRqstFlowValidationActivated?: boolean;
        /** Gets the subsidiary managing the group or primary group. */
        ManagementSubsidiary: string;
    }
}

declare namespace bluesky.core.model.account {
    interface ITechnicalAdminContactViewDto extends account.IContactViewDto {
    }
}

declare namespace bluesky.core.model.account {
    interface IUserContactViewDto extends account.IContactViewDto {
        /** Gets or sets the external language, needed by the TI and the Provisioning. */
        ExternalLanguage: string;
        /** Gets or sets the external timezone, needed by the TI and the Provisioning. */
        ExternalTimeZone: string;
    }
}

declare namespace bluesky.core.model.account {
    /** Dto of a user view.Contains attributes related to the user setup. */
    interface IUserViewDto extends IResourceBase {
        /** Gets or sets the information provided by the customer at creation date. */
        BillingCode: string;
        /** Gets or sets a flag indicating whether the user is a moderator. */
        IsModerator: boolean;
        /** Gets or sets the email of the user (Collab). */
        Login: string;
        /** Gets or sets the value of the corresponding opportunity file (SFDC externalID) in case of a TRIAL user/access creation only. */
        SalesForceId: string;
        /** Gets or sets the user first dispatch.Custom field used by the customer and displayed in One Portal (1st field). */
        UserDispatch1: string;
        /** Gets or sets user second dispatch.Custom field used by the customer and displayed in One Portal (2nd field). */
        UserDispatch2: string;
        /** Gets or sets the email list to be sent as CC. */
        WelcomePackCarbonCopyRecipients: string[];
        /** Billing reference. */
        BillingRef: string;
        /** Gets the Selfcare admin level.Defines the hierarchy node under which the user is admin: Logo, Local Logo, Billing account, Primary Group, and None for simple users. */
        SelfCareRelation: string;
        /** Gets the Selfcare role.Defines which role should have the user in the Selcare application (Lounge).- User can manage his Meetings and his Profile.- Admin have same rights and can manage Users (integrated self-provisioning options to create, manage and delete accounts). */
        SelfCareRole: string;
        /** If specified, gets or sets the list of the identifiers of the accounts for which the user has admin privileges. */
        AdditionalAdministrationLevels: string[];
    }
}

declare namespace bluesky.core.command.salesforce {
    import SegmentTypeEnum = bluesky.core.model.salesforce.SegmentTypeEnum;
    /**
     * Command to change the segment of an sfdc account.
     */
    interface IChangeAccountSegmentTypeCommand {
        Id: string;
        SegmentType: SegmentTypeEnum;
    }
}

declare namespace bluesky.core.model.salesforce {
    /**
     * Dto of a sales force account header.
     * TODO MGA: should be paginated in the long term (see SFDC DAL)
     * TODO MGA: should be ligther vs. sf account dto
     */
    interface ISalesForceAccountHeaderDto extends IResourceBase {
        Id: string;
        Name: string;
        Segmentation: string;
        /** TODO MGA: ask CAPI to update to use Enum  */
        SegmentType: string;
        CountryName: IMetraNetEnumerationDto;
        CustomerSize: IMetraNetEnumerationDto;
    }
}

declare namespace bluesky.core.model.salesforce {
    /**
     * Dto of a sales force account.
     * TODO MGA: should be paginated in the long term (see SFDC DAL)
     */
    interface ISalesForceAccountDto extends IResourceBase {
        Id: string;
        Name: string;
        CountryName: IMetraNetEnumerationDto;
        Segmentation: string;
        /** TODO MGA: ask CAPI to update to use Enum  */
        SegmentType: string;
        CustomerSize: IMetraNetEnumerationDto;
    }
}

declare namespace bluesky.core.command.salesforce {
    /**
     * Search parameter used to retrieve a list of sales force account.
     */
    interface ISearchSalesForceAccountCommand extends IBasePaginatedSearchCommand {
        Name: string;
    }
}

declare namespace bluesky.core.model.salesforce {
    /**
     * List of supported segment types for a SalesForce Account.
     */
    enum SegmentTypeEnum {
        Premium = 0,
        OnLine = 1,
    }
}
