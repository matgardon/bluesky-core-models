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
