namespace bluesky.core.models.clientConfig {
    import UserSsoDto = models.userManagement.IUserSsoDto;

    export interface IAjaxClientConfigurationDictionnary {
        /**
         * Dictionnary of client configuration per-endpoint.
         * @param endpointType : of EndpoinTypeEnum type, but it cannot be strongly typed to the related enum (EndpointTypeEnum) due too TS not implementing it atm: https://github.com/Microsoft/TypeScript/issues/2491. So we use the string representation of the enum as key.
         * @returns {} 
         */
        [endpointType: string]: clientConfig.IAjaxClientEndpointConfigurationDto;
    }

    export interface IBlueskyAjaxClientConfigurationDto {
        /**
         * TODO MGA: C# json native json serializer doesn't handle dictionnaries with enum keys, so we use an array of endpoint config based on string representation. http://stackoverflow.com/questions/2892910/problems-with-json-serialize-dictionaryenum-int32
         */
        EndpointConfigurationDictionnary: IAjaxClientConfigurationDictionnary;

        CurrentUserRole: string;

        //TODO MGA: only used by the hub ATM, and not strongly typed to other apps: to factorize or change ?
        CurrentUser?: UserSsoDto;
    }
}
