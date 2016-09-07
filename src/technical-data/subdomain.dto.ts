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
