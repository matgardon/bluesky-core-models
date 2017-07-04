namespace bluesky.core.model.bulk {

    export interface IBulkImportEntryErrorDTO {

        /**
         * The ErrorMessage
         */
        ErrorMessage : string;

        /**
         * The field that is causing an error (corresponds to the column in the excel file)
         */
        FieldName : string;

        /**
         * The Value that is causing the error
         */
        AttemptedValue : string;
}
}