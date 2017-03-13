 namespace bluesky.core.model.technicalData {
	/** A Subdomain is instantiated for a given Customer when subscribing to aTechnicalProduct.It is dedicated to a Customer and inherits the characteristics of the parentDomain.It can be of type Audio, Web or Video. */
	export interface ISubdomainDto extends IResourceBase {
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
