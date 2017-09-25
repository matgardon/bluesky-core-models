namespace bluesky.core.model.offer {

        export interface ITariffGroupToBandMappingRateEntryDto extends IRateEntryWithPriceDto{

                // Gets or sets Source region.
                // Optional rating key to differentiate rates per minute depending on source region or city. 
                // This field needs to be provided by Mediation in the incoming CDRs; 
                // if not provided then it is ignored and country level granularity is used to retrieve correct rates.
                SourceRegion: string;

                // Gets or sets band,
                // allows for grouping different TGs into single Band which is used as identification of tariff band 
                // (as used in BandRates PT)
                Band: string;

                // Gets or sets Cluster – allows for grouping different TGs into single Cluster which is used as identification of minute pack 
                // bucket (as used in MinutePackSettings PT). This column currently is relevant for Minute Pack pricing model only 
                // and is not used in any other pricing models.
                Cluster: string;

                // Gets or sets Tariff Group Retail / Partner Band Rate Per Minute – rate per minute as applicable for Telecom part of the 
                // charge; note if this field is populated and the Use Tariff Group Retail or Partner Rate fields are set to TRUE 
                // then system will use this rate to calculate amount for Telecom part of the call (as opposed to use TariffGroup to
                // Band to Rate resolution performed when this field is zero and the use Tariff Group Retail or Partner Rate fields 
                // are set to FALSE). If a zero rate is required, then the rate value should be set to 0.00 and the accompanying Use
                // field set to TRUE. Please note that it is possible to override Band Rate Per Minute independently for retail and
                TGRetailBandRatePerMinute: number;

                // Gets or sets Use Tariff Group Retail / Partner Rate – used in conjunction with the rates described above. When set to TRUE 
                // that rate will be used to calculate the amount for the Telecom part of the call
                IsUseTariffGroupRetailRate: boolean;

                // Gets or sets Tariff Group Retail / Partner Band Rate Per Minute – rate per minute as applicable for Telecom part of the 
                // charge; note if this field is populated and the Use Tariff Group Retail or Partner Rate fields are set to TRUE 
                // then system will use this rate to calculate amount for Telecom part of the call (as opposed to use TariffGroup to
                // Band to Rate resolution performed when this field is zero and the use Tariff Group Retail or Partner Rate fields 
                // are set to FALSE). If a zero rate is required, then the rate value should be set to 0.00 and the accompanying Use
                // field set to TRUE. Please note that it is possible to override Band Rate Per Minute independently for retail and partners
                TGPartnerBandRatePerMinute: number;

                // Gets or sets Use Tariff Group Retail / Partner Rate – used in conjunction with the rates described above. When set to TRUE 
                // that rate will be used to calculate the amount for the Telecom part of the call
                IsUseTariffGroupPartnerRate: boolean;

                SourceCountryCode: IOrderManagementEnumerationDto;

                /// Gets or sets the DestinationCountryCode.
                DestinationCountryCode: IOrderManagementEnumerationDto;

                /// Gets or sets the DirectDialInType.
                DirectDialInType: IOrderManagementEnumerationDto;

                /// Gets or sets the PhoneKind.
                PhoneKind: IOrderManagementEnumerationDto;

                /// Gets or sets the ServiceType.
                ServiceType: IOrderManagementEnumerationDto;
        }
}