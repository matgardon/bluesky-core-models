namespace bluesky.core.models.clientConfig {
	export interface IAjaxClientEndpointConfigurationDto {
		EndpointBaseURL: string;
		EndpointSuffix: string;
		AuthToken: string;
		AuthTokenValidityEndDate: Date;
	}
}
