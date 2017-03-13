namespace bluesky.core.model.customerOrder {
    /** Dto of WelcomePackInfo.
    * It contains information to send to the Template Generator for the user recipient strategy. */
    export interface IWelcomePackInfoDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** The email of the target Technical Admin Contact. */
        AdminEmail: string;
        /** Language of the target Technical Admin Contact. */
        AdminLanguage: string;
        /** The CountryName of the target Technical Admin Contact. */
        AdminCountryName: string;
        /** The TimeZone of the target Technical Admin Contact. */
        AdminTimeZone: string;
        /** Priority of a Welcome Pack. */
        WelcomePackPriority: string;
    }
}
