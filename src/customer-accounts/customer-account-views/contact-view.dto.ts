declare namespace bluesky.core.models.account {
	/** Dto of a contact view.Contains contact and address information. */
	interface ContactViewDto extends ResourceBase {
		/** Gets or sets the name that may be filled in for invoicing further purposes. */
		name1: string;
		/** Gets or sets the additionnal name that may be filled in for invoicing further purposes. */
		name2: string;
		/** Gets or sets the address first line. */
		address1: string;
		/** Gets or sets the address second line. */
		address2: string;
		/** Gets or sets the address third line. */
		address3: string;
		/** Gets or sets the city or town. */
		city: string;
		/** Gets or sets the the country code. */
		countryCode: string;
		/** Gets or sets the e-mail address. */
		email: string;
		/** Gets or sets the fax number. */
		facsimileTelephoneNumber: string;
		/** Gets or sets the first name. */
		firstName: string;
		/** Gets or sets the last name. */
		lastName: string;
		/** Gets or sets the local address first line. */
		localAddress1: string;
		/** Gets or sets the local address second line. */
		localAddress2: string;
		/** Gets or sets the local address third line. */
		localAddress3: string;
		/** Gets or sets the local city or town. */
		localCity: string;
		/** Gets or sets the local first name. */
		localFirstName: string;
		/** Gets or sets the local last name. */
		localLastName: string;
		/** Gets or sets the local middle initial. */
		localMiddleInitial: string;
		/** Gets or sets the local salutation. */
		localSalutation: string;
		/** Gets or sets the local state or province. */
		localState: string;
		/** Gets or sets the local county. */
		localCounty: string;
		/** Gets or sets the middle initial. */
		middleInitial: string;
		/** Gets or sets the telephone number. */
		phoneNumber: string;
		/** Gets or sets the salutation.No academic information (Professor,...), no job title captured. */
		salutation: string;
		/** Gets or sets the state or province. */
		state: string;
		/** Gets or sets the zip or postal code. */
		zip: string;
		/** Gets or sets the company. */
		company: string;
		/** Gets or sets the county: a region which has its own local government. */
		county: string;
		/** Gets the language. */
		communicationLanguage: string;
		/** Gets the contact type. */
		contactType: string;
		/** Gets the country name. */
		countryName: string;
		/** Gets the time zone identifier. */
		timeZoneId: string;
	}
}
