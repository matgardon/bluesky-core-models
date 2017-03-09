namespace bluesky.core.models.userCase {
    /** Dto of a sales force case.
    * A case is a description of a customer's feedback, problem, or question.
    * Cases are used to track and solve customers' issues. */
    export interface ISalesforceCaseDto {
        /** Identifier of the case. */
        Id: string;
        /** Case status.Example: New, Acknowledge, Pending customer, On going, Raised to Supplier, Raised, Closing, Pending completion, Update of supplier case, Closing of supplier case, Close. */
        Status: string;
        /** Case severity. */
        Severity: string;
        /** Unique number automatically assigned to the case. */
        Number: string;
        /** Record type name. */
        RecordType: string;
        /** Brief description of customer's issue. */
        Subject: string;
        /** Creation date of the case. */
        CreatedDate: Date;
        /** Case owner's name. */
        OwnerName: string;
        /** Case contact's name. */
        ContactName: string;
        /** Url to the case in SalesForce. */
        CaseUrl: string;
    }
}
