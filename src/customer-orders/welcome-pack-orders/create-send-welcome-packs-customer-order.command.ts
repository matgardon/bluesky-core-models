namespace bluesky.core.models.customerOrder {
    /** Command to create a send welcome packs order. */
    export interface ICreateSendWelcomePacksCustomerOrderCommand extends IBaseCreateOrderCommand {
        /** For each welcome pack to send, provide information about the user and the subscription. */
        SendWelcomePackInformationList: ISendWelcomePackInformationDto[];
        /** Welcome pack sending strategy. */
        WelcomePackSendingStrategy?: IWelcomePackSendingStrategyDto;
    }
}
