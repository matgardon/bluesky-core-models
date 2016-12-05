namespace bluesky.core.models.taxManagement {
    export interface NoramTaxExemptionDto extends IResourceBase {
        Level: TaxExemptTypeEnum;
        Location: number;
        CertificateId: string;
        StartDate: string;
        ExpirationDate: string;
        TaxExemptionTypes: Array<ITaxExemptionTypeDto>;
        TaxAction: TaxActionEnum;
        IsExpired: boolean;
    }
}