namespace bluesky.core.model.customerOrder {

    export enum CustomerOrderTypeEnum {
        InitialOrder = 0,
        InitialSimplifiedOrder = 1,
        CreateUpdateCustomerHierarchy = 2,
        UpdateSubscription = 3,
        ChangeUsersSubscription = 4,
        ModifyUser = 5,
        ModifyAccess = 6,
        DisableUser = 7,
        ReenableUser = 8,
        CeaseUsers = 9,
        CeaseAccesses = 10,
        TerminateSubscription = 11,
        CeaseNode = 12,
        ScheduleOTPConference = 13,
        UpdateOTPConference = 14,
        CancelOTPConference = 15,
        AddSubscription = 16,
        AddUser = 17,
        AddAccess = 18,
        RaiseMiscellaneousCharges = 19,
        MoveUsers = 20,
        SendWelcomePack = 21,
        ChangeOffer = 22,
        MoveNode = 23,
        ApplyAddendum = 24,
        MergeLogo = 25
    }
}