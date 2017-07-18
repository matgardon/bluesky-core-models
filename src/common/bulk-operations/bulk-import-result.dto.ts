module bluesky.core.model.bulk {

    export interface IBulkImportResultDto {
        //TODO MGA: support generic types if needed to have buk-specific entries properties.
        //export interface IBulkImportResultDTO<T1 extends IBulkImportEntryErrorsDTO<T2>, T2 extends IBulkImportEntryErrorDTO > {

        /**
         * The total number of lines processed during import.
         */
        TotalLinesCount: number;

        /**
         * The number of valid lines in the file.
         */
        ValidLinesCount: number;

        /**
         * The number of lines that didn't match all validation criterias.
         * This is a shortcut to TotalLinesCount - ValidLinesCount.
         */
        LinesInErrorCount: number;

        /**
         * Global flag to indicate if the file is conform to contracts and could be processe.
         * A file can be processed without all its entries being valid, this flag indicates a well-formed file.
         */
        IsValid: boolean;

        /**
         * The filename (with extension) of the processed file.
         */
        Filename: string;

        /**
         * List of global errors not specific to a single line in the file.
         * These errors can concern global validations of data (double entries for expl.) or problems with the file itself.
         */
        GlobalErrors: string[];

        /**
         * List of entries with specific errors (as opposed to global errors).
         * The format of <see cref="BulkImportEntryInErrorDTO{T}"/>"/> includes necessary informations to handle line-specific errors.
         */
        EntriesInError: IBulkImportEntryErrorsDto[];
    }
}