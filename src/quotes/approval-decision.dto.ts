namespace bluesky.core.models.quote {

    /** DTO of an approval decision. */
	interface IApprovalDecisionDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the approver login. */
		ApproverLogin: string;
		/** Gets or sets the approver display name. */
		ApproverDisplayName: string;
		/** Gets or sets the approver decision. */
		Decision: boolean;
		/** Gets or sets the approval decision date. */
		Date: Date;
		/** Gets or sets a decision comment. */
		Comment: string;
		/** Gets or sets IsLastIterationDecision flag. */
		IsLastIterationDecision: boolean;
		/** Gets the UserRole. */
		UserRole: IOrderManagementEnumerationDto;
	}
}
