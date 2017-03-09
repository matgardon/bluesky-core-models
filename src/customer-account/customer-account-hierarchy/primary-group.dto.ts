﻿ namespace bluesky.core.models.account {
    /** Dto of a primary group.The Primary group is a mandatory group of Users.It represents Customer's organizational physical Site, Department, Office orLocation or used purely for grouping purposes.The Primary group is linked to all services platforms used by the users. */
    export interface IPrimaryGroupDto extends bluesky.core.models.account.IAccountDto {
        /** The Primary Group view contains attributes specific to Group and Primary Group account. These attributes include specifics of physical platform to which children accounts (Users and their Accesses) were provisioned. */
        PrimaryGroupView: bluesky.core.models.account.IPrimaryGroupViewDto;
        /** Dispatching viewContains attributes related to account segmentation and dispatching. */
        DispatchingView: bluesky.core.models.account.IDispatchingViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: bluesky.core.models.account.ITechnicalAdminContactViewDto;
    }
}