namespace bluesky.core.models.clientConfig {
    import UserSsoDto = bluesky.core.models.userManagement.UserSsoDto;

    export interface AjaxClientConfigurationDictionnary {
        /**
         * Dictionnary of client configuration per-endpoint.
         * @param endpointType : of EndpoinTypeEnum type, but it cannot be strongly typed due too TS not implementing it atm: https://github.com/Microsoft/TypeScript/issues/2491
         * @returns {} 
         */
        [endpointType: number]: AjaxClientEndpointConfigurationDto;
    }

    export interface BlueskyAjaxClientConfigurationDto {
        /**
         * As provided by the server, the dictionnary of client config per endpoint.
         */
        endpointConfigurationDictionnary: AjaxClientConfigurationDictionnary;

        defaultUserRole: string;

        //TODO MGA: only used by the hub ATM, and not strongly typed to other apps: to factorize or change ?
        currentUser?: UserSsoDto;
    }
}
