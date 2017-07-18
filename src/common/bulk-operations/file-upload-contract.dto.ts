namespace bluesky.core.model.bulk {
    export interface IFileUploadContractDto {
        MaxFileSize: number;
        SupportedFileExtensionList: Array<string>;
    }
}