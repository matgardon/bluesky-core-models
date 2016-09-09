namespace bluesky.core.models.auth {
    import UserSsoDto = bluesky.core.models.userManagement.UserSsoDto;

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
        //TODO MGA: only used by the hub ATM, and not strongly typed to other apps: to factorize or change ?
        currentUser?: UserSsoDto;
	}
}
