namespace bluesky.core.model.salesforce {
    /**
     * Dto of a sales force account.
     * TODO MGA: should be paginated in the long term (see SFDC DAL)
     */
    export interface ISalesForceAccountHeaderDto extends IResourceBase {
        Id: string;
        Name: string;
        Segmentation: string;
        CountryName: IMetraNetEnumerationDto;
        SegmentType: string;
        CustomerSize: IMetraNetEnumerationDto;
    }
}