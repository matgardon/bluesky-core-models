namespace bluesky.core.models.userCase {
    export interface IGetCaseCreationUrlCommand {
        UserId: string;
        SalesForceAccountId: string;
        PinCode: string;
        WebLogin: string;
    }
}