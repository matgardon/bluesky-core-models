namespace bluesky.core.models.quote {
	/** Model for Rate Entry definition */
	export interface IRateEntryDefinition {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets the identifier of the rate schedule linked to the rate entry. */
		RateScheduleId: number;
		/** Gets or sets the rate entry type. */
		RateEntryType: string;
		/** Gets or sets the rate entry index. */
		Index: number;
		/** Gets or sets rating key */
		RatingKey: string;
		/** Gets or sets the rate entry audit. */
		Audit: number;
		/** Gets or sets the atomic target name priceable item id. */
		AtomicTargetNameId?: number;
		/** Gets or sets the compound target name product offering id. */
		CompoundTargetNameId?: number;
		/** Gets or sets the AuxiliaryPricingModel enumeration value */
		AuxiliaryPricingModelValue: string;
		/** Gets or sets the ParameterDataType enumeration value */
		ParameterDataTypeValue: string;
		/** Gets or sets the ProductCategory enumeration value */
		ProductCategoryValue: string;
		/** Gets or sets the OrderEntryDisplayMode enumeration value */
		OrderEntryDisplayModeValue: string;
		/** Gets or sets the ElementType enumeration value */
		ElementTypeValue: string;
		/** Gets or sets the element name. */
		ElementName: string;
		/** Gets or sets the display order. */
		DisplayOrder?: number;
		/** Gets or sets the is required flag. */
		IsRequired: boolean;
		/** Gets or sets the is selected flag. */
		IsSelected: boolean;
		/** Gets or sets the is default flag. */
		IsDefault: boolean;
		/** Gets or sets the Parameter Enumerator. */
		ParameterEnumerator: string;
		/** Gets or sets the Parameter Default Value. */
		ParameterDefaultValue: string;
		/** Gets or sets Is Value Required.selected */
		IsValueRequired?: boolean;
		/** Gets or sets Parameter Value. */
		ParameterValue: string;
		/** Gets or sets Is User Displayed. */
		IsUserDisplayed?: boolean;
		/** Gets or sets Is User Over Writable. */
		IsUserOverWritable?: boolean;
		/** Gets or sets Is Selfcare Manageable. */
		IsSelfcareManageable?: boolean;
		/** Gets or sets the IsSelfcareDisplayable. */
		IsSelfcareDisplayable?: boolean;
		/** Gets or sets IsAdminSelfcareManageable. */
		IsAdminSelfcareManageable?: boolean;
		/** Gets or sets  Is Invoice Printable. */
		IsInvoicePrintable?: boolean;
		/** Gets or sets Is Welcome Pack Printable. */
		IsWelcomePackPrintable?: boolean;
		/** Gets or sets the Technical Spec. */
		TechnicalSpec: string;
		/** Gets or sets Technical Instance ID. */
		TechnicalInstanceId: string;
		/** Gets or sets ODPInfo */
		ODPInfo: quote.IOdpInfoDefinition;
		/** Gets or sets the SubsidiaryName value. */
		SubsidiaryNameValue: string;
		/** Gets or sets Number of PO. */
		Number?: number;
		/** Gets or sets the Currency value. */
		CurrencyValue: string;
		/** Gets or sets the BusinessUnit value. */
		BusinessUnitValue: string;
		/** Gets or sets the CustomerSize value. */
		CustomerSizeValue: string;
		/** Gets or sets the ServiceType value. */
		ServiceTypeValue: string;
		/** Gets or sets the ServiceUnit value. */
		ServiceUnitValue: string;
		/** Gets or sets User tariff group to band mapping */
		UseTariffGroupToBandMapping: boolean;
		/** Gets or sets Use band rates */
		UseBandRates: boolean;
		/** Gets or sets  Use  bridging rates */
		UseBridgingRates: boolean;
		/** Gets or sets Use surcharge rates */
		UseSurchargeRates: boolean;
		/** Gets or sets the MainPricingModel enumeration value */
		MainPricingModelValue: string;
		/** Gets or sets product group name. */
		ProductGroupName: string;
		/** Gets or sets the ProductName value. */
		ProductNameValue: string;
		/** Gets or sets the DurationRoundingStrategy value. */
		DurationRoundingStrategyValue: string;
		/** Gets or sets the Retail Product Group Name Rate Entry */
		RetailProductGroupNameRateEntryId?: number;
		/** Gets or sets is retail selected */
		IsRetailSelected: boolean;
		/** Gets or sets the Partner Product Group Name Rate Entry */
		PartnerProductGroupNameRateEntryId?: number;
		/** Gets or sets is partner selected */
		IsPartnerSelected: boolean;
		/** Gets or sets the SourceCountryCode value. */
		SourceCountryCodeValue: string;
		/** Gets or sets the DestinationCountryCode value. */
		DestinationCountryCodeValue: string;
		/** Gets or sets the DirectDialInType value. */
		DirectDialInTypeValue: string;
		/** Gets or sets the PhoneKind value. */
		PhoneKindValue: string;
		/** Gets or sets Source region. */
		SourceRegion: string;
		/** Gets or sets band. */
		Band: string;
		/** Gets or sets Cluster. */
		Cluster: string;
		/** Gets or sets Tariff Group Retail / Partner Band Rate Per Minute. */
		TGRetailBandRatePerMinute: number;
		/** Gets or sets Use Tariff Group Retail / Partner Rate. */
		IsUseTariffGroupRetailRate: boolean;
		/** Gets or sets Tariff Group Retail / Partner Band Rate Per Minute. */
		TGPartnerBandRatePerMinute?: number;
		/** Gets or sets Use Tariff Group Retail / Partner Rate. */
		IsUseTariffGroupPartnerRate: boolean;
		/** Gets or sets Retail band rate per minute */
		RetailBandRatePerMinute?: number;
		/** Gets or sets Partner band rate per minute */
		PartnerBandRatePerMinute?: number;
		/** Gets or sets Retail bridging rate per minute */
		RetailBridgingRatePerMinute?: number;
		/** Gets or sets Partner bridging rate per minute */
		PartnerBridgingRatePerMinute?: number;
		/** Gets or sets the CountryCode value. */
		CountryCodeValue: string;
		/** Gets or sets Zone. */
		Zone: string;
		/** Gets or sets Retail surcharge rate per minute */
		RetailSurchargeRatePerMinute: number;
		/** Gets or sets Partner surcharge rate per minute */
		PartnerSurchargeRatePerMinute: number;
		/** Gets or sets Minute threshold start. */
		MinuteThresholdStart: number;
		/** Gets or sets Minute threshold end. */
		MinuteThresholdEnd: number;
		/** Gets or sets Retail discount percentage */
		RetailDiscountPercentage?: number;
		/** Gets or sets Partner discount percentage */
		PartnerDiscountPercentage?: number;
		/** Gets or sets the IncludedCharges value. */
		IncludedChargesValue: string;
		/** Gets or sets Number of free minutes */
		NumberOfFreeMinutes: number;
		/** Gets or sets Room size */
		RoomSize?: number;
		/** Gets or sets the billed hosts percentage. */
		BilledHostsPercentage?: number;
		/** Gets or sets is converted. */
		IsConverted?: boolean;
		/** Gets or sets the number of minimum active hosts. */
		MinimumActiveHosts?: number;
		/** Gets or sets the number of purchased licenses. */
		PurchasedLicenses?: number;
		/** Gets or sets the port overage rate. */
		PortOverageRate?: number;
		/** Gets or sets the LicenseFeePriceableItemId */
		LicenseFeePriceableItemId?: number;
		/** Gets or sets the LicenseFeeCalculationMode value. */
		LicenseFeeCalculationModeValue: string;
		/** Gets or sets Service type group */
		ServiceTypeGroup?: number;
		/** Gets or sets the MiscChargeType value. */
		MiscChargeTypeValue: string;
		/** Gets or sets Rate per unit */
		RatePerUnit: number;
		/** Gets or sets Flat rate */
		FlatRate: number;
		/** Gets or sets the OptionChargeType value. */
		OptionChargeTypeValue: string;
		/** Non recurring charge amount */
		NRcAmount: number;
		/** Gets or sets Recurring charge amount */
		RCAmount: number;
		/** Gets or sets number of units. */
		UnitValue: number;
		/** Gets or sets Unit amount */
		UnitAmount: number;
		/** Gets or sets base amount */
		BaseAmount: number;
		/** Gets or sets Flat unconditional discount amount */
		FlatUnconditionalDiscountAmount: number;
		/** Gets or sets Flat discount amount */
		FlatDiscountAmount: number;
		/** Gets or sets DiscountPercent */
		DiscountPercent: number;
		/** Gets or sets Qualifier condition. */
		Qualifier?: number;
		/** Gets or sets the QualifierOperator value. */
		QualifierOperatorValue: string;
		/** Commitment start date. */
		CommitmentStartDate?: Date;
		/** Gets or sets the CommitmentFrequency value. */
		CommitmentFrequencyValue: string;
		/** Commitment amount. */
		CommitmentAmount?: number;
		/** Gets or sets the CancellationFeePolicy value. */
		CancellationFeePolicyValue: string;
		/** Gets or sets the frequency value. */
		FrequencyValue: string;
		/** Global discount threshold. */
		Threshold?: number;
		/** Global discount discount percentage. */
		DiscountPercentage?: number;
		/** Gets or Sets Is Flat Rate Used */
		IsFlatRateUsed: boolean;
		/** Gets or Sets Is Unit Rate Used */
		IsUnitRateUsed: boolean;
	}
}
