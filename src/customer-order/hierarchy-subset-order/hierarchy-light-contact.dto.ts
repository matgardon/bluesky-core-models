namespace bluesky.core.command.customerOrder {
	/** Contact information used in Create Hierarchy light order */
	export interface IHierarchyLightContactDto {
		/** Contact First Name */
		FirstName: string;
		/** Contact Last name */
		LastName: string;
		/** Contact address */
		Address: string;
		/** Contact City */
		City: string;
		/** Contact Zip Code */
		ZipCode: string;
		/** Contact country */
		Country: string;
		/** Contact state */
		State: string;
		/** Contact County (US Only) */
		County: string;
		/** Contact Phone Number */
		PhoneNumber: string;
		/** Contact Email */
		Email: string;
	}
}
