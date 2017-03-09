 namespace bluesky.core.models.account {
	/** Dto of a local logo.The Local Logo is an optional node in the customer hierarchy, used for groupingor representing subsidiaries or geolocations of the Customer organization. */
	export interface ILocalLogoDto extends bluesky.core.models.account.IAccountDto {
		/** The Local Logo view contains attributes related to Local Logo setup. */
		LocalLogoView: bluesky.core.models.account.ILocalLogoViewDto;
		/** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: bluesky.core.models.account.ITechnicalAdminContactViewDto;
	}
}
