namespace bluesky.core.models.customerOrder {
    /** Context of the order. */
    export interface IOrderContextDto extends IResourceBase {
        /** Gets or sets a Flag to indicate if subscription modification must be applied to all existing accesses,in terms of options. Only required for a CustomerOrder "Update Subscription". */
        IsAppliedToAllAccesses?: boolean;
        /** Gets or sets a Flag to indicate If the flag isAudioCustom is set to true, is filled with the path ofthe file containing the custom information. */
        AudioCustomDetail: string;
        /** Gets or sets Name of the system which submitted the order in the first place :OrderEntry, PartnerIS, Selfcare. */
        CallingSystem: string;
        /** Gets or sets Free text zone of 2048 char (text area). */
        Comment: string;
        /** Gets or sets Filled with the end-user who creates the order */
        CreatedBy: string;
        /** Gets or sets Date of creation */
        CreatedDate: Date;
        /** Gets or sets Filled with the end-user who loads the order */
        EditingUserLogin: string;
        /** Gets or sets Effective date of order execution */
        ExecutionDate: Date;
        /** Gets or sets It corresponds to the identifier of a concurrent Customer Order which must be terminated before processingcurrent order. */
        FrozenBy?: number;
        /** Gets or sets Flag to indicate if Domain Selection is done automatically ormanually. */
        IsAudioCustom?: boolean;
        /** Gets or sets a Flag to indicate if Subscriptions and Accesses are created as trialones. */
        IsTrial: boolean;
        /** Gets or sets the end-user who last modified the order */
        ModifiedBy: string;
        /** Gets or sets Date of last modification */
        ModifiedDate?: Date;
        /** Gets or sets OrderHistory : Read-only text area of 2048 char filled with the name of the end-user who saved the order and the date when it was saved */
        OrderHistory: string;
        /** Gets or sets Date of submission of the customer order. */
        SubmitDate?: Date;
        /** Gets or sets the end-user who submit the Order. Filled with PartnerName for orders with SalesChannel set to Partner, or with the Selfcare fororders coming from the Selfcare. */
        SubmittedBy: string;
        /** Gets or sets Name of the sales channel from which the order was submitted. Forexample: Arkadin-Direct */
        SalesChannel: string;
        /** Gets or sets Name of the Order Manager responsible for the fulfillment of thecustomer order. It is left empty by default, but it can be assigned throughOrder Tracking UI. */
        TechnicalCoordinator: string;
        /** This flag indicates if Welcome Packs are to be sent to the Users for which accesses were created/modified. */
        IsUserRecipient?: boolean;
        /** Status reason other. */
        StatusReasonOther: string;
        /** Gets or sets WelcomePack send date */
        WelcomePackSendDate?: Date;
        /** Gets or sets the Name of the subsidiary from which the order was submitted. */
        Subsidiary: string;
        /** Gets or sets the Status reason. */
        StatusReason: string;
        /** Gets or sets Welcome pack send mode */
        WelcomePackSendMode: string;
        /** Indicates if users' usages  must be corrected after a move user. */
        IsUsageCorrected: boolean;
    }
}
