namespace bluesky.core.model.quote {
	/** DTO of an sign off decision. */
	export interface ISignOffDecisionDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the approver login. */
		ApproverLogin: string;
		/** Gets or sets the approver display name. */
		ApproverDisplayName: string;
		/** Gets or sets the approver decision. */
		Decision: boolean;
		/** Gets or sets the approval decision date. */
		SignOffDate: Date;
		/** Gets or sets a decision comment. */
		Comment: string;
		/** Gets the UserRole. */
		UserRole: IOrderManagementEnumerationDto;
	}
}
