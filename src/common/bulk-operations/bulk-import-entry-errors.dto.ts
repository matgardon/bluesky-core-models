namespace bluesky.core.model.bulk {
    export interface IBulkImportEntryErrorsDto {
        //TODO MGA: support generic types if needed to have buk-specific entries properties.
        //export interface IBulkImportEntryErrorsDTO<T extends IBulkImportEntryErrorDTO> {

        /**
         * The line number in the excel file this entry corresponds to.
         */
        LineNumber: number;

        /**
         * List of error messages each concerning a specific validation error of this entry.
         */
        Errors: IBulkImportEntryErrorDto[];

        /**
         * Shortcut to display a concatenation of all errors concerning this line entry.
         */
        ErrorMessage: string;
    }
}