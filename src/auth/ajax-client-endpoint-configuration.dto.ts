namespace bluesky.core.models.auth {
	export interface AjaxClientEndpointConfigurationDto {
		endpointBaseURL: string;
		endpointSuffix: string;
		authToken: string;
		authTokenValidityEndDate: Date;
	}
}
