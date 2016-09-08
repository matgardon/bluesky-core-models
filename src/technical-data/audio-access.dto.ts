 namespace bluesky.core.models.technicalData {
	/** This entity contains the information to configure, modify an access audio conference for a user. */
	export interface AudioAccessDto extends TechnicalAccessDto {
		/** Gets or sets Audio access type coming from the TI : Used values: MeetMe or Meet Me Secure.Additional values: Attended, FlexFlow, ManagementAlert, MeetMeDirect, MeetMeOperatorAssisted, Playback, TollFree.TODO ABE : Unused, duplicated with ConferenceType. To be removed from model (Domain, DAL OM...) */
		accessType: string;
		/** Gets or sets Extension */
		extension: string;
		/** Gets or sets Access Personal Information Number (used by User to access the service) */
		moderatorPIN: string;
		/** Gets or sets Access Personal Information Number (used by audio participant to access the service) */
		participantPIN: string;
		/** List of participants. */
		participants: ParticipantDto[];
	}
}
