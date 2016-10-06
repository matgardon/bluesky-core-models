









































var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var models;
        (function (models) {
            var clientConfig;
            (function (clientConfig) {
                /**
                 * Enum generated from the server to know the list of supported endpoint configuration.
                 */
                (function (EndpointTypeEnum) {
                    /**
                     * Origin domain from which the current client was loaded.
                     */
                    EndpointTypeEnum[EndpointTypeEnum["CurrentDomain"] = 0] = "CurrentDomain";
                    // APIs
                    EndpointTypeEnum[EndpointTypeEnum["CoreApi"] = 1] = "CoreApi";
                    EndpointTypeEnum[EndpointTypeEnum["MarketingApi"] = 2] = "MarketingApi";
                    EndpointTypeEnum[EndpointTypeEnum["SelfcareApi"] = 3] = "SelfcareApi";
                    // OM apps
                    EndpointTypeEnum[EndpointTypeEnum["QuoteWizard"] = 4] = "QuoteWizard";
                    EndpointTypeEnum[EndpointTypeEnum["OrderEntry"] = 5] = "OrderEntry";
                    EndpointTypeEnum[EndpointTypeEnum["OrderTracking"] = 6] = "OrderTracking";
                    // Internal apps
                    EndpointTypeEnum[EndpointTypeEnum["Metranet"] = 7] = "Metranet";
                    EndpointTypeEnum[EndpointTypeEnum["TechnicalInventory"] = 8] = "TechnicalInventory";
                    EndpointTypeEnum[EndpointTypeEnum["TemplateGenerator"] = 9] = "TemplateGenerator";
                    EndpointTypeEnum[EndpointTypeEnum["Salesforce"] = 10] = "Salesforce";
                    /**
                     * External URLs (not treatment applied, rejected if URL is not full)
                     */
                    EndpointTypeEnum[EndpointTypeEnum["External"] = 11] = "External";
                })(clientConfig.EndpointTypeEnum || (clientConfig.EndpointTypeEnum = {}));
                var EndpointTypeEnum = clientConfig.EndpointTypeEnum;
            })(clientConfig = models.clientConfig || (models.clientConfig = {}));
        })(models = core.models || (core.models = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));











































































var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var models;
        (function (models) {
            var welcomePacks;
            (function (welcomePacks) {
                (function (WelcomePackStateEnum) {
                    WelcomePackStateEnum[WelcomePackStateEnum["Submitted"] = 0] = "Submitted";
                    WelcomePackStateEnum[WelcomePackStateEnum["Bounced"] = 1] = "Bounced";
                    WelcomePackStateEnum[WelcomePackStateEnum["Success"] = 2] = "Success";
                    WelcomePackStateEnum[WelcomePackStateEnum["Error"] = 3] = "Error";
                    WelcomePackStateEnum[WelcomePackStateEnum["Empty"] = 4] = "Empty";
                    WelcomePackStateEnum[WelcomePackStateEnum["AwaitingAdmin"] = 5] = "AwaitingAdmin";
                    WelcomePackStateEnum[WelcomePackStateEnum["Unsubscribed"] = 6] = "Unsubscribed";
                    WelcomePackStateEnum[WelcomePackStateEnum["GlobalUnsubscribed"] = 7] = "GlobalUnsubscribed";
                    WelcomePackStateEnum[WelcomePackStateEnum["Excluded"] = 8] = "Excluded";
                    WelcomePackStateEnum[WelcomePackStateEnum["Unknown"] = 9] = "Unknown";
                })(welcomePacks.WelcomePackStateEnum || (welcomePacks.WelcomePackStateEnum = {}));
                var WelcomePackStateEnum = welcomePacks.WelcomePackStateEnum;
                (function (WelcomePackQueueEnum) {
                    WelcomePackQueueEnum[WelcomePackQueueEnum["Submitted"] = 0] = "Submitted";
                    WelcomePackQueueEnum[WelcomePackQueueEnum["Rejected"] = 1] = "Rejected";
                    WelcomePackQueueEnum[WelcomePackQueueEnum["Pending"] = 2] = "Pending";
                    WelcomePackQueueEnum[WelcomePackQueueEnum["Read"] = 3] = "Read";
                    WelcomePackQueueEnum[WelcomePackQueueEnum["Waiting"] = 4] = "Waiting";
                    WelcomePackQueueEnum[WelcomePackQueueEnum["Imported"] = 5] = "Imported";
                    WelcomePackQueueEnum[WelcomePackQueueEnum["Complete"] = 6] = "Complete";
                    WelcomePackQueueEnum[WelcomePackQueueEnum["Empty"] = 7] = "Empty";
                    WelcomePackQueueEnum[WelcomePackQueueEnum["Unknown"] = 8] = "Unknown";
                    WelcomePackQueueEnum[WelcomePackQueueEnum["Excluded"] = 9] = "Excluded";
                })(welcomePacks.WelcomePackQueueEnum || (welcomePacks.WelcomePackQueueEnum = {}));
                var WelcomePackQueueEnum = welcomePacks.WelcomePackQueueEnum;
            })(welcomePacks = models.welcomePacks || (models.welcomePacks = {}));
        })(models = core.models || (core.models = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));









































var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var models;
        (function (models) {
            var technicalData;
            (function (technicalData) {
                (function (TechnicalAccessTypeEnum) {
                    TechnicalAccessTypeEnum[TechnicalAccessTypeEnum["None"] = 0] = "None";
                    TechnicalAccessTypeEnum[TechnicalAccessTypeEnum["AudioAccess"] = 1] = "AudioAccess";
                    TechnicalAccessTypeEnum[TechnicalAccessTypeEnum["WebAccess"] = 2] = "WebAccess";
                    TechnicalAccessTypeEnum[TechnicalAccessTypeEnum["IntegratedAudioAccess"] = 3] = "IntegratedAudioAccess";
                    TechnicalAccessTypeEnum[TechnicalAccessTypeEnum["GenericAccess"] = 4] = "GenericAccess";
                })(technicalData.TechnicalAccessTypeEnum || (technicalData.TechnicalAccessTypeEnum = {}));
                var TechnicalAccessTypeEnum = technicalData.TechnicalAccessTypeEnum;
            })(technicalData = models.technicalData || (models.technicalData = {}));
        })(models = core.models || (core.models = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));



























































































































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VzL2Nhc2UtY3JlYXRpb24tdXJsLmR0by50cyIsImNvbmZpZy9lbmRwb2ludC10eXBlLmVudW0udHMiLCJ3ZWxjb21lLXBhY2tzL3dlbGNvbWUtcGFjay5kdG8udHMiLCJ0ZWNobmljYWwtZGF0YS90ZWNobmljYWwtYWNjZXNzLXR5cGUuZW51bS50cyIsImJsdWVza3ktY29yZS1tb2RlbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pELElBQVU7QUFBVixDQUFBLFVBQVUsU0FBTztJQUFDLElBQUE7SUFBQSxDQUFBLFVBQUEsTUFBSTtRQUFDLElBQUE7UUFBQSxDQUFBLFVBQUEsUUFBTTtZQUFDLElBQUE7WUFBQSxDQUFBLFVBQUEsY0FBYTs7OztnQkFJdkMsQ0FBQSxVQUFZLGtCQUFnQjs7OztvQkFJeEIsaUJBQUEsaUJBQUEsbUJBQUEsS0FBQTs7b0JBRUEsaUJBQUEsaUJBQUEsYUFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGtCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsaUJBQUEsS0FBQTs7b0JBRUEsaUJBQUEsaUJBQUEsaUJBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxnQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLG1CQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGNBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSx3QkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLHVCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsZ0JBQUEsTUFBQTs7OztvQkFJQSxpQkFBQSxpQkFBQSxjQUFBLE1BQUE7bUJBckJRLGFBQUEscUJBQUEsYUFBQSxtQkFBZ0I7Z0JBQTVCLElBQVksbUJBQUEsYUFBQTtlQUpjLGVBQUEsT0FBQSxpQkFBQSxPQUFBLGVBQVk7V0FBbkIsU0FBQSxLQUFBLFdBQUEsS0FBQSxTQUFNO09BQVgsT0FBQSxRQUFBLFNBQUEsUUFBQSxPQUFJO0dBQVosWUFBQSxVQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWpCLElBQVU7QUFBVixDQUFBLFVBQVUsU0FBTztJQUFDLElBQUE7SUFBQSxDQUFBLFVBQUEsTUFBSTtRQUFDLElBQUE7UUFBQSxDQUFBLFVBQUEsUUFBTTtZQUFDLElBQUE7WUFBQSxDQUFBLFVBQUEsY0FBYTtnQkFDdkMsQ0FBQSxVQUFZLHNCQUFvQjtvQkFDNUIscUJBQUEscUJBQUEsZUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsV0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLFdBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxtQkFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGtCQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsd0JBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxjQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO21CQVZRLGFBQUEseUJBQUEsYUFBQSx1QkFBb0I7Z0JBQWhDLElBQVksdUJBQUEsYUFBQTtnQkFhWixDQUFBLFVBQVksc0JBQW9CO29CQUM1QixxQkFBQSxxQkFBQSxlQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxVQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxjQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsV0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxjQUFBLEtBQUE7bUJBVlEsYUFBQSx5QkFBQSxhQUFBLHVCQUFvQjtnQkFBaEMsSUFBWSx1QkFBQSxhQUFBO2VBZGMsZUFBQSxPQUFBLGlCQUFBLE9BQUEsZUFBWTtXQUFuQixTQUFBLEtBQUEsV0FBQSxLQUFBLFNBQU07T0FBWCxPQUFBLFFBQUEsU0FBQSxRQUFBLE9BQUk7R0FBWixZQUFBLFVBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQixJQUFVO0FBQVYsQ0FBQSxVQUFVLFNBQU87SUFBQyxJQUFBO0lBQUEsQ0FBQSxVQUFBLE1BQUk7UUFBQyxJQUFBO1FBQUEsQ0FBQSxVQUFBLFFBQU07WUFBQyxJQUFBO1lBQUEsQ0FBQSxVQUFBLGVBQWM7Z0JBQ3hDLENBQUEsVUFBWSx5QkFBdUI7b0JBQy9CLHdCQUFBLHdCQUFBLFVBQUEsS0FBQTtvQkFDQSx3QkFBQSx3QkFBQSxpQkFBQSxLQUFBO29CQUNBLHdCQUFBLHdCQUFBLGVBQUEsS0FBQTtvQkFDQSx3QkFBQSx3QkFBQSwyQkFBQSxLQUFBO29CQUNBLHdCQUFBLHdCQUFBLG1CQUFBLEtBQUE7bUJBTFEsY0FBQSw0QkFBQSxjQUFBLDBCQUF1QjtnQkFBbkMsSUFBWSwwQkFBQSxjQUFBO2VBRGMsZ0JBQUEsT0FBQSxrQkFBQSxPQUFBLGdCQUFhO1dBQXBCLFNBQUEsS0FBQSxXQUFBLEtBQUEsU0FBTTtPQUFYLE9BQUEsUUFBQSxTQUFBLFFBQUEsT0FBSTtHQUFaLFlBQUEsVUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeVhqQiIsImZpbGUiOiJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGJsdWVza3kuY29yZS5tb2RlbHMudXNlckNhc2Uge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQ2FzZUNyZWF0aW9uVXJsRHRvIHtcclxuICAgICAgICBDYXNlVXJsOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscy5jbGllbnRDb25maWcge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnVtIGdlbmVyYXRlZCBmcm9tIHRoZSBzZXJ2ZXIgdG8ga25vdyB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgZW5kcG9pbnQgY29uZmlndXJhdGlvbi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGVudW0gRW5kcG9pbnRUeXBlRW51bSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT3JpZ2luIGRvbWFpbiBmcm9tIHdoaWNoIHRoZSBjdXJyZW50IGNsaWVudCB3YXMgbG9hZGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEN1cnJlbnREb21haW4sXHJcbiAgICAgICAgLy8gQVBJc1xyXG4gICAgICAgIENvcmVBcGksXHJcbiAgICAgICAgTWFya2V0aW5nQXBpLFxyXG4gICAgICAgIFNlbGZjYXJlQXBpLFxyXG4gICAgICAgIC8vIE9NIGFwcHNcclxuICAgICAgICBRdW90ZVdpemFyZCxcclxuICAgICAgICBPcmRlckVudHJ5LFxyXG4gICAgICAgIE9yZGVyVHJhY2tpbmcsXHJcbiAgICAgICAgLy8gSW50ZXJuYWwgYXBwc1xyXG4gICAgICAgIE1ldHJhbmV0LFxyXG4gICAgICAgIFRlY2huaWNhbEludmVudG9yeSxcclxuICAgICAgICBUZW1wbGF0ZUdlbmVyYXRvcixcclxuICAgICAgICBTYWxlc2ZvcmNlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEV4dGVybmFsIFVSTHMgKG5vdCB0cmVhdG1lbnQgYXBwbGllZCwgcmVqZWN0ZWQgaWYgVVJMIGlzIG5vdCBmdWxsKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEV4dGVybmFsXHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscy53ZWxjb21lUGFja3Mge1xyXG4gICAgZXhwb3J0IGVudW0gV2VsY29tZVBhY2tTdGF0ZUVudW0ge1xyXG4gICAgICAgIFN1Ym1pdHRlZCxcclxuICAgICAgICBCb3VuY2VkLFxyXG4gICAgICAgIFN1Y2Nlc3MsXHJcbiAgICAgICAgRXJyb3IsXHJcbiAgICAgICAgRW1wdHksXHJcbiAgICAgICAgQXdhaXRpbmdBZG1pbixcclxuICAgICAgICBVbnN1YnNjcmliZWQsXHJcbiAgICAgICAgR2xvYmFsVW5zdWJzY3JpYmVkLFxyXG4gICAgICAgIEV4Y2x1ZGVkLFxyXG4gICAgICAgIFVua25vd24sXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGVudW0gV2VsY29tZVBhY2tRdWV1ZUVudW0ge1xyXG4gICAgICAgIFN1Ym1pdHRlZCxcclxuICAgICAgICBSZWplY3RlZCxcclxuICAgICAgICBQZW5kaW5nLFxyXG4gICAgICAgIFJlYWQsXHJcbiAgICAgICAgV2FpdGluZyxcclxuICAgICAgICBJbXBvcnRlZCxcclxuICAgICAgICBDb21wbGV0ZSxcclxuICAgICAgICBFbXB0eSxcclxuICAgICAgICBVbmtub3duLFxyXG4gICAgICAgIEV4Y2x1ZGVkLFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVdlbGNvbWVQYWNrRHRvIHtcclxuICAgICAgICBJZDogc3RyaW5nO1xyXG4gICAgICAgIFRlbXBsYXRlSWQ6IHN0cmluZztcclxuICAgICAgICBPcmRlck1hbmFnZW1lbnRJZDogc3RyaW5nO1xyXG4gICAgICAgIFRlbXBsYXRlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIEVtYWlsQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgIFN0YXRlOiBzdHJpbmc7XHJcbiAgICAgICAgUXVldWU6IHN0cmluZztcclxuICAgICAgICBNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgUmVjZWl2ZWREYXRlOiBEYXRlO1xyXG4gICAgICAgIFNlbmRpbmdEYXRlOiBEYXRlO1xyXG4gICAgICAgIEFkbWluRW1haWxBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgSXNBZG1pblJlY2lwaWVudDogYm9vbGVhbjtcclxuICAgICAgICAvL0lzQWRtaW5TdHJhdGVneTogYm9vbGVhbjtcclxuICAgICAgICBDb250YWN0SWQ6IHN0cmluZztcclxuICAgICAgICBVc2VyQ291bnRyeTogc3RyaW5nO1xyXG4gICAgICAgIFN1YnNpZGlhcnk6IHN0cmluZztcclxuICAgICAgICBYbWxTdHJpbmc6IHN0cmluZztcclxuICAgICAgICBGaXJzdE5hbWU6IHN0cmluZztcclxuICAgICAgICBMYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgIFNlbmRpbmdQcmlvcml0eTogc3RyaW5nO1xyXG4gICAgICAgIFNlbGZDYXJlUm9sZTogc3RyaW5nO1xyXG4gICAgICAgIEJpbGxpbmdBY2NvdW50TmFtZTogc3RyaW5nO1xyXG4gICAgICAgIExvZ29OYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgTG9naW46IHN0cmluZztcclxuICAgICAgICBPcmRlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJTZXJ2aWNlUGhvbmU6IHN0cmluZztcclxuICAgICAgICBDdXN0b21lclNlcnZpY2VFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIEhpZXJhcmNoeTogSUhpZXJhcmNoeUR0bztcclxuICAgICAgICBVc2VyUmVjaXBpZW50OiBJVXNlclJlY2lwaWVudER0bztcclxuICAgICAgICBQcm9kdWN0czogSVByb2R1Y3REdG9bXTtcclxuICAgICAgICBPZmZlck5hbWU6IHN0cmluZztcclxuICAgICAgICBSZWNpcGllbnRUeXBlOiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIGJsdWVza3kuY29yZS5tb2RlbHMudGVjaG5pY2FsRGF0YSB7XHJcbiAgICBleHBvcnQgZW51bSBUZWNobmljYWxBY2Nlc3NUeXBlRW51bSB7XHJcbiAgICAgICAgTm9uZSxcclxuICAgICAgICBBdWRpb0FjY2VzcyxcclxuICAgICAgICBXZWJBY2Nlc3MsXHJcbiAgICAgICAgSW50ZWdyYXRlZEF1ZGlvQWNjZXNzLFxyXG4gICAgICAgIEdlbmVyaWNBY2Nlc3MsXHJcbiAgICB9XHJcbn0iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgYmx1ZXNreTtcbihmdW5jdGlvbiAoYmx1ZXNreSkge1xuICAgIHZhciBjb3JlO1xuICAgIChmdW5jdGlvbiAoY29yZSkge1xuICAgICAgICB2YXIgbW9kZWxzO1xuICAgICAgICAoZnVuY3Rpb24gKG1vZGVscykge1xuICAgICAgICAgICAgdmFyIGNsaWVudENvbmZpZztcbiAgICAgICAgICAgIChmdW5jdGlvbiAoY2xpZW50Q29uZmlnKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW51bSBnZW5lcmF0ZWQgZnJvbSB0aGUgc2VydmVyIHRvIGtub3cgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGVuZHBvaW50IGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChFbmRwb2ludFR5cGVFbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBPcmlnaW4gZG9tYWluIGZyb20gd2hpY2ggdGhlIGN1cnJlbnQgY2xpZW50IHdhcyBsb2FkZWQuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJDdXJyZW50RG9tYWluXCJdID0gMF0gPSBcIkN1cnJlbnREb21haW5cIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gQVBJc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJDb3JlQXBpXCJdID0gMV0gPSBcIkNvcmVBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiTWFya2V0aW5nQXBpXCJdID0gMl0gPSBcIk1hcmtldGluZ0FwaVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJTZWxmY2FyZUFwaVwiXSA9IDNdID0gXCJTZWxmY2FyZUFwaVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBPTSBhcHBzXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlF1b3RlV2l6YXJkXCJdID0gNF0gPSBcIlF1b3RlV2l6YXJkXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk9yZGVyRW50cnlcIl0gPSA1XSA9IFwiT3JkZXJFbnRyeVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJPcmRlclRyYWNraW5nXCJdID0gNl0gPSBcIk9yZGVyVHJhY2tpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuYWwgYXBwc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJNZXRyYW5ldFwiXSA9IDddID0gXCJNZXRyYW5ldFwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJUZWNobmljYWxJbnZlbnRvcnlcIl0gPSA4XSA9IFwiVGVjaG5pY2FsSW52ZW50b3J5XCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlRlbXBsYXRlR2VuZXJhdG9yXCJdID0gOV0gPSBcIlRlbXBsYXRlR2VuZXJhdG9yXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlNhbGVzZm9yY2VcIl0gPSAxMF0gPSBcIlNhbGVzZm9yY2VcIjtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEV4dGVybmFsIFVSTHMgKG5vdCB0cmVhdG1lbnQgYXBwbGllZCwgcmVqZWN0ZWQgaWYgVVJMIGlzIG5vdCBmdWxsKVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiRXh0ZXJuYWxcIl0gPSAxMV0gPSBcIkV4dGVybmFsXCI7XG4gICAgICAgICAgICAgICAgfSkoY2xpZW50Q29uZmlnLkVuZHBvaW50VHlwZUVudW0gfHwgKGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtID0ge30pKTtcbiAgICAgICAgICAgICAgICB2YXIgRW5kcG9pbnRUeXBlRW51bSA9IGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtO1xuICAgICAgICAgICAgfSkoY2xpZW50Q29uZmlnID0gbW9kZWxzLmNsaWVudENvbmZpZyB8fCAobW9kZWxzLmNsaWVudENvbmZpZyA9IHt9KSk7XG4gICAgICAgIH0pKG1vZGVscyA9IGNvcmUubW9kZWxzIHx8IChjb3JlLm1vZGVscyA9IHt9KSk7XG4gICAgfSkoY29yZSA9IGJsdWVza3kuY29yZSB8fCAoYmx1ZXNreS5jb3JlID0ge30pKTtcbn0pKGJsdWVza3kgfHwgKGJsdWVza3kgPSB7fSkpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIGJsdWVza3k7XG4oZnVuY3Rpb24gKGJsdWVza3kpIHtcbiAgICB2YXIgY29yZTtcbiAgICAoZnVuY3Rpb24gKGNvcmUpIHtcbiAgICAgICAgdmFyIG1vZGVscztcbiAgICAgICAgKGZ1bmN0aW9uIChtb2RlbHMpIHtcbiAgICAgICAgICAgIHZhciB3ZWxjb21lUGFja3M7XG4gICAgICAgICAgICAoZnVuY3Rpb24gKHdlbGNvbWVQYWNrcykge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoV2VsY29tZVBhY2tTdGF0ZUVudW0pIHtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJTdWJtaXR0ZWRcIl0gPSAwXSA9IFwiU3VibWl0dGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiQm91bmNlZFwiXSA9IDFdID0gXCJCb3VuY2VkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiU3VjY2Vzc1wiXSA9IDJdID0gXCJTdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiRXJyb3JcIl0gPSAzXSA9IFwiRXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJFbXB0eVwiXSA9IDRdID0gXCJFbXB0eVwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkF3YWl0aW5nQWRtaW5cIl0gPSA1XSA9IFwiQXdhaXRpbmdBZG1pblwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIlVuc3Vic2NyaWJlZFwiXSA9IDZdID0gXCJVbnN1YnNjcmliZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJHbG9iYWxVbnN1YnNjcmliZWRcIl0gPSA3XSA9IFwiR2xvYmFsVW5zdWJzY3JpYmVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiRXhjbHVkZWRcIl0gPSA4XSA9IFwiRXhjbHVkZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJVbmtub3duXCJdID0gOV0gPSBcIlVua25vd25cIjtcbiAgICAgICAgICAgICAgICB9KSh3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tTdGF0ZUVudW0gfHwgKHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1N0YXRlRW51bSA9IHt9KSk7XG4gICAgICAgICAgICAgICAgdmFyIFdlbGNvbWVQYWNrU3RhdGVFbnVtID0gd2VsY29tZVBhY2tzLldlbGNvbWVQYWNrU3RhdGVFbnVtO1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoV2VsY29tZVBhY2tRdWV1ZUVudW0pIHtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJTdWJtaXR0ZWRcIl0gPSAwXSA9IFwiU3VibWl0dGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiUmVqZWN0ZWRcIl0gPSAxXSA9IFwiUmVqZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJQZW5kaW5nXCJdID0gMl0gPSBcIlBlbmRpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJSZWFkXCJdID0gM10gPSBcIlJlYWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJXYWl0aW5nXCJdID0gNF0gPSBcIldhaXRpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJJbXBvcnRlZFwiXSA9IDVdID0gXCJJbXBvcnRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIkNvbXBsZXRlXCJdID0gNl0gPSBcIkNvbXBsZXRlXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiRW1wdHlcIl0gPSA3XSA9IFwiRW1wdHlcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJVbmtub3duXCJdID0gOF0gPSBcIlVua25vd25cIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJFeGNsdWRlZFwiXSA9IDldID0gXCJFeGNsdWRlZFwiO1xuICAgICAgICAgICAgICAgIH0pKHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1F1ZXVlRW51bSB8fCAod2VsY29tZVBhY2tzLldlbGNvbWVQYWNrUXVldWVFbnVtID0ge30pKTtcbiAgICAgICAgICAgICAgICB2YXIgV2VsY29tZVBhY2tRdWV1ZUVudW0gPSB3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tRdWV1ZUVudW07XG4gICAgICAgICAgICB9KSh3ZWxjb21lUGFja3MgPSBtb2RlbHMud2VsY29tZVBhY2tzIHx8IChtb2RlbHMud2VsY29tZVBhY2tzID0ge30pKTtcbiAgICAgICAgfSkobW9kZWxzID0gY29yZS5tb2RlbHMgfHwgKGNvcmUubW9kZWxzID0ge30pKTtcbiAgICB9KShjb3JlID0gYmx1ZXNreS5jb3JlIHx8IChibHVlc2t5LmNvcmUgPSB7fSkpO1xufSkoYmx1ZXNreSB8fCAoYmx1ZXNreSA9IHt9KSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIGJsdWVza3k7XG4oZnVuY3Rpb24gKGJsdWVza3kpIHtcbiAgICB2YXIgY29yZTtcbiAgICAoZnVuY3Rpb24gKGNvcmUpIHtcbiAgICAgICAgdmFyIG1vZGVscztcbiAgICAgICAgKGZ1bmN0aW9uIChtb2RlbHMpIHtcbiAgICAgICAgICAgIHZhciB0ZWNobmljYWxEYXRhO1xuICAgICAgICAgICAgKGZ1bmN0aW9uICh0ZWNobmljYWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChUZWNobmljYWxBY2Nlc3NUeXBlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICBUZWNobmljYWxBY2Nlc3NUeXBlRW51bVtUZWNobmljYWxBY2Nlc3NUeXBlRW51bVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICBUZWNobmljYWxBY2Nlc3NUeXBlRW51bVtUZWNobmljYWxBY2Nlc3NUeXBlRW51bVtcIkF1ZGlvQWNjZXNzXCJdID0gMV0gPSBcIkF1ZGlvQWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgIFRlY2huaWNhbEFjY2Vzc1R5cGVFbnVtW1RlY2huaWNhbEFjY2Vzc1R5cGVFbnVtW1wiV2ViQWNjZXNzXCJdID0gMl0gPSBcIldlYkFjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICBUZWNobmljYWxBY2Nlc3NUeXBlRW51bVtUZWNobmljYWxBY2Nlc3NUeXBlRW51bVtcIkludGVncmF0ZWRBdWRpb0FjY2Vzc1wiXSA9IDNdID0gXCJJbnRlZ3JhdGVkQXVkaW9BY2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgVGVjaG5pY2FsQWNjZXNzVHlwZUVudW1bVGVjaG5pY2FsQWNjZXNzVHlwZUVudW1bXCJHZW5lcmljQWNjZXNzXCJdID0gNF0gPSBcIkdlbmVyaWNBY2Nlc3NcIjtcbiAgICAgICAgICAgICAgICB9KSh0ZWNobmljYWxEYXRhLlRlY2huaWNhbEFjY2Vzc1R5cGVFbnVtIHx8ICh0ZWNobmljYWxEYXRhLlRlY2huaWNhbEFjY2Vzc1R5cGVFbnVtID0ge30pKTtcbiAgICAgICAgICAgICAgICB2YXIgVGVjaG5pY2FsQWNjZXNzVHlwZUVudW0gPSB0ZWNobmljYWxEYXRhLlRlY2huaWNhbEFjY2Vzc1R5cGVFbnVtO1xuICAgICAgICAgICAgfSkodGVjaG5pY2FsRGF0YSA9IG1vZGVscy50ZWNobmljYWxEYXRhIHx8IChtb2RlbHMudGVjaG5pY2FsRGF0YSA9IHt9KSk7XG4gICAgICAgIH0pKG1vZGVscyA9IGNvcmUubW9kZWxzIHx8IChjb3JlLm1vZGVscyA9IHt9KSk7XG4gICAgfSkoY29yZSA9IGJsdWVza3kuY29yZSB8fCAoYmx1ZXNreS5jb3JlID0ge30pKTtcbn0pKGJsdWVza3kgfHwgKGJsdWVza3kgPSB7fSkpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
