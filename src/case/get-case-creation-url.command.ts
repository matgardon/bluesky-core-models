namespace bluesky.core.command.userCase {
    export interface IGetCaseCreationUrlCommand {
        UserId: string;
        SalesForceAccountId: string;
        PinCode: string;
        WebLogin: string;
    }
}