 namespace bluesky.core.models.technicalData {
	/** DDIs (Direct Dial In) correspond to external conference number which permits tothe customer to access an audio conference. */
	export interface DirectDialInDto extends ResourceBase {
		/** Gets or sets the unique identifier. */
		id: number;
		/** Gets or sets Unique identifier of a DDI */
		internationalDirectDialIn: string;
		/** Identifies the carrier of a DDI */
		carrier: string;
		/** Identifies the City of a DDI */
		city: string;
		/** Identifies the Country of a DDI */
		country: string;
		/** Description of a DDI */
		description: string;
		/** Identifies the spoken language of a DDI */
		language: string;
		/** Displayed Number of a DDI */
		presentedVisualDirectDialIn: string;
		/** Identifies the Reference Order of a DDI */
		referenceOrder: string;
		/** Server address of the bridge AMG on which a DDI is provisioned */
		aMGAddress: string;
		/** Server port of the bridge AMG on which a DDI is provisioned */
		aMGPort: number;
		/** Identifies the DDI country in ISO 3166-2 format */
		isoCountryCode: string;
		/** Regional area code of the visual DDI */
		telephoneAreaCode: string;
		/** Telephone Country Code */
		telephoneCountryCode: string;
		/** Welcome Message */
		welcomeMessage: string;
		/** Waiting Music */
		waitingMusic: string;
		/** Flag indicating whether the DDI is dedicated.True if the field Role is equal to Dedicated. False if Role is equal to Shared. */
		isDedicated: boolean;
		/** Flag indicating whether the DDI is branded. */
		isBranded: boolean;
		/** When a DDI is returned in the list of access' DDIs, this flag indicates if the DDI is chosen by the Technical Inventory as the priorized one for a given type and a given usage.The Technical Inventory chooses a DDI based on its role, the user's primary group and country, and the service platform's country. */
		isLocal: boolean;
		/** Gets or sets Required action on DDI */
		directDialInAction: string;
		/** Gets or sets Role of the DDI */
		directDialInRole: string;
		/** Type of conference that is assigned to the DDI */
		conferenceType: string;
		/** Booking status of a DDI */
		status: string;
		/** Type of the DDI */
		directDialInType: string;
		/** List of TerminatingNumbers */
		terminatingNumbers: TerminatingNumberDto[];
	}
}
