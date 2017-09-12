namespace bluesky.core.model.account {

    //TODO MGA: remove once all migrated to string enum, or replace normal enum with strign enum without changing name ?
    export enum AccountTypeEnum {
        None = 0,
        Logo = 1,
        LocalLogo = 2,
        LegalEntity = 3,
        ReportingGroup1 = 4,
        ReportingGroup2 = 5,
        BillingAccount = 6,
        Group = 7,
        PrimaryGroup = 8,
        User = 9,
        Access = 10
    };

    export enum AccountTypeStringEnum {
        None = 'None',
        Logo = 'Logo',
        LocalLogo = 'LocalLogo',
        LegalEntity = 'LegalEntity',
        ReportingGroup1 = 'ReportingGroup1',
        ReportingGroup2 = 'ReportingGroup2',
        BillingAccount = 'BillingAccount',
        Group = 'Group',
        PrimaryGroup = 'PrimaryGroup',
        User = 'User',
        Access = 'Access'
    };
}
