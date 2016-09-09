declare namespace bluesky.core.models.auth {
    interface AjaxClientEndpointConfigurationDto {
        endpointBaseURL: string;
        endpointSuffix: string;
        authToken: string;
        authTokenValidityEndDate: Date;
    }
}

declare namespace bluesky.core.models.auth {
    interface BlueskyAjaxClientConfigurationDto {
        coreApiConfiguration: AjaxClientEndpointConfigurationDto;
        marketingApiConfiguration: AjaxClientEndpointConfigurationDto;
        selfcareApiConfiguration: AjaxClientEndpointConfigurationDto;
        quoteWizardConfiguration: AjaxClientEndpointConfigurationDto;
        orderEntryConfiguration: AjaxClientEndpointConfigurationDto;
        orderTrackingConfiguration: AjaxClientEndpointConfigurationDto;
        technicalInventoryConfiguration: AjaxClientEndpointConfigurationDto;
        metranetConfiguration: AjaxClientEndpointConfigurationDto;
        salesforceConfiguration: AjaxClientEndpointConfigurationDto;
        templateGeneratorConfiguration: AjaxClientEndpointConfigurationDto;
        defaultUserRole: string;
    }
}

declare namespace bluesky.core.models.systemInfo {
    /** DTO of the API version. */
    interface ApiVersionDto extends ResourceBase {
        /** Version's number. */
        version: string;
    }
}

declare namespace bluesky.core.models.systemInfo {
    /** DTO of the Order Management Database Version. */
    interface DatabaseVersionDto {
        /** Gets or sets version of the [OrderManagement] Database at a current date. */
        version: string;
        /** Gets or sets date of the specified version of the [OrderManagement] Database. */
        startDate: Date;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** AccessAccount characteristics */
    interface AccessCharacteristicDto extends OrderManagementEntityDto {
        /** Gets or sets the name of the characteristic. */
        name: string;
        /** Gets or sets the value of the characteristic. */
        value: string;
        /** Technical option specification name. */
        technicalOptionSpecName: string;
        /** Business Value of the access characteristic. */
        businessValue: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** This entity contains the information to configure, modify an access audio conference for a user. */
    interface AudioAccessDto extends TechnicalAccessDto {
        /** Gets or sets Audio access type coming from the TI : Used values: MeetMe or Meet Me Secure.Additional values: Attended, FlexFlow, ManagementAlert, MeetMeDirect, MeetMeOperatorAssisted, Playback, TollFree.TODO ABE : Unused, duplicated with ConferenceType. To be removed from model (Domain, DAL OM...) */
        accessType: string;
        /** Gets or sets Extension */
        extension: string;
        /** Gets or sets Access Personal Information Number (used by User to access the service) */
        moderatorPIN: string;
        /** Gets or sets Access Personal Information Number (used by audio participant to access the service) */
        participantPIN: string;
        /** List of participants. */
        participants: ParticipantDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Integrated audio access */
    interface BaseIntegratedAudioAccessDto extends AudioAccessDto {
        /** Gets or sets AudioIntegrationIndex */
        audioIntegrationIndex: number;
        /** Gets or sets Web access identifier. */
        webAccessId: number;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** DTO of a branding profile.A branding profile contains the technical data about a welcome pack email template. */
    interface BrandingProfileDto extends ResourceBase {
        /** Gets or sets the identifier of the branding profile. */
        uid: string;
        /** Gets or sets the name of the branding profile. */
        name: string;
        /** Gets or sets the level of the branding profile. */
        level: string;
        /** Gets or sets the description of the branding profile. */
        description: string;
        /** Gets or sets the version of the branding profile. */
        version: number;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** DDIs (Direct Dial In) correspond to external conference number which permits tothe customer to access an audio conference. */
    interface DirectDialInDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Gets or sets Unique identifier of a DDI */
        internationalDirectDialIn: string;
        /** Identifies the carrier of a DDI */
        carrier: string;
        /** Identifies the City of a DDI */
        city: string;
        /** Identifies the Country of a DDI */
        country: string;
        /** Description of a DDI */
        description: string;
        /** Identifies the spoken language of a DDI */
        language: string;
        /** Displayed Number of a DDI */
        presentedVisualDirectDialIn: string;
        /** Identifies the Reference Order of a DDI */
        referenceOrder: string;
        /** Server address of the bridge AMG on which a DDI is provisioned */
        aMGAddress: string;
        /** Server port of the bridge AMG on which a DDI is provisioned */
        aMGPort: number;
        /** Identifies the DDI country in ISO 3166-2 format */
        isoCountryCode: string;
        /** Regional area code of the visual DDI */
        telephoneAreaCode: string;
        /** Telephone Country Code */
        telephoneCountryCode: string;
        /** Welcome Message */
        welcomeMessage: string;
        /** Waiting Music */
        waitingMusic: string;
        /** Flag indicating whether the DDI is dedicated.True if the field Role is equal to Dedicated. False if Role is equal to Shared. */
        isDedicated: boolean;
        /** Flag indicating whether the DDI is branded. */
        isBranded: boolean;
        /** When a DDI is returned in the list of access' DDIs, this flag indicates if the DDI is chosen by the Technical Inventory as the priorized one for a given type and a given usage.The Technical Inventory chooses a DDI based on its role, the user's primary group and country, and the service platform's country. */
        isLocal: boolean;
        /** Gets or sets Required action on DDI */
        directDialInAction: string;
        /** Gets or sets Role of the DDI */
        directDialInRole: string;
        /** Type of conference that is assigned to the DDI */
        conferenceType: string;
        /** Booking status of a DDI */
        status: string;
        /** Type of the DDI */
        directDialInType: string;
        /** List of TerminatingNumbers */
        terminatingNumbers: TerminatingNumberDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** This entity contains the information needed to configure, modify an access generic conference for a user. */
    interface GenericAccessDto extends TechnicalAccessDto {
        /** Login to access the generic conference. */
        login: string;
        /** Password to access to the generic conference. */
        password: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Integrated audio access */
    interface IntegratedAudioAccessDto extends BaseIntegratedAudioAccessDto {
    }
}

declare namespace bluesky.core.models.technicalData {
    /** A participant of a conference is related to a meet me secure access. */
    interface ParticipantDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Identifier of the participant in the technical inventory. */
        technicalParticipantId: string;
        /** Identifier of the participant in the service platform. */
        platformParticipantId: string;
        /** Participant name. */
        name: string;
        /** Meet me secure code, generated by the technical inventory or by the service platform. */
        meetMeSecureCode: string;
        /** Participant email. */
        email: string;
        /** Participant phone number. */
        phoneNumber: string;
        /** Additional comments. */
        comments: string;
        /** Gets or sets the Action for a participant: add, update or delete. */
        action: string;
        /** Gets or sets the Participant type. A participant can have a Moderator or Participant type. */
        participantType: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    import ManagementSubsidiaryDto = models.account.ManagementSubsidiaryDto;
    /** Domain is the parent class and should be abstract for export interface purpose.A Domain corresponds to a technical environment set up for a Sales Channel /Subsidiary, on which the customer will be provisioned: it is hosted byone/several Service Platforms, uses subset of logical resources which can bespecifically branded, and defines a default set of options. */
    interface ServicePlatformDomainDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Gets or sets the Unique name of the Domain */
        name: string;
        /** Gets or sets the Domain's Sales Channel */
        salesChannel: string;
        /** Gets or sets Provisioning status of the Domain. */
        domainStatus: string;
        /** Gets or sets Domain specification name. */
        domainSpecName: string;
        /** List of service platforms */
        servicePlatforms: ServicePlatformDto[];
        /** List of management subsidiaries. */
        managementSubsidiaries: ManagementSubsidiaryDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Service Platform is a physical resource in Arkadin network. It can groupseveral Technical Elements.Different kinds of service platform can be created: AVAYA 6200, AVAYA 7000,SEP/VIPER, AnyWhere, WebEx, WebEx Gateway, Vidyo, COBRA. */
    interface ServicePlatformDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Gets or sets Name of the Service Platform. */
        name: string;
        /** Gets or sets Primary Bridge for an AccessAccount */
        isPrimary: boolean;
        /** Gets or sets Code of the language known by the Service Platform. */
        servicePlatformCode: string;
        /** Gets or sets Language name known by the Service Platform. */
        servicePlatformLanguage: string;
        /** Gets or sets Role. */
        role: string;
        /** Gets or sets Extention */
        extension: string;
        /** Subsidiary of the Service Platform */
        subsidiary: string;
        /** Service Platform country */
        country: string;
        /** Status of the service platform */
        status: string;
        /** Service platform specification */
        servicePlatformSpec: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** A Subdomain is instantiated for a given Customer when subscribing to aTechnicalProduct.It is dedicated to a Customer and inherits the characteristics of the parentDomain.It can be of type Audio, Web or Video. */
    interface SubdomainDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Gets or sets Unique name of the Subdomain */
        name: string;
        /** Gets or sets a flag indicates if the subdomain was created at the same time as the technical product.This value is returned by the Technical Inventory */
        isNew: boolean;
        /** Gets or sets Company identifier. */
        companyIdentifier: string;
        /** Description */
        description: string;
        /** Gets or sets DomainSpecName of the user */
        domainSpecName: string;
        /** Subdomain belongs to a domain. */
        servicePlatformDomain: ServicePlatformDomainDto;
        /** This resource describes microsites for WebEx. */
        url: UrlDto;
        /** DDIs list. */
        directDialIns: DirectDialInDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Dto header of a technical access **/
    interface TechnicalAccessHeaderDto extends OrderManagementEntityDto {
        /** Value of the technical access type enumeration. */
        technicalAccessType: string;
        /** Gets or sets Name of the AccessAccount, generated by TI. */
        accessName: string;
        /** Gets or sets Conference reference */
        conferenceRef: string;
        /** Gets or sets Domain name */
        domainName: string;
        /** Gets or sets a flag indicates if is one time event */
        isOneTime: boolean;
        /** Gets or sets Technical product name */
        technicalProductName: string;
        /** Gets or sets Technical product specification name */
        technicalProductSpecName: string;
        /** Gets or sets Technical access start date */
        startDate: Date;
        /** Gets or sets Technical access end date */
        endDate: Date;
        /** Gets or sets User reference. */
        userRef: string;
        /** Gets or sets Billing code. */
        billingCode: string;
        /** Gets or sets a flag indicates if defined by Technical Inventory and used by Provisioning to determine if the User must be createdor if he already exists on the platform. */
        isUserImpacted: boolean;
        /** Gets or sets Subsidiary code */
        subsidiaryCode: string;
        /** Gets or sets Duration of the conference. */
        duration: number;
        /** Gets or sets topic of the conference. */
        topic: string;
        /** Gets or sets the flag indicating whether provisioning is required. */
        isProvisioningRequired: boolean;
        /** Gets or sets the integration link. */
        integrationLink: string;
        /** Getss whether this access can be used to create OTP accesses.It is true if the access is permanent and the product supports OTP. */
        canCreateOTP: boolean;
        /** Gets or sets the commercial name of the access' technical product specification. */
        commercialProductName: string;
        /** Gets or sets Subdomain identifier. Used in mapping referential constraint. */
        subdomainId: number;
        /** Gets or sets User identifier. Used in mapping referential constraint. */
        userId: number;
        /** Gets or sets Subsidiary of the user */
        userSubsidiary: string;
        /** Gets or sets DomainSpecName of the user */
        domainSpecName: string;
        /** Value of the conference type. */
        conferenceType: string;
        /** Indicates if the access will be hidden for One Portal users. */
        isHidden: boolean;
        /** Gets or sets the access status. */
        status: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    import UserAccountHeaderDto = bluesky.core.models.account.UserAccountHeaderDto;
    interface TechnicalAccessDto extends OrderManagementEntityDto {
        /** Value of the technical access type enumeration. */
        technicalAccessType: string;
        /** Gets or sets Name of the Access, generated by TI. */
        accessName: string;
        /** Gets or sets Conference reference */
        conferenceRef: string;
        /** Gets or sets Domain name */
        domainName: string;
        /** Gets or sets a flag indicates if is one time event */
        isOneTime: boolean;
        /** Gets or sets Technical product name */
        technicalProductName: string;
        /** Gets or sets Technical product specification name */
        technicalProductSpecName: string;
        /** Gets or sets Technical access start date */
        startDate: Date;
        /** Gets or sets Technical access end date */
        endDate: Date;
        /** Gets or sets User reference. */
        userRef: string;
        /** Gets or sets Billing code. */
        billingCode: string;
        /** Gets or sets a flag indicates if defined by Technical Inventory and used by Provisioning to determine if the User must be createdor if he already exists on the platform. */
        isUserImpacted: boolean;
        /** Gets or sets Subsidiary code */
        subsidiaryCode: string;
        /** Gets or sets Duration of the conference. */
        duration: number;
        /** Gets or sets topic of the conference. */
        topic: string;
        /** Gets or sets the flag indicating whether provisioning is required. */
        isProvisioningRequired: boolean;
        /** Gets or sets the integration link. */
        integrationLink: string;
        /** Gets whether this access can be used to create OTP accesses.It is true if the access is permanent and the product supports OTP. */
        canCreateOTP: boolean;
        /** Gets or sets the commercial name of the access' technical product specification. */
        commercialProductName: string;
        /** Gets or sets Subdomain identifier. Used in mapping referential constraint. */
        subdomainId: number;
        /** Gets or sets User identifier. Used in mapping referential constraint. */
        userId: number;
        /** Gets or sets Subsidiary of the user */
        userSubsidiary: string;
        /** Gets or sets DomainSpecName of the user */
        domainSpecName: string;
        /** Value of the conference type. */
        conferenceType: string;
        /** Indicates if the access will be hidden for One Portal users. */
        isHidden: boolean;
        /** Identifier of the user account. */
        userAccountUid: string;
        /** Identifier of the logo account. */
        logoUid: string;
        /** Gets or sets the access status. */
        status: string;
        /** Gets or sets User */
        userAccount: UserAccountHeaderDto;
        /** Gets or sets parent subdomain. */
        subdomain: SubdomainDto;
        /** Gets List of service platforms */
        servicePlatforms: ServicePlatformDto[];
        /** Gets AccessAccount characteristics */
        accessCharacteristics: AccessCharacteristicDto[];
        /** DDIs linked to the Audio Access, inherited from the subdomain or from the domain. */
        directDialIns: DirectDialInDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Defines specifications (templates) for TechnicalOptions. */
    interface TechnicalOptionSpecDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Gets or sets Name of the TechnicalOptionSpecification. */
        name: string;
        /** Gets or sets Technical option specification value. */
        value: string;
        /** Gets or sets Provisioning type */
        provisioningType: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Defines specifications (templates) for TechnicalProducts. */
    interface TechnicalProductSpecificationDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Gets or sets name of the Technical Product Specification */
        name: string;
        /** Gets List of technical options specifications */
        technicalOptionSpecs: TechnicalOptionSpecDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** A TechnicalProduct is the technical view of a CommercialProduct subscribed by a customer.
    * It can be atomic (one commercial product is corresponding to one technicalproduct) or composite (one commercial product is decomposed in severaltechnical products).If a Customer has several subscriptions for the same Technical Product, severalTechnical Products will be instantiated.A technical product has its own characteristics and values (thus overwritingDomain Characteristic values) */
    interface TechnicalProductDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Gets or sets Name of the Technical Product */
        name: string;
        /** Gets or sets Technical product status. */
        technicalProductStatus: string;
        /** Technical Product Specification.Inverse navigation. */
        tPSpecification: TechnicalProductSpecificationDto;
        /** List of subdomains. */
        subdomains: SubdomainDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** TerminatingNumber. */
    interface TerminatingNumberDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Platform Number */
        platformNumber: string;
        /** Gets or sets the service platform name */
        servicePlatformName: string;
        /** Gets or sets the service platform spec name */
        servicePlatformSpecName: string;
        /** Gets or sets the phone kind */
        phoneKind: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** This resource describes microsites for WebEx.It may be shared between several Logos or dedicated to one Logo. */
    interface UrlDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Gets or sets value of the URL. */
        urlValue: string;
        /** Gets or sets the administrator login to connect to the URL. */
        login: string;
        /** Gets or sets administrator password to connect to the URL. */
        password: string;
        /** Gets or sets URL type. */
        urlType: string;
        /** Gets or sets site name. */
        siteName: string;
        /** Gets or sets the expiration date. */
        expirationDate: Date;
        /** Gets or sets the provider. */
        provider: string;
        /** Gets or sets required action on URL. */
        urlAction: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** This entity contains the information necessary to configure, modify an access web conference for a user. Web Conference can be Anywhere, Livemeeting or WebEx. */
    interface WebAccessDto extends TechnicalAccessDto {
        /** Name of access whose category is audio */
        audioAccessName: string;
        /** Password to access to the web conference.Usually, it is the participant or moderator PIN Code. */
        password: string;
        /** Login to access to the conference. By default it will be user email information.If this information is not available, it will be the Web login. */
        webLoginAlias: string;
        /** WebLogin which is provided by the "Audio platform". */
        webLoginTechnical: string;
        /** Anywhere OneClick URL. */
        oneClickURL: string;
        /** Anywhere Participant OneClick URL. */
        participantOneClickURL: string;
        /** List of integrated audio accesses. */
        integratedAudioAccesses: IntegratedAudioAccessDto[];
    }
}

declare namespace bluesky.core.models {
    /** Base information for a file upload. */
    interface FileUploadBaseDto {
        /** File encoded in base 64. */
        fileBase64Url: string;
        /** Name of the file. */
        fileName: string;
        /** Content Type. */
        contentType: string;
    }
}

declare namespace bluesky.core.models {
    /** Json wrapper for boolean responses.TODO MGA: it must be made clear to external consumers how to read the value of the boolean response. */
    interface JsonBooleanResponseDto {
        /** the status of the flag. */
        booleanResponse: boolean;
    }
}

declare namespace bluesky.core.models {
    /** Base DTO class to give the Id of an entity existing in the OrderManagement Database. */
    interface OrderManagementEntityDto extends ResourceBase {
        /** Entity Id of the item existing in OM DB. */
        orderManagementEntityId: number;
    }
}

declare namespace bluesky.core.models {
    interface PagedResourceList<T extends ResourceBase> extends ResourceBase {
        /** La liste interne concrète des ressources de type T de cette liste non paginée. */
        items: T[];
        firstItemOnPage: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        isFirstPage: boolean;
        isLastPage: boolean;
        lastItemOnPage: number;
        pageCount: number;
        pageNumber: number;
        pageSize: number;
        totalItemCount: number;
    }
}

declare namespace bluesky.core.models {
    /** Base class for all resources.TODO MGA : Move this class in a base API project */
    interface ResourceBase {
        /** Links to related resources. */
        links: any[];
    }
}

declare namespace bluesky.core.models {
    interface ResourceList<T extends ResourceBase> extends ResourceBase {
        /** La liste interne concrète des ressources de type T de cette liste non paginée. */
        items: T[];
        /** Le nombre d'éléments retournés dans cette liste non paginée. */
        totalCount: number;
    }
}

declare namespace bluesky.core.models.userManagement {
    /** Dto of an application work items summary.The summary contains for a specific application a summarized view of the work items.Each work item contains the number of the elements to monitor for a specific type of action to perform. */
    interface ApplicationWorkItemsSummaryDto extends ResourceBase {
        /** Gets or sets the list of work items to track. */
        workItemHeaders: WorkItemHeaderDto[];
        /** Gets or sets the total number of monitored elements. */
        totalCount: number;
    }
}

declare namespace bluesky.core.models.userManagement {
    /** DTO Header of a scope management (Aggregation of the BME CountryReference, SubsidiaryReference andCurrencyReference, defined in MN). */
    interface ScopeManagementHeaderDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Gets or sets the country name value. */
        countryNameValue: string;
        /** Geo region enum value (EMEA, ...) from the BME CountryReference.  We miss this MetraNet enum, so for now, it is a string. */
        geoRegion: string;
        /** Gets or sets the silo name from the BME SubsidiaryReference. */
        siloName: string;
        /** Gets or sets the subsidiary code from the BME SubsidiaryReference. */
        subsidiaryCode: string;
        /** Gets or sets the subsidiary name value. */
        subsidiaryNameValue: string;
        /** Gets or sets the management subsidiary name value. */
        managementSubsidiaryNameValue: string;
    }
}

declare namespace bluesky.core.models.userManagement {
    /** DTO of a scope management (Aggregation of the BME CountryReference, SubsidiaryReference andCurrencyReference, defined in MN). */
    interface ScopeManagementDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Gets or sets the country name. */
        countryName: string;
        /** Gets or sets the country name value. */
        countryNameValue: number;
        /** Gets or sets the currency. */
        currency: string;
        /** Gets or sets the currency value. */
        currencyValue: number;
        /** Geo region enum value (EMEA, ...) from the BME CountryReference.  We miss this MetraNet enum, so for now, it is a string. */
        geoRegion: string;
        /** Gets or sets the management's subsidiary name. */
        managementSubsidiaryName: string;
        /** Gets or sets the management's subsidiary name value. */
        managementSubsidiaryNameValue: number;
        /** Gets or sets the navision instance. */
        navisionInstance: string;
        /** Gets or sets the navision instance value. */
        navisionInstanceValue: number;
        /** Gets or sets the partner account name from the BME SubsidiaryReference. */
        partnerAccountName: string;
        /** Gets or sets the silo name from the BME SubsidiaryReference. */
        siloName: string;
        /** Gets or sets the subsidiary code from the BME SubsidiaryReference. */
        subsidiaryCode: string;
        /** Gets or sets the subsidiary name. */
        subsidiaryName: string;
        /** Gets or sets the subsidiary name value. */
        subsidiaryNameValue: number;
        /** Gets or sets the tax vendor.. */
        taxVendor: string;
        /** Gets or sets the tax vendor value. */
        taxVendorValue: number;
    }
}

declare namespace bluesky.core.models.userManagement {
    /** Informations about a user. */
    interface UserInformationDto {
        /** File Name. */
        firstName: string;
        /** Last Name. */
        lastName: string;
        /** DisplayName. */
        displayName: string;
        /** Identifier of the User. */
        userIdentifier: string;
        /** Email. */
        email: string;
        /** Phoe number. */
        phoneNumber: string;
    }
}

declare namespace bluesky.core.models.userManagement {
    interface UserRoleEntryDto {
        name: string;
        role: string;
        silo: string;
    }
}

declare namespace bluesky.core.models.userManagement {
    interface UserSsoDto extends ResourceBase {
        subsidiary: string;
        owners: string[];
        userRoleEntry: UserRoleEntryDto;
        activeDirectoryGroups: UserRoleEntryDto[];
        regions: string[];
        userDisplayName: string;
        /** Gets or sets the user's identifier in the active directory. */
        userIdentifier: string;
        countries: string[];
        subsidiaries: string[];
    }
}

declare namespace bluesky.core.models.userManagement {
    /** Header Dto of a work item.A work item contains a type and number of elements to be monitored for a connected user (e.g.: 7 quotes to approve). */
    interface WorkItemHeaderDto extends ResourceBase {
        /** Gets or sets the identifier of the work item.Used to identify the action to be performed by the user. */
        identifier: string;
        /** Gets or sets the name of the work item.The name is the displayed value of the identifier. */
        name: string;
        /** Gets or sets the number of monitored elements. */
        count: number;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of an access.The AccessAccount is the customer hierarchy node that represents the instance of asubscribed product for a given user (i.e. the use  of a particular Arkadin orArkadin's supplier resource).It holds access identifier that allows connection, CDR guidance.It is linked to a unique service platform.It represents service end point - access to Arkadin conferencing infrastructure,provisioned in the network. */
    interface AccessAccountDto extends AccountDto {
        /** Gets or sets the Alias of the access. */
        alias: string;
        /** The AccessAccount view contains attributes storing technical information for each UserAccount's AccessAccount instance. */
        accessView: AccessViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Header DTO of an accountTODO MGA : inheriting from OrderManagementEntityDto is a hack, as we do not have custom DTOs for Accounts comming from OrderManagement DB. TOFIX when we don't have these entities saved in OM. */
    interface AccountHeaderDto extends OrderManagementEntityDto {
        /** Gets or sets the user name assigned to the account.TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        userName: string;
        /** Gets or sets the account type. */
        accountType: string;
        /** Gets or sets the customer node name. */
        customerNodeName: string;
        /** TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        payerUserName: string;
        /** TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        logoUserName: string;
        /** The status of the account. */
        accountStatus: string;
    }
}

declare namespace bluesky.core.models.account {
    /** DTO of an account.Base class holding MetraNet core account properties and identifiers.TODO MGA : inheriting from OrderManagementEntityDto is a hack, as we do not have custom DTOs for Accounts comming from OrderManagement DB. TOFIX when we don't have these entities saved in OM. */
    interface AccountDto extends OrderManagementEntityDto {
        /** Gets or sets the account type. */
        accountType: string;
        /** Gets or sets the MetraNet identifier of the account. */
        mNId: number;
        /** Gets or sets the user name assigned to the account.TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        userName: string;
        /** Gets or sets the parent account.TODO MGA : to be renamed to AncestorAccountUid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        ancestorAccountUserName: string;
        /** Gets or sets the account status value. */
        accountStatus: string;
        /** Gets or sets the payer username.TODO MGA : to be renamed to PayerUid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        payerUserName: string;
        /** Gets or sets the start date of the account. */
        accountStartDate: Date;
        /** Gets or sets the end date of the account. */
        accountEndDate: Date;
        /** Gets or sets the start date of the association with the current parent account (ancestor). */
        hierarchyStartDate: Date;
        /** Gets or sets the end date of the association with the current parent account (ancestor). */
        hierarchyEndDate: Date;
        /** Gets or sets the password used by the account to access MetraView site. */
        password: string;
        /** Gets or sets the start date of the payment redirection with the current payer account. */
        paymentStartDate: Date;
        /** Gets or sets the end date of the payment redirection with the current payer account. */
        paymentEndDate: Date;
        /** Gets or sets the Internal view contains the Internal account information.It is required for all types of accounts. */
        internalView: InternalViewDto;
        /** Gets or sets the Common view gathers attributes shared by all of the Accounts. */
        commonView: CommonViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a billing account.The Billing Account represents the billing point in the hierarchy.This is the account which collects all charges from itself and all sub-accounts.Billing account defines invoice currency, billing frequency and receives theinvoice.It is linked to an Arkadin subsidiary (this allows to identify the uniqueNavision instance that support the Billing Account).By default the Billing Account is the entity that support the subscriptions(exception for Event, trial accounts ...).Please note that in the Wholesaler case, the Billing Account is a dummy(unknown by Navision, no invoice sent).Please note that in the trial account case, the Billing Account is a dummy (forinternal use only). */
    interface BillingAccountDto extends AccountDto {
        /** Billing Account view */
        billingView: BillingViewDto;
        /** The Contact view of type Bill-to contains the contact and address of a billable entity. */
        billToView: BillToContactViewDto;
        /** The  Contact view of type Ship-to contains the contact and address where the invoice is sent to. */
        shipToView: ContactViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        technicalAdminContactView: TechnicalAdminContactViewDto;
        /** The Contact view of type invoice carbon copy contains the additional contacts who will receive the invoice. */
        invoiceCarbonCopyRecipients: ContactViewDto[];
        /** The Contact view of type welcome pack carbon copy contains the additional contacts who will receive the welcome packs. */
        welcomePackCarbonCopyRecipients: ContactViewDto[];
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a group.The Group is an optional node in the customer hierarchy.It is used for invoicing structure and reporting purposes. */
    interface GroupDto extends AccountDto {
        /** The Primary Group view contains attributes specific to Group and Primary Group account. These attributes include specifics of physical platform to which children accounts (Users and their Accesses) were provisioned. */
        primaryGroupView: PrimaryGroupViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        technicalAdminContactView: TechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a Legal Entity.The Legal Entity is a node acting as a Payer template for the Billing Account. */
    interface LegalEntityDto extends AccountDto {
        /** The Contact view of type Bill-to contains the contact and address of a billable entity. */
        billToView: BillToContactViewDto;
        /** The Legal Entity view contains attributes related to Legal Entity setup. */
        legalEntityView: LegalEntityViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a local logo.The Local Logo is an optional node in the customer hierarchy, used for groupingor representing subsidiaries or geolocations of the Customer organization. */
    interface LocalLogoDto extends AccountDto {
        /** The Local Logo view contains attributes related to Local Logo setup. */
        localLogoView: LocalLogoViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        technicalAdminContactView: TechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a logo.A Logo represents the Customer which is in relation with Arkadin or Arkadin'spartner. It's the root of any customer hierarchy.In the case of WholeSale the Logo is a dummy node (Arkadin IS hasn't got thecomplete view of the wholesaler's customer).In the case of trial account the Logo is a dummy node.A logo is associated to a Arkadin subsidiary (or to Arkadin SAS). */
    interface LogoDto extends AccountDto {
        /** Logo view */
        logoView: LogoViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        technicalAdminContactView: TechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Management Subsidiaries are used in the Platform Selection algorithms. */
    interface ManagementSubsidiaryDto extends ResourceBase {
        /** Gets or sets the unique identifier. */
        id: number;
        /** Flag to identify the Management Subsidiary at Logo level. */
        isMain: boolean;
        /** Subsidiary code. */
        subsidiaryCode: string;
        /** Name of the management subsidiary to be used for AudioClassicplatform selection. */
        subsidiaryName: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a primary group.The Primary group is a mandatory group of Users.It represents Customer's organizational physical Site, Department, Office orLocation or used purely for grouping purposes.The Primary group is linked to all services platforms used by the users. */
    interface PrimaryGroupDto extends AccountDto {
        /** The Primary Group view contains attributes specific to Group and Primary Group account. These attributes include specifics of physical platform to which children accounts (Users and their Accesses) were provisioned. */
        primaryGroupView: PrimaryGroupViewDto;
        /** Dispatching viewContains attributes related to account segmentation and dispatching. */
        dispatchingView: DispatchingViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        technicalAdminContactView: TechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a reporting group 1.The Reporting Group has no functional requirement for billing, rating,...It is only used for Reporting issues. */
    interface ReportingGroup1Dto extends AccountDto {
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a reporting group 2.The Reporting Group has no functional requirement for billing, rating,...It is only used for Reporting issues. */
    interface ReportingGroup2Dto extends AccountDto {
    }
}

declare namespace bluesky.core.models.account {
    /** Header DTO of a UserAccount. */
    interface UserAccountHeaderDto extends AccountHeaderDto {
        email: string;
        login: string;
        selfCareRelation: string;
        selfCareRole: string;
        hasExtendedScope: boolean;
    }
}

declare namespace bluesky.core.models.account {
    /** DTO of a user.The UserAccount represents individual (person) or inanimate entity that that receivesand consumes services provided by Arkadin. */
    interface UserAccountDto extends AccountDto {
        /** The UserAccount-Contact view contains the contact and address of a physical user of Arkadin services. */
        userContactView: UserContactViewDto;
        /** The UserAccount view contains attributes related to UserAccount setup. */
        userView: UserViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        technicalAdminContactView: TechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of an access view.Contains technical information for each user's access instance. */
    interface AccessViewDto extends ResourceBase {
        /** Gets or sets the login for Web products. */
        accessLogin: string;
        /** Gets or sets the password for credential requirements on service platform (= pin moderator). */
        accessPassword: string;
        /** Gets or sets AccessAccount personal information numberUsed by user to access the service. */
        audioModeratorPIN: string;
        /** Gets or sets the Personal Information Number for the audio participant. */
        audioParticipantPIN: string;
        /** Gets or sets the information provided by the customer at creation date. */
        billingCode: string;
        /** Gets or sets the billing reference, additional information at access level to be displayed in the invoice. */
        billingRef: string;
        /** Gets or sets the comment. */
        comment: string;
        /** Gets or sets the external conference reference. */
        externalConferenceReference: string;
        /** Gets or sets the conference reference external name for audio. */
        networkElementAccessName: string;
        /** Gets or sets the conference reference for audio access, microsite and login for WebEx. */
        networkElementAccessReference: string;
        /** Gets or sets the bridge number (if audio), WebEx platform, ANW platform. */
        networkElementReference: string;
        /** Gets or sets the technical environment. */
        networkElementTechnicalEnvironment: string;
        /** Gets or sets the Topic. */
        topic: string;
        /** Gets or sets the access product name. */
        accessProductName: string;
        /** Gets the access category. */
        accessCategory: string;
        /** Gets the access type. */
        accessType: string;
        /** Gets the conference type. */
        conferenceType: string;
    }
}

declare namespace bluesky.core.models.account {
    interface BillToContactViewDto extends ContactViewDto {
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a billing view.Contains informations related to a billing account and financial processing. */
    interface BillingViewDto extends ResourceBase {
        /** Gets or sets the Arkadin bank account details (defined in MT SDD). */
        arkadinBankAccountDetailsId: string;
        /** Gets or sets a value indicating whether the related billing account is a GSA account with a unique central invoice. */
        isCentralBilling: boolean;
        /** Gets or sets a value indicating whether a cover page is required. */
        isCoverPageRequired: boolean;
        /** Gets or sets a value indicating whether a customer purchase order is mandatory. */
        isPurchaseOrderMandatory: boolean;
        /** Gets or sets the username of a legal entity node in the same account hierarchy (children of the same Logo). */
        masterLegalEntityUserName: string;
        /** Gets or sets the expiry date for the customer purchase order. */
        purchaseOrderExpiryDate: Date;
        /** Gets or sets the customer purchase order reference. */
        purchaseOrderReference: string;
        /** Gets or sets the registration number in the country of the account (i.e. SIRET/RCS numbers in France). */
        registrationNumber: string;
        /** Gets or sets the value of the corresponding opportunity file (SFDC externalID). */
        salesForceId: string;
        /** Gets or sets the billing subsidiary code. */
        subBillingCode: string;
        /** Invoice minimum amount. */
        invoiceMinimumAmount: number;
        /** Indicates if the general admin fee must be applied. */
        generalAdminFeeApplied: boolean;
        /** Indicates if the paper based invoice fee must be applied. */
        paperBasedInvoiceFeeApplied: boolean;
        /** Gets the subsidiary managing the invoice. */
        billingSubsidiary: string;
        /** Gets the Collaboration Usage Details template. */
        cUDTemplate: string;
        /** Gets an Event Usage Details template. */
        eUDTemplate: string;
        /** Gets the invoice delivery method. */
        invoiceDeliveryMethod: string;
        /** Gets the invoice language. */
        invoiceLanguage: string;
        /** Gets the invoice output format. */
        invoiceOutputFormat: string;
        /** Gets the legal entity inheritance. */
        legalEntityInheritance: string;
        /** Gets the subsidiary managing thebilling account if necessary from a provisioning point of view. */
        managementSubsidiary: string;
        /** Gets the navision instance where this customer billing data is reported to. */
        navisionInstance: string;
        /** Gets the payment term code. */
        paymentTermCode: string;
        /** Gets the print house in charge of invoice generation. */
        printHouse: string;
        /** Gets the subsidiary managing the revenue fo the current billing account if different from the billing subsidiary. */
        revenueSubsidiary: string;
        /** IST (Invoice Suppression Threshold) IMA (Invoice Minimum Amount) information. */
        istimaInfo: {
            /** Product offering MetraNet identifier. */
            productOfferingMNId: number;
            /** Invoice Suppression Threshold from. */
            invoiceSuppressionThresholdFrom: number;
            /** Invoice Suppression Threshold to. */
            invoiceSuppressionThresholdTo: number;
            /** Subscription identifier. */
            subscriptionId: number;
        };
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a common view.Contains attributes shared by all of the accounts. */
    interface CommonViewDto extends ResourceBase {
        /** Gets or sets the comment to be manually filled by CSR, SalesAdmin... to provide whatever additional information required. */
        comment: string;
        /** Gets or sets the requester to be manually filled by CSR, SalesAdmin... to provide whatever additional information required. */
        statusRequestedBy: string;
        /** Gets or sets the user who created the account. */
        createdBy: string;
        /** Gets or sets the account creation date. */
        createdDate: Date;
        /** Gets or sets the customer node name. */
        customerNodeName: string;
        /** Gets or sets the user name of the logo present in the account hierarchy. */
        logoUserName: string;
        /** Gets or sets the user who last modified the account. */
        modifiedBy: string;
        /** Gets or sets the account last modification date. */
        modifiedDate: Date;
        /** Gets or sets the assigned sales account. */
        salesAccountAssigned: string;
        /** Gets or sets the display name of the assigned sales account. */
        salesAccountDisplayName: string;
        /** Gets or sets the communication Opt-in. Used to sign-up to receive email notifications. */
        communicationOptIn: boolean;
        /** Gets or sets the partner external ID. */
        partnerExternalId: string;
        /** Gets theorder status. */
        orderStatus: string;
        /** Gets the effective management subsidiary. */
        effectiveManagementSubsidiary: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a contact view.Contains contact and address information. */
    interface ContactViewDto extends ResourceBase {
        /** Gets or sets the name that may be filled in for invoicing further purposes. */
        name1: string;
        /** Gets or sets the additionnal name that may be filled in for invoicing further purposes. */
        name2: string;
        /** Gets or sets the address first line. */
        address1: string;
        /** Gets or sets the address second line. */
        address2: string;
        /** Gets or sets the address third line. */
        address3: string;
        /** Gets or sets the city or town. */
        city: string;
        /** Gets or sets the the country code. */
        countryCode: string;
        /** Gets or sets the e-mail address. */
        email: string;
        /** Gets or sets the fax number. */
        facsimileTelephoneNumber: string;
        /** Gets or sets the first name. */
        firstName: string;
        /** Gets or sets the last name. */
        lastName: string;
        /** Gets or sets the local address first line. */
        localAddress1: string;
        /** Gets or sets the local address second line. */
        localAddress2: string;
        /** Gets or sets the local address third line. */
        localAddress3: string;
        /** Gets or sets the local city or town. */
        localCity: string;
        /** Gets or sets the local first name. */
        localFirstName: string;
        /** Gets or sets the local last name. */
        localLastName: string;
        /** Gets or sets the local middle initial. */
        localMiddleInitial: string;
        /** Gets or sets the local salutation. */
        localSalutation: string;
        /** Gets or sets the local state or province. */
        localState: string;
        /** Gets or sets the local county. */
        localCounty: string;
        /** Gets or sets the middle initial. */
        middleInitial: string;
        /** Gets or sets the telephone number. */
        phoneNumber: string;
        /** Gets or sets the salutation.No academic information (Professor,...), no job title captured. */
        salutation: string;
        /** Gets or sets the state or province. */
        state: string;
        /** Gets or sets the zip or postal code. */
        zip: string;
        /** Gets or sets the company. */
        company: string;
        /** Gets or sets the county: a region which has its own local government. */
        county: string;
        /** Gets the language. */
        communicationLanguage: string;
        /** Gets the contact type. */
        contactType: string;
        /** Gets the country name. */
        countryName: string;
        /** Gets the time zone identifier. */
        timeZoneId: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a Dispatching view.Contains attributes related to account segmentation and dispatching. */
    interface DispatchingViewDto extends ResourceBase {
        /** Gets or sets the cost center. */
        costCenter: string;
        /** Gets or sets the first free criterion. */
        dispatch1: string;
        /** Gets or sets the second free criterion. */
        dispatch2: string;
        /** Gets the branch country. */
        branchCountry: string;
        /** Gets the branch department. */
        branchDepartment: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of an internal view.Contains the internal account information. */
    interface InternalViewDto extends ResourceBase {
        /** Gets or sets a value indicating whether the is billable. */
        isBillable: boolean;
        /** Gets or sets the name of the division associated with the account. */
        division: string;
        /** Gets or sets a value indicating whether the  is a folder. */
        isFolder: boolean;
        /** Gets or sets the answer to the security question. */
        securityAnswer: string;
        /** Gets or sets the status reason text. */
        statusReasonOther: string;
        /** Gets or sets a value indicating whether the  is tax exempt. */
        isTaxExempt: boolean;
        /** Gets or sets the tax exempt identifier. */
        taxExemptId: string;
        /** Gets or sets the tax exemption start date. */
        taxExemptStartDate: Date;
        /** Gets or sets the tax exemption end date. */
        taxExemptEndDate: Date;
        /** Gets or sets the tax service address Pcode. */
        taxServiceAddressPcode: number;
        /** Gets or sets the additional tax information */
        additionalTaxInformation: string;
        /** Gets or sets the Additional tax exemption. */
        additionalTax: boolean;
        /** Gets the currency. */
        currency: string;
        /** Gets the invoice delivery method. */
        invoiceDeliveryMethod: string;
        /** Gets the language. */
        language: string;
        /** Gets the MetraTax country eligiblity. */
        metraTaxCountryEligibility: string;
        /** Gets the MetraTax country zone. */
        metraTaxCountryZone: string;
        /** Gets the MetraTax override band. */
        metraTaxOverrideBand: string;
        /** Gets the payment method. */
        paymentMethod: string;
        /** Gets the security question. */
        securityQuestion: string;
        /** Gets the status reason. */
        statusReason: string;
        /** Gets the tax vendor. */
        taxVendor: string;
        /** Gets the time zone identifier. */
        timeZoneId: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of IST IMA Information.ISTIMA information.IST: Invoice Suppression Threshold.IMA: Invoice Minimum Amount. */
    interface IstimaInfoDto extends ResourceBase {
        /** Product offering MetraNet identifier. */
        productOfferingMNId: number;
        /** Invoice Suppression Threshold from. */
        invoiceSuppressionThresholdFrom: number;
        /** Invoice Suppression Threshold to. */
        invoiceSuppressionThresholdTo: number;
        /** Subscription identifier. */
        subscriptionId: number;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a legal entity view.The Legal Entity view contains attributes related to Legal Entity setup. */
    interface LegalEntityViewDto extends ResourceBase {
        /** Gets or sets the company registration number to National Commercial Board (ex: SIREN in France). */
        commercialRegistrationNumber: string;
        /** Gets or sets the equivalent to EU tax registration number. */
        taxRegistrationNumber: string;
        /** Gets or sets the billing subsidiary code. */
        subBillingCode: string;
        /** Gets the billing currency. */
        billingCurrency: string;
        /** Gets the subsidiary managing the billing subsidiaries of billing accounts (OE inheritance mechanism). */
        billingSubsidiary: string;
        /** Gets the payment term. */
        paymentTerm: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a local logo view.Contains attributes related to the local logo setup. */
    interface LocalLogoViewDto extends ResourceBase {
        /** Gets the subsidiary managing the local Logo. */
        managementSubsidiary: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a logo view.Contains attributes related to the logo setup. */
    interface LogoViewDto extends ResourceBase {
        /** Gets or sets a value indicating whether this logo is a GSA account with a unique central invoice. */
        isCentralBilling: boolean;
        /** Gets the subsidiary managing the logo. */
        managementSubsidiary: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Contains attributes related to the group and primary group. */
    interface PrimaryGroupViewDto extends ResourceBase {
        /** Gets or sets a value indicating whether the request flow validation is activated. */
        isRqstFlowValidationActivated: boolean;
        /** Gets the subsidiary managing the group or primary group. */
        managementSubsidiary: string;
    }
}

declare namespace bluesky.core.models.account {
    interface TechnicalAdminContactViewDto extends ContactViewDto {
    }
}

declare namespace bluesky.core.models.account {
    interface UserContactViewDto extends ContactViewDto {
        /** Gets or sets the external language, needed by the TI and the Provisioning. */
        externalLanguage: string;
        /** Gets or sets the external timezone, needed by the TI and the Provisioning. */
        externalTimeZone: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a user view.Contains attributes related to the user setup. */
    interface UserViewDto extends ResourceBase {
        /** Gets or sets the information provided by the customer at creation date. */
        billingCode: string;
        /** Gets or sets a flag indicating whether the user is a moderator. */
        isModerator: boolean;
        /** Gets or sets the email of the user (Collab). */
        login: string;
        /** Gets or sets the value of the corresponding opportunity file (SFDC externalID) in case of a TRIAL user/access creation only. */
        salesForceId: string;
        /** Gets or sets the user first dispatch.Custom field used by the customer and displayed in One Portal (1st field). */
        userDispatch1: string;
        /** Gets or sets user second dispatch.Custom field used by the customer and displayed in One Portal (2nd field). */
        userDispatch2: string;
        /** Billing reference. */
        billingRef: string;
        /** Gets the Selfcare admin level.Defines the hierarchy node under which the user is admin: Logo, Local Logo, Billing Account, Primary Group, and None for simple users. */
        selfCareRelation: string;
        /** Gets the Selfcare role.Defines which role should have the user in the Selcare application (Lounge).- User can manage his Meetings and his Profile.- Admin have same rights and can manage Users (integrated self-provisioning options to create, manage and delete accounts). */
        selfCareRole: string;
        /** If specified, gets or sets the list of the identifiers of the accounts for which the user has admin privileges. */
        additionalAdministrationLevels: string[];
    }
}
