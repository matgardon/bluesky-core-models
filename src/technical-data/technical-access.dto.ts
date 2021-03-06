﻿ namespace bluesky.core.model.technicalData {

    import UserAccountHeaderDto = account.IUserAccountHeaderDto;

    export interface ITechnicalAccessDto extends IOrderManagementEntityDto {
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
