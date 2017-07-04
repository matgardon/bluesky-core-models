namespace bluesky.core.model {
    /** Return DTO of an endpoint parsing input param for business validation. */
    export interface IInputValidationResultDto {
        IsValid: boolean;
        ValidationErrorMessages: string[];
    }
}