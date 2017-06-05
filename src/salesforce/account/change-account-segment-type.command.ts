namespace bluesky.core.command.salesforce {
    import SegmentTypeEnum = bluesky.core.model.salesforce.SegmentTypeEnum;
    /**
     * Command to change the segment of an sfdc account.
     */
    export interface IChangeAccountSegmentTypeCommand {
        Id: string;
        //TODO MGA: capi is handling strings at the moment, TOFIX in capi (should be enum)
        SegmentType: SegmentTypeEnum;
    }
}