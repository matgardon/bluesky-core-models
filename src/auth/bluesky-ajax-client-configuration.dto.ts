namespace bluesky.core.models.auth {
	export interface BlueskyAjaxClientConfigurationDto {
		coreApiConfiguration: AjaxClientEndpointConfigurationDto;
		marketingApiConfiguration: AjaxClientEndpointConfigurationDto;
		selfcareApiConfiguration: AjaxClientEndpointConfigurationDto;
		quoteWizardConfiguration: AjaxClientEndpointConfigurationDto;
		orderEntryConfiguration: AjaxClientEndpointConfigurationDto;
		orderTrackingConfiguration: AjaxClientEndpointConfigurationDto;
		technicalInventoryConfiguration: AjaxClientEndpointConfigurationDto;
		metranetConfiguration: AjaxClientEndpointConfigurationDto;
		salesforceConfiguration: AjaxClientEndpointConfigurationDto;
		templateGeneratorConfiguration: AjaxClientEndpointConfigurationDto;
		defaultUserRole: string;
	}
}
