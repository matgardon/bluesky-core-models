declare namespace bluesky.core.models.account {
	/** Dto of a Legal Entity.The Legal Entity is a node acting as a Payer template for the Billing Account. */
	interface LegalEntityDto extends AccountDto {
		/** The Contact view of type Bill-to contains the contact and address of a billable entity. */
		billToView: BillToContactViewDto;
		/** The Legal Entity view contains attributes related to Legal Entity setup. */
		legalEntityView: LegalEntityViewDto;
	}
}
