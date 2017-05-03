namespace bluesky.core.model.salesforce {
    /**
     * Dto of a sales force account.
     * TODO MGA: should be paginated in the long term (see SFDC DAL)
     */
    export interface ISalesForceAccountDto extends IResourceBase {
        Id: string;
        Name: string;
        CountryName: IMetraNetEnumerationDto;
        Segmentation: string;
        /** TODO MGA: ask CAPI to update to use Enum  */
        SegmentType: string;
        CustomerSize: IMetraNetEnumerationDto;
    }
}