namespace bluesky.core.model.customerOrder {
    
    //TODO MGA: remove once all migrated to string enum, or replace normal enum with strign enum without changing name ?
    /**
     * Type of Arkadin.BlueSky.BSIC.Domain.OrderManagement.CustomerOrder
     */
    export enum CustomerOrderTypeEnum {
        // Initial an order
        InitialOrder = 0,
        // Initial a simple order
        InitialSimplifiedOrder = 1,
        // Create or update customer hierarchy
        CreateUpdateCustomerHierarchy = 2,
        // Update a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
        UpdateSubscription = 3,
        // Change user's Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
        ChangeUsersSubscription = 4,
        // Modify a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
        ModifyUser = 5,
        // Modify a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
        ModifyAccess = 6,
        // Disable a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
        DisableUser = 7,
        // Reenable a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
        ReenableUser = 8,
        // Cease Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
        CeaseUsers = 9,
        // Cease Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
        CeaseAccesses = 10,
        // Terminate a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
        TerminateSubscription = 11,
        // Cease a Node whose type is a class who inherite Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Account
        CeaseNode = 12,
        // Schedule OTP conference
        ScheduleOTPConference = 13,
        // Update OTP conference
        UpdateOTPConference = 14,
        // Cancel OTP conference
        CancelOTPConference = 15,
        // Add a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
        AddSubscription = 16,
        // Add a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
        AddUser = 17,
        // Add a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
        AddAccess = 18,
        // Raise the miscellaneous charges
        RaiseMiscellaneousCharges = 19,
        // Move a set of users inside their hierarchy
        MoveUsers = 20,
        // Send welcome pack
        SendWelcomePack = 21,
        // Change offer
        ChangeOffer = 22,
        // Move node
        MoveNode = 23,
        // Apply Addendum
        ApplyAddendum = 24,
        // Merge Logo
        MergeLogo = 25
    };

    export enum CustomerOrderTypeStringEnum {
        // Initial an order
        InitialOrder = 'InitialOrder',
        // Initial a simple order
        InitialSimplifiedOrder = 'InitialSimplifiedOrder',
        // Create or update customer hierarchy
        CreateUpdateCustomerHierarchy = 'CreateUpdateCustomerHierarchy',
        // Update a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
        UpdateSubscription = 'UpdateSubscription',
        // Change user's Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
        ChangeUsersSubscription = 'ChangeUsersSubscription',
        // Modify a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
        ModifyUser = 'ModifyUser',
        // Modify a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
        ModifyAccess = 'ModifyAccess',
        // Disable a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
        DisableUser = 'DisableUser',
        // Reenable a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
        ReenableUser = 'ReenableUser',
        // Cease Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
        CeaseUsers = 'CeaseUsers',
        // Cease Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
        CeaseAccesses = 'CeaseAccesses',
        // Terminate a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
        TerminateSubscription = 'TerminateSubscription',
        // Cease a Node whose type is a class who inherite Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Account
        CeaseNode = 'CeaseNode',
        // Schedule OTP conference
        ScheduleOTPConference = 'ScheduleOTPConference',
        // Update OTP conference
        UpdateOTPConference = 'UpdateOTPConference',
        // Cancel OTP conference
        CancelOTPConference = 'CancelOTPConference',
        // Add a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
        AddSubscription = 'AddSubscription',
        // Add a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
        AddUser = 'AddUser',
        // Add a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
        AddAccess = 'AddAccess',
        // Raise the miscellaneous charges
        RaiseMiscellaneousCharges = 'RaiseMiscellaneousCharges',
        // Move a set of users inside their hierarchy
        MoveUsers = 'MoveUsers',
        // Send welcome pack
        SendWelcomePack = 'SendWelcomePack',
        // Change offer
        ChangeOffer = 'ChangeOffer',
        // Move node
        MoveNode = 'MoveNode',
        // Apply Addendum
        ApplyAddendum = 'ApplyAddendum',
        // Merge Logo
        MergeLogo = 'MergeLogo'
    };
}