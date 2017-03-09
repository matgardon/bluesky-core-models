namespace bluesky.core.models.customerOrder {
    import UserAccountDto = bluesky.core.models.account.IUserAccountDto;
    import AccessAccountDto = bluesky.core.models.account.IAccessAccountDto;

    /** DTO of a user order item. */
    export interface IUserOrderItemDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Processing status of an OrderItem. */
        OrderItemStatus: string;
        /** This describes the action held by the User OrderItem */
        UserAction: string;
        /** UserAccount linked to the User Order Item.The UserAccount represents individual (person) or inanimate entity that receives and consumes services provided by Arkadin. */
        UserAccount: UserAccountDto;
        /** AccessAccount linked to the User Order Item.The AccessAccount is the customer hierarchy node that represents the instance of a subscribed product for a given user (i.e. the use  of a particular Arkadin or Arkadin's supplier resource). */
        AccessAccount: AccessAccountDto;
        /** Subscription linked to the User Order Item.A subscription is product offering sold to a customer and applied to a single subscriber node. */
        Subscription: ICustomerOrderSubscriptionDto;
        /** Additional information on a User used for audio and web accesses creation. */
        AccessInfo: IAccessInfoDto;
        /** Additional information for Send Welcome Pack. */
        WelcomePackInfo: IWelcomePackInfoDto;
        /** List of custom options. */
        CustomOptions: ICustomOptionDto[];
        /** List of movable users. */
        MovableUsers: IMovableUserDto[];
        /** List of participants. */
        Participants: IParticipantDto[];
    }
}
