namespace bluesky.core.model.emailTemplate {
    /**
     * TODO MGA: which fields are mandatory and which aren't ? in hub, we only instantiate a few of them at first.
     */
    export interface IWelcomePackTemplateDto extends IResourceBase {
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
