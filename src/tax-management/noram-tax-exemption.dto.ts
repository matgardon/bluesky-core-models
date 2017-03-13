namespace bluesky.core.model.taxManagement {
    export interface INoramTaxExemptionDto extends IResourceBase {
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