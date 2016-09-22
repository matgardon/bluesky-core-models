 namespace bluesky.core.models.account {
	/** Dto of a logo.A Logo represents the Customer which is in relation with Arkadin or Arkadin'spartner. It's the root of any customer hierarchy.In the case of WholeSale the Logo is a dummy node (Arkadin IS hasn't got thecomplete view of the wholesaler's customer).In the case of trial account the Logo is a dummy node.A logo is associated to a Arkadin subsidiary (or to Arkadin SAS). */
	export interface ILogoDto extends bluesky.core.models.account.IAccountDto {
		/** Logo view */
		LogoView: bluesky.core.models.account.ILogoViewDto;
		/** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
		TechnicalAdminContactView: bluesky.core.models.account.ITechnicalAdminContactViewDto;
	}
}
