declare namespace bluesky.core.models.technicalData {
    import ManagementSubsidiaryDto = models.account.ManagementSubsidiaryDto;

    /** Domain is the parent class and should be abstract for interface purpose.A Domain corresponds to a technical environment set up for a Sales Channel /Subsidiary, on which the customer will be provisioned: it is hosted byone/several Service Platforms, uses subset of logical resources which can bespecifically branded, and defines a default set of options. */
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
