namespace bluesky.core.models.clientConfig {
	export interface AjaxClientEndpointConfigurationDto {
		endpointBaseURL: string;
		endpointSuffix: string;
		authToken: string;
		authTokenValidityEndDate: Date;
	}
}
