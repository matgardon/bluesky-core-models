 namespace bluesky.core.models.technicalData {
	/** DDIs (Direct Dial In) correspond to external conference number which permits tothe customer to access an audio conference. */
	export interface IDirectDialInDto extends models.IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets Unique identifier of a DDI */
		InternationalDirectDialIn: string;
		/** Identifies the carrier of a DDI */
		Carrier: string;
		/** Identifies the City of a DDI */
		City: string;
		/** Identifies the Country of a DDI */
		Country: string;
		/** Description of a DDI */
		Description: string;
		/** Identifies the spoken language of a DDI */
		Language: string;
		/** Displayed Number of a DDI */
		PresentedVisualDirectDialIn: string;
		/** Identifies the Reference Order of a DDI */
		ReferenceOrder: string;
		/** Server address of the bridge AMG on which a DDI is provisioned */
		AMGAddress: string;
		/** Server port of the bridge AMG on which a DDI is provisioned */
		AMGPort: number;
		/** Identifies the DDI country in ISO 3166-2 format */
		IsoCountryCode: string;
		/** Regional area code of the visual DDI */
		TelephoneAreaCode: string;
		/** Telephone Country Code */
		TelephoneCountryCode: string;
		/** Welcome Message */
		WelcomeMessage: string;
		/** Waiting Music */
		WaitingMusic: string;
		/** Flag indicating whether the DDI is dedicated.True if the field Role is equal to Dedicated. False if Role is equal to Shared. */
		IsDedicated: boolean;
		/** Flag indicating whether the DDI is branded. */
		IsBranded?: boolean;
		/** When a DDI is returned in the list of access' DDIs, this flag indicates if the DDI is chosen by the Technical Inventory as the priorized one for a given type and a given usage.The Technical Inventory chooses a DDI based on its role, the user's primary group and country, and the service platform's country. */
		IsLocal: boolean;
		/** Gets or sets Required action on DDI */
		DirectDialInAction: string;
		/** Gets or sets Role of the DDI */
		DirectDialInRole: string;
		/** Type of conference that is assigned to the DDI */
		ConferenceType: string;
		/** Booking status of a DDI */
		Status: string;
		/** Type of the DDI */
		DirectDialInType: string;
		/** List of TerminatingNumbers */
		TerminatingNumbers: technicalData.ITerminatingNumberDto[];
	}
}
