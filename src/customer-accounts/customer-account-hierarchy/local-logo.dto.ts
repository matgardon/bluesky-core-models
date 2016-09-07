declare namespace bluesky.core.models.account {
	/** Dto of a local logo.The Local Logo is an optional node in the customer hierarchy, used for groupingor representing subsidiaries or geolocations of the Customer organization. */
	interface LocalLogoDto extends AccountDto {
		/** The Local Logo view contains attributes related to Local Logo setup. */
		localLogoView: LocalLogoViewDto;
		/** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        technicalAdminContactView: TechnicalAdminContactViewDto;
	}
}
