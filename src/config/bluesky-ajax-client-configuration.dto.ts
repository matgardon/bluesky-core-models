namespace bluesky.core.models.clientConfig {
    import UserSsoDto = models.userManagement.IUserSsoDto;

    export interface IAjaxClientConfigurationDictionnary {
        /**
         * Dictionnary of client configuration per-endpoint.
         * @param endpointType : of EndpoinTypeEnum type, but it cannot be strongly typed due too TS not implementing it atm: https://github.com/Microsoft/TypeScript/issues/2491
         * @returns {} 
         */
        [endpointType: number]: clientConfig.IAjaxClientEndpointConfigurationDto;
    }

    export interface IBlueskyAjaxClientConfigurationDto {
        /**
         * As provided by the server, the dictionnary of client config per endpoint.
         */
        EndpointConfigurationDictionnary: IAjaxClientConfigurationDictionnary;

        CurrentUserRole: string;

        //TODO MGA: only used by the hub ATM, and not strongly typed to other apps: to factorize or change ?
        CurrentUser?: UserSsoDto;
    }
}
