namespace bluesky.core.model.systemInfo {
    /** DTO of the Order Management Database Version. */
    export interface IDatabaseVersionDto {
        /** Gets or sets version of the [OrderManagement] Database at a current date. */
        Version: string;
        /** Gets or sets date of the specified version of the [OrderManagement] Database. */
        StartDate: Date;
    }
}
