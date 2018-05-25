namespace bluesky.core.model.clientConfig {
    /**
     * Enum generated from the server to know the list of supported endpoint configuration.
     */
    export enum EndpointTypeEnum {
        /**
         * Origin domain from which the current client was loaded.
         */
        CurrentDomain,
        // APIs
        CoreApi,
        MarketingApi,
        SelfcareApi,
        MetraNetApi,
        ResourceApi,
        // OM apps
        QuoteWizard,
        OrderEntry,
        OrderTracking,
        // Internal apps
        Metranet,
        TechnicalInventory,
        TemplateGenerator,
        Salesforce,
        /**
         * External URLs (not treatment applied, rejected if URL is not full)
         */
        External
    }
}