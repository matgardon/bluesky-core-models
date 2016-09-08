 namespace bluesky.core.models.account {
    /** Dto of a group.The Group is an optional node in the customer hierarchy.It is used for invoicing structure and reporting purposes. */
    export interface GroupDto extends AccountDto {
        /** The Primary Group view contains attributes specific to Group and Primary Group account. These attributes include specifics of physical platform to which children accounts (Users and their Accesses) were provisioned. */
        primaryGroupView: PrimaryGroupViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        technicalAdminContactView: TechnicalAdminContactViewDto;
    }
}
