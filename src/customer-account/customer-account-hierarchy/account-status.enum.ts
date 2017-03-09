namespace bluesky.core.models.account {
    export enum AccountStatusEnum {
        Undefined = 0,
        PendingActiveApproval = 1,
        Active = 2,
        Suspended = 3,
        PendingFinalBill = 4,
        Closed = 5,
        Archived = 6,
    }
}