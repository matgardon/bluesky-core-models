 namespace bluesky.core.model.account {
    /** Dto of a group.The Group is an optional node in the customer hierarchy.It is used for invoicing structure and reporting purposes. */
    export interface IGroupDto extends IAccountDto {
        /** The Primary Group view contains attributes specific to Group and Primary Group account. These attributes include specifics of physical platform to which children accounts (Users and their Accesses) were provisioned. */
        PrimaryGroupView: IPrimaryGroupViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: ITechnicalAdminContactViewDto;
    }
}
