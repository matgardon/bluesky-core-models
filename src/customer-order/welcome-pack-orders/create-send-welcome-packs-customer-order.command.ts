namespace bluesky.core.command.customerOrder {
    
    import ISendWelcomePackInformationDto = bluesky.core.model.customerOrder.ISendWelcomePackInformationDto;
    import IWelcomePackSendingStrategyDto = bluesky.core.model.customerOrder.IWelcomePackSendingStrategyDto;

    /** Command to create a send welcome packs order. */
    export interface ICreateSendWelcomePacksCustomerOrderCommand extends IBaseCreateOrderCommand {
        /** For each welcome pack to send, provide information about the user and the subscription. */
        SendWelcomePackInformationList: ISendWelcomePackInformationDto[];
        /** Welcome pack sending strategy. */
        WelcomePackSendingStrategy?: IWelcomePackSendingStrategyDto;
    }
}
