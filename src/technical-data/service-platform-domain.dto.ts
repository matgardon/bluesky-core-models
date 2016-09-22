 namespace bluesky.core.models.technicalData {
    import ManagementSubsidiaryDto = account.IManagementSubsidiaryDto;

    /** Domain is the parent class and should be abstract for export interface purpose.A Domain corresponds to a technical environment set up for a Sales Channel /Subsidiary, on which the customer will be provisioned: it is hosted byone/several Service Platforms, uses subset of logical resources which can bespecifically branded, and defines a default set of options. */
    export interface IServicePlatformDomainDto extends models.IResourceBase {
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
