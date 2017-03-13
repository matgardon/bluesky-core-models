 namespace bluesky.core.model.account {
	/** Dto of a contact view.Contains contact and address information. */
	export interface IContactViewDto extends IResourceBase {
		/** Gets or sets the name that may be filled in for invoicing further purposes. */
		Name1: string;
		/** Gets or sets the additionnal name that may be filled in for invoicing further purposes. */
		Name2: string;
		/** Gets or sets the address first line. */
		Address1: string;
		/** Gets or sets the address second line. */
		Address2: string;
		/** Gets or sets the address third line. */
		Address3: string;
		/** Gets or sets the city or town. */
		City: string;
		/** Gets or sets the the country code. */
		CountryCode: string;
		/** Gets or sets the e-mail address. */
		Email: string;
		/** Gets or sets the fax number. */
		FacsimileTelephoneNumber: string;
		/** Gets or sets the first name. */
		FirstName: string;
		/** Gets or sets the last name. */
		LastName: string;
		/** Gets or sets the local address first line. */
		LocalAddress1: string;
		/** Gets or sets the local address second line. */
		LocalAddress2: string;
		/** Gets or sets the local address third line. */
		LocalAddress3: string;
		/** Gets or sets the local city or town. */
		LocalCity: string;
		/** Gets or sets the local first name. */
		LocalFirstName: string;
		/** Gets or sets the local last name. */
		LocalLastName: string;
		/** Gets or sets the local middle initial. */
		LocalMiddleInitial: string;
		/** Gets or sets the local salutation. */
		LocalSalutation: string;
		/** Gets or sets the local state or province. */
		LocalState: string;
		/** Gets or sets the local county. */
		LocalCounty: string;
		/** Gets or sets the middle initial. */
		MiddleInitial: string;
		/** Gets or sets the telephone number. */
		PhoneNumber: string;
		/** Gets or sets the salutation.No academic information (Professor,...), no job title captured. */
		Salutation: string;
		/** Gets or sets the state or province. */
		State: string;
		/** Gets or sets the zip or postal code. */
		Zip: string;
		/** Gets or sets the company. */
		Company: string;
		/** Gets or sets the county: a region which has its own local government. */
		County: string;
		/** Gets the language. */
		CommunicationLanguage: string;
		/** Gets the contact type. */
		ContactType: string;
		/** Gets the country name. */
		CountryName: string;
		/** Gets the time zone identifier. */
		TimeZoneId: string;
	}
}
