 namespace bluesky.core.model.account {
	/** Dto of a local logo.The Local Logo is an optional node in the customer hierarchy, used for groupingor representing subsidiaries or geolocations of the Customer organization. */
	export interface ILocalLogoDto extends IAccountDto {
		/** The Local Logo view contains attributes related to Local Logo setup. */
		LocalLogoView: ILocalLogoViewDto;
		/** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: ITechnicalAdminContactViewDto;
	}
}
