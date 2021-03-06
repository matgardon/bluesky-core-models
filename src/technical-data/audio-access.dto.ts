﻿ namespace bluesky.core.model.technicalData {
	/** This entity contains the information to configure, modify an access audio conference for a user. */
	export interface IAudioAccessDto extends technicalData.ITechnicalAccessDto {
		/** Gets or sets Audio access type coming from the TI : Used values: MeetMe or Meet Me Secure.Additional values: Attended, FlexFlow, ManagementAlert, MeetMeDirect, MeetMeOperatorAssisted, Playback, TollFree.TODO ABE : Unused, duplicated with ConferenceType. To be removed from model (Domain, DAL OM...) */
		AccessType: string;
		/** Gets or sets Extension */
		Extension: string;
		/** Gets or sets Access Personal Information Number (used by User to access the service) */
		ModeratorPIN: string;
		/** Gets or sets Access Personal Information Number (used by audio participant to access the service) */
		ParticipantPIN: string;
		/** List of participants. */
		Participants: technicalData.IParticipantDto[];
	}
}
