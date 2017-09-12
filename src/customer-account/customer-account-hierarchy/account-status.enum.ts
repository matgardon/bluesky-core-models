namespace bluesky.core.model.account {

    //TODO MGA: remove once all migrated to string enum, or replace normal enum with strign enum without changing name ?
    export enum AccountStatusEnum {
        Undefined = 0,
        PendingActiveApproval = 1,
        Active = 2,
        Suspended = 3,
        PendingFinalBill = 4,
        Closed = 5,
        Archived = 6,
    };

    export enum AccountStatusStringEnum {
        'Undefined',
        'PendingActiveApproval',
        'Active',
        'Suspended',
        'PendingFinalBill',
        'Closed',
        'Archived'
    };
}