namespace bluesky.core.model.account {
    export interface IAccountHierarchyTreeNodeDto {
        Uid: string;
        UserName: string;
        AccountType: string;

        // TODO MGA: add support from CAPI
        IsOnline: boolean;
        
        Children: Array<IAccountHierarchyTreeNodeDto>;
    }

}