namespace bluesky.core.model.clientConfig {
    import UserSsoDto = userManagement.IUserSsoDto;

    export interface IBlueskyAjaxClientConfigurationDto {
        /**
         * Dictionnary of client configuration per-endpoint.
         * @param endpointType : EndpoinTypeEnum type string representation. It cannot be strongly typed to the related enum (EndpointTypeEnum) due to TS not implementing it atm: https://github.com/Microsoft/TypeScript/issues/2491. So we use the string representation of the enum as key.
         * @returns {}
         *
         * TODO MGA: C# json native json serializer doesn't handle dictionnaries with enum keys, so we use an array of endpoint config based on string representation. http://stackoverflow.com/questions/2892910/problems-with-json-serialize-dictionaryenum-int32
         */
        EndpointConfigurationDictionnary: { [endpointType: string]: clientConfig.IAjaxClientEndpointConfigurationDto; };

        CurrentUserRole: string;

        //TODO MGA: only used by the hub ATM, and not strongly typed to other apps: to factorize or change ?
        CurrentUser?: UserSsoDto;
    }
}
