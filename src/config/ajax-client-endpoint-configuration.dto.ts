namespace bluesky.core.model.clientConfig {
	export interface IAjaxClientEndpointConfigurationDto {
		EndpointBaseURL: string;
		EndpointSuffix: string;
		AuthToken: string;
		AuthTokenValidityEndDate: string;
	}
}
