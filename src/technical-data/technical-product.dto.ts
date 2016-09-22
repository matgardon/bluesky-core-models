 namespace bluesky.core.models.technicalData {
    /** A TechnicalProduct is the technical view of a CommercialProduct subscribed by a customer.
    * It can be atomic (one commercial product is corresponding to one technicalproduct) or composite (one commercial product is decomposed in severaltechnical products).If a Customer has several subscriptions for the same Technical Product, severalTechnical Products will be instantiated.A technical product has its own characteristics and values (thus overwritingDomain Characteristic values) */
    export interface ITechnicalProductDto extends models.IResourceBase {
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
