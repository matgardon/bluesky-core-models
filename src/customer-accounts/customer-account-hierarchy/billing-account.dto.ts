 namespace bluesky.core.models.account {
    /** Dto of a billing account.The Billing account represents the billing point in the hierarchy.This is the account which collects all charges from itself and all sub-accounts.Billing account defines invoice currency, billing frequency and receives theinvoice.It is linked to an Arkadin subsidiary (this allows to identify the uniqueNavision instance that support the Billing account).By default the Billing account is the entity that support the subscriptions(exception for Event, trial accounts ...).Please note that in the Wholesaler case, the Billing account is a dummy(unknown by Navision, no invoice sent).Please note that in the trial account case, the Billing account is a dummy (forinternal use only). */
    export interface IBillingAccountDto extends account.IAccountDto {
        /** Billing account view */
        BillingView: account.IBillingViewDto;
        /** The Contact view of type Bill-to contains the contact and address of a billable entity. */
        BillToView: account.IBillToContactViewDto;
        /** The  Contact view of type Ship-to contains the contact and address where the invoice is sent to. */
        ShipToView: account.IContactViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: account.ITechnicalAdminContactViewDto;
        /** The Contact view of type invoice carbon copy contains the additional contacts who will receive the invoice. */
        InvoiceCarbonCopyRecipients: account.IContactViewDto[];
        /** The Contact view of type welcome pack carbon copy contains the additional contacts who will receive the welcome packs. */
        WelcomePackCarbonCopyRecipients: account.IContactViewDto[];
    }
}
