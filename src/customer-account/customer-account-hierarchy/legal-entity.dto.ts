 namespace bluesky.core.models.account {
	/** Dto of a Legal Entity.The Legal Entity is a node acting as a Payer template for the Billing account. */
	export interface ILegalEntityDto extends bluesky.core.models.account.IAccountDto {
		/** The Contact view of type Bill-to contains the contact and address of a billable entity. */
		BillToView: bluesky.core.models.account.IBillToContactViewDto;
		/** The Legal Entity view contains attributes related to Legal Entity setup. */
		LegalEntityView: bluesky.core.models.account.ILegalEntityViewDto;
	}
}
