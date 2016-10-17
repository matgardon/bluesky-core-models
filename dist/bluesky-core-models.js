

























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







































































































































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VzL2Nhc2UtY3JlYXRpb24tdXJsLmR0by50cyIsImNvbmZpZy9lbmRwb2ludC10eXBlLmVudW0udHMiLCJ0ZWNobmljYWwtZGF0YS90ZWNobmljYWwtYWNjZXNzLXR5cGUuZW51bS50cyIsIndlbGNvbWUtcGFja3Mvd2VsY29tZS1wYWNrLmR0by50cyIsImJsdWVza3ktY29yZS1tb2RlbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkQsSUFBVTtBQUFWLENBQUEsVUFBVSxTQUFPO0lBQUMsSUFBQTtJQUFBLENBQUEsVUFBQSxNQUFJO1FBQUMsSUFBQTtRQUFBLENBQUEsVUFBQSxRQUFNO1lBQUMsSUFBQTtZQUFBLENBQUEsVUFBQSxjQUFhOzs7O2dCQUl2QyxDQUFBLFVBQVksa0JBQWdCOzs7O29CQUl4QixpQkFBQSxpQkFBQSxtQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxhQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsa0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxpQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxpQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGdCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsbUJBQUEsS0FBQTs7b0JBRUEsaUJBQUEsaUJBQUEsY0FBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLHdCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsdUJBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxnQkFBQSxNQUFBOzs7O29CQUlBLGlCQUFBLGlCQUFBLGNBQUEsTUFBQTttQkFyQlEsYUFBQSxxQkFBQSxhQUFBLG1CQUFnQjtnQkFBNUIsSUFBWSxtQkFBQSxhQUFBO2VBSmMsZUFBQSxPQUFBLGlCQUFBLE9BQUEsZUFBWTtXQUFuQixTQUFBLEtBQUEsV0FBQSxLQUFBLFNBQU07T0FBWCxPQUFBLFFBQUEsU0FBQSxRQUFBLE9BQUk7R0FBWixZQUFBLFVBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakIsSUFBVTtBQUFWLENBQUEsVUFBVSxTQUFPO0lBQUMsSUFBQTtJQUFBLENBQUEsVUFBQSxNQUFJO1FBQUMsSUFBQTtRQUFBLENBQUEsVUFBQSxRQUFNO1lBQUMsSUFBQTtZQUFBLENBQUEsVUFBQSxlQUFjO2dCQUN4QyxDQUFBLFVBQVkseUJBQXVCO29CQUMvQix3QkFBQSx3QkFBQSxVQUFBLEtBQUE7b0JBQ0Esd0JBQUEsd0JBQUEsaUJBQUEsS0FBQTtvQkFDQSx3QkFBQSx3QkFBQSxlQUFBLEtBQUE7b0JBQ0Esd0JBQUEsd0JBQUEsMkJBQUEsS0FBQTtvQkFDQSx3QkFBQSx3QkFBQSxtQkFBQSxLQUFBO21CQUxRLGNBQUEsNEJBQUEsY0FBQSwwQkFBdUI7Z0JBQW5DLElBQVksMEJBQUEsY0FBQTtlQURjLGdCQUFBLE9BQUEsa0JBQUEsT0FBQSxnQkFBYTtXQUFwQixTQUFBLEtBQUEsV0FBQSxLQUFBLFNBQU07T0FBWCxPQUFBLFFBQUEsU0FBQSxRQUFBLE9BQUk7R0FBWixZQUFBLFVBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakIsSUFBVTtBQUFWLENBQUEsVUFBVSxTQUFPO0lBQUMsSUFBQTtJQUFBLENBQUEsVUFBQSxNQUFJO1FBQUMsSUFBQTtRQUFBLENBQUEsVUFBQSxRQUFNO1lBQUMsSUFBQTtZQUFBLENBQUEsVUFBQSxjQUFhO2dCQUN2QyxDQUFBLFVBQVksc0JBQW9CO29CQUM1QixxQkFBQSxxQkFBQSxlQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxXQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsV0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLG1CQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsa0JBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSx3QkFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7bUJBVlEsYUFBQSx5QkFBQSxhQUFBLHVCQUFvQjtnQkFBaEMsSUFBWSx1QkFBQSxhQUFBO2dCQWFaLENBQUEsVUFBWSxzQkFBb0I7b0JBQzVCLHFCQUFBLHFCQUFBLGVBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxjQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLFVBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxXQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTttQkFWUSxhQUFBLHlCQUFBLGFBQUEsdUJBQW9CO2dCQUFoQyxJQUFZLHVCQUFBLGFBQUE7ZUFkYyxlQUFBLE9BQUEsaUJBQUEsT0FBQSxlQUFZO1dBQW5CLFNBQUEsS0FBQSxXQUFBLEtBQUEsU0FBTTtPQUFYLE9BQUEsUUFBQSxTQUFBLFFBQUEsT0FBSTtHQUFaLFlBQUEsVUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeVhqQiIsImZpbGUiOiJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGJsdWVza3kuY29yZS5tb2RlbHMudXNlckNhc2Uge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQ2FzZUNyZWF0aW9uVXJsRHRvIHtcclxuICAgICAgICBDYXNlVXJsOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscy5jbGllbnRDb25maWcge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnVtIGdlbmVyYXRlZCBmcm9tIHRoZSBzZXJ2ZXIgdG8ga25vdyB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgZW5kcG9pbnQgY29uZmlndXJhdGlvbi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGVudW0gRW5kcG9pbnRUeXBlRW51bSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT3JpZ2luIGRvbWFpbiBmcm9tIHdoaWNoIHRoZSBjdXJyZW50IGNsaWVudCB3YXMgbG9hZGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEN1cnJlbnREb21haW4sXHJcbiAgICAgICAgLy8gQVBJc1xyXG4gICAgICAgIENvcmVBcGksXHJcbiAgICAgICAgTWFya2V0aW5nQXBpLFxyXG4gICAgICAgIFNlbGZjYXJlQXBpLFxyXG4gICAgICAgIC8vIE9NIGFwcHNcclxuICAgICAgICBRdW90ZVdpemFyZCxcclxuICAgICAgICBPcmRlckVudHJ5LFxyXG4gICAgICAgIE9yZGVyVHJhY2tpbmcsXHJcbiAgICAgICAgLy8gSW50ZXJuYWwgYXBwc1xyXG4gICAgICAgIE1ldHJhbmV0LFxyXG4gICAgICAgIFRlY2huaWNhbEludmVudG9yeSxcclxuICAgICAgICBUZW1wbGF0ZUdlbmVyYXRvcixcclxuICAgICAgICBTYWxlc2ZvcmNlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEV4dGVybmFsIFVSTHMgKG5vdCB0cmVhdG1lbnQgYXBwbGllZCwgcmVqZWN0ZWQgaWYgVVJMIGlzIG5vdCBmdWxsKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEV4dGVybmFsXHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscy50ZWNobmljYWxEYXRhIHtcclxuICAgIGV4cG9ydCBlbnVtIFRlY2huaWNhbEFjY2Vzc1R5cGVFbnVtIHtcclxuICAgICAgICBOb25lLFxyXG4gICAgICAgIEF1ZGlvQWNjZXNzLFxyXG4gICAgICAgIFdlYkFjY2VzcyxcclxuICAgICAgICBJbnRlZ3JhdGVkQXVkaW9BY2Nlc3MsXHJcbiAgICAgICAgR2VuZXJpY0FjY2VzcyxcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBibHVlc2t5LmNvcmUubW9kZWxzLndlbGNvbWVQYWNrcyB7XHJcbiAgICBleHBvcnQgZW51bSBXZWxjb21lUGFja1N0YXRlRW51bSB7XHJcbiAgICAgICAgU3VibWl0dGVkLFxyXG4gICAgICAgIEJvdW5jZWQsXHJcbiAgICAgICAgU3VjY2VzcyxcclxuICAgICAgICBFcnJvcixcclxuICAgICAgICBFbXB0eSxcclxuICAgICAgICBBd2FpdGluZ0FkbWluLFxyXG4gICAgICAgIFVuc3Vic2NyaWJlZCxcclxuICAgICAgICBHbG9iYWxVbnN1YnNjcmliZWQsXHJcbiAgICAgICAgRXhjbHVkZWQsXHJcbiAgICAgICAgVW5rbm93bixcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZW51bSBXZWxjb21lUGFja1F1ZXVlRW51bSB7XHJcbiAgICAgICAgU3VibWl0dGVkLFxyXG4gICAgICAgIFJlamVjdGVkLFxyXG4gICAgICAgIFBlbmRpbmcsXHJcbiAgICAgICAgUmVhZCxcclxuICAgICAgICBXYWl0aW5nLFxyXG4gICAgICAgIEltcG9ydGVkLFxyXG4gICAgICAgIENvbXBsZXRlLFxyXG4gICAgICAgIEVtcHR5LFxyXG4gICAgICAgIFVua25vd24sXHJcbiAgICAgICAgRXhjbHVkZWQsXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJV2VsY29tZVBhY2tEdG8ge1xyXG4gICAgICAgIElkOiBzdHJpbmc7XHJcbiAgICAgICAgVGVtcGxhdGVJZDogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVyTWFuYWdlbWVudElkOiBzdHJpbmc7XHJcbiAgICAgICAgVGVtcGxhdGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWxBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgU3RhdGU6IHN0cmluZztcclxuICAgICAgICBRdWV1ZTogc3RyaW5nO1xyXG4gICAgICAgIE1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICBSZWNlaXZlZERhdGU6IERhdGU7XHJcbiAgICAgICAgU2VuZGluZ0RhdGU6IERhdGU7XHJcbiAgICAgICAgQWRtaW5FbWFpbEFkZHJlc3M6IHN0cmluZztcclxuICAgICAgICBJc0FkbWluUmVjaXBpZW50OiBib29sZWFuO1xyXG4gICAgICAgIC8vSXNBZG1pblN0cmF0ZWd5OiBib29sZWFuO1xyXG4gICAgICAgIENvbnRhY3RJZDogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJDb3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgU3Vic2lkaWFyeTogc3RyaW5nO1xyXG4gICAgICAgIFhtbFN0cmluZzogc3RyaW5nO1xyXG4gICAgICAgIEZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgIExhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgU2VuZGluZ1ByaW9yaXR5OiBzdHJpbmc7XHJcbiAgICAgICAgU2VsZkNhcmVSb2xlOiBzdHJpbmc7XHJcbiAgICAgICAgQmlsbGluZ0FjY291bnROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgTG9nb05hbWU6IHN0cmluZztcclxuICAgICAgICBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICBMb2dpbjogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVySWQ6IHN0cmluZztcclxuICAgICAgICBDdXN0b21lclNlcnZpY2VQaG9uZTogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyU2VydmljZUVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgSGllcmFyY2h5OiBJSGllcmFyY2h5RHRvO1xyXG4gICAgICAgIFVzZXJSZWNpcGllbnQ6IElVc2VyUmVjaXBpZW50RHRvO1xyXG4gICAgICAgIFByb2R1Y3RzOiBJUHJvZHVjdER0b1tdO1xyXG4gICAgICAgIE9mZmVyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIFJlY2lwaWVudFR5cGU6IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIGJsdWVza3k7XG4oZnVuY3Rpb24gKGJsdWVza3kpIHtcbiAgICB2YXIgY29yZTtcbiAgICAoZnVuY3Rpb24gKGNvcmUpIHtcbiAgICAgICAgdmFyIG1vZGVscztcbiAgICAgICAgKGZ1bmN0aW9uIChtb2RlbHMpIHtcbiAgICAgICAgICAgIHZhciBjbGllbnRDb25maWc7XG4gICAgICAgICAgICAoZnVuY3Rpb24gKGNsaWVudENvbmZpZykge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVudW0gZ2VuZXJhdGVkIGZyb20gdGhlIHNlcnZlciB0byBrbm93IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBlbmRwb2ludCBjb25maWd1cmF0aW9uLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoRW5kcG9pbnRUeXBlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogT3JpZ2luIGRvbWFpbiBmcm9tIHdoaWNoIHRoZSBjdXJyZW50IGNsaWVudCB3YXMgbG9hZGVkLlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiQ3VycmVudERvbWFpblwiXSA9IDBdID0gXCJDdXJyZW50RG9tYWluXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFQSXNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiQ29yZUFwaVwiXSA9IDFdID0gXCJDb3JlQXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk1hcmtldGluZ0FwaVwiXSA9IDJdID0gXCJNYXJrZXRpbmdBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiU2VsZmNhcmVBcGlcIl0gPSAzXSA9IFwiU2VsZmNhcmVBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gT00gYXBwc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJRdW90ZVdpemFyZFwiXSA9IDRdID0gXCJRdW90ZVdpemFyZFwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJPcmRlckVudHJ5XCJdID0gNV0gPSBcIk9yZGVyRW50cnlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiT3JkZXJUcmFja2luZ1wiXSA9IDZdID0gXCJPcmRlclRyYWNraW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsIGFwcHNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiTWV0cmFuZXRcIl0gPSA3XSA9IFwiTWV0cmFuZXRcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiVGVjaG5pY2FsSW52ZW50b3J5XCJdID0gOF0gPSBcIlRlY2huaWNhbEludmVudG9yeVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJUZW1wbGF0ZUdlbmVyYXRvclwiXSA9IDldID0gXCJUZW1wbGF0ZUdlbmVyYXRvclwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJTYWxlc2ZvcmNlXCJdID0gMTBdID0gXCJTYWxlc2ZvcmNlXCI7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBFeHRlcm5hbCBVUkxzIChub3QgdHJlYXRtZW50IGFwcGxpZWQsIHJlamVjdGVkIGlmIFVSTCBpcyBub3QgZnVsbClcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIkV4dGVybmFsXCJdID0gMTFdID0gXCJFeHRlcm5hbFwiO1xuICAgICAgICAgICAgICAgIH0pKGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtIHx8IChjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bSA9IHt9KSk7XG4gICAgICAgICAgICAgICAgdmFyIEVuZHBvaW50VHlwZUVudW0gPSBjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bTtcbiAgICAgICAgICAgIH0pKGNsaWVudENvbmZpZyA9IG1vZGVscy5jbGllbnRDb25maWcgfHwgKG1vZGVscy5jbGllbnRDb25maWcgPSB7fSkpO1xuICAgICAgICB9KShtb2RlbHMgPSBjb3JlLm1vZGVscyB8fCAoY29yZS5tb2RlbHMgPSB7fSkpO1xuICAgIH0pKGNvcmUgPSBibHVlc2t5LmNvcmUgfHwgKGJsdWVza3kuY29yZSA9IHt9KSk7XG59KShibHVlc2t5IHx8IChibHVlc2t5ID0ge30pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBibHVlc2t5O1xuKGZ1bmN0aW9uIChibHVlc2t5KSB7XG4gICAgdmFyIGNvcmU7XG4gICAgKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgICAgIHZhciBtb2RlbHM7XG4gICAgICAgIChmdW5jdGlvbiAobW9kZWxzKSB7XG4gICAgICAgICAgICB2YXIgdGVjaG5pY2FsRGF0YTtcbiAgICAgICAgICAgIChmdW5jdGlvbiAodGVjaG5pY2FsRGF0YSkge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoVGVjaG5pY2FsQWNjZXNzVHlwZUVudW0pIHtcbiAgICAgICAgICAgICAgICAgICAgVGVjaG5pY2FsQWNjZXNzVHlwZUVudW1bVGVjaG5pY2FsQWNjZXNzVHlwZUVudW1bXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgVGVjaG5pY2FsQWNjZXNzVHlwZUVudW1bVGVjaG5pY2FsQWNjZXNzVHlwZUVudW1bXCJBdWRpb0FjY2Vzc1wiXSA9IDFdID0gXCJBdWRpb0FjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICBUZWNobmljYWxBY2Nlc3NUeXBlRW51bVtUZWNobmljYWxBY2Nlc3NUeXBlRW51bVtcIldlYkFjY2Vzc1wiXSA9IDJdID0gXCJXZWJBY2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgVGVjaG5pY2FsQWNjZXNzVHlwZUVudW1bVGVjaG5pY2FsQWNjZXNzVHlwZUVudW1bXCJJbnRlZ3JhdGVkQXVkaW9BY2Nlc3NcIl0gPSAzXSA9IFwiSW50ZWdyYXRlZEF1ZGlvQWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgIFRlY2huaWNhbEFjY2Vzc1R5cGVFbnVtW1RlY2huaWNhbEFjY2Vzc1R5cGVFbnVtW1wiR2VuZXJpY0FjY2Vzc1wiXSA9IDRdID0gXCJHZW5lcmljQWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgfSkodGVjaG5pY2FsRGF0YS5UZWNobmljYWxBY2Nlc3NUeXBlRW51bSB8fCAodGVjaG5pY2FsRGF0YS5UZWNobmljYWxBY2Nlc3NUeXBlRW51bSA9IHt9KSk7XG4gICAgICAgICAgICAgICAgdmFyIFRlY2huaWNhbEFjY2Vzc1R5cGVFbnVtID0gdGVjaG5pY2FsRGF0YS5UZWNobmljYWxBY2Nlc3NUeXBlRW51bTtcbiAgICAgICAgICAgIH0pKHRlY2huaWNhbERhdGEgPSBtb2RlbHMudGVjaG5pY2FsRGF0YSB8fCAobW9kZWxzLnRlY2huaWNhbERhdGEgPSB7fSkpO1xuICAgICAgICB9KShtb2RlbHMgPSBjb3JlLm1vZGVscyB8fCAoY29yZS5tb2RlbHMgPSB7fSkpO1xuICAgIH0pKGNvcmUgPSBibHVlc2t5LmNvcmUgfHwgKGJsdWVza3kuY29yZSA9IHt9KSk7XG59KShibHVlc2t5IHx8IChibHVlc2t5ID0ge30pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBibHVlc2t5O1xuKGZ1bmN0aW9uIChibHVlc2t5KSB7XG4gICAgdmFyIGNvcmU7XG4gICAgKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgICAgIHZhciBtb2RlbHM7XG4gICAgICAgIChmdW5jdGlvbiAobW9kZWxzKSB7XG4gICAgICAgICAgICB2YXIgd2VsY29tZVBhY2tzO1xuICAgICAgICAgICAgKGZ1bmN0aW9uICh3ZWxjb21lUGFja3MpIHtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKFdlbGNvbWVQYWNrU3RhdGVFbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiU3VibWl0dGVkXCJdID0gMF0gPSBcIlN1Ym1pdHRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkJvdW5jZWRcIl0gPSAxXSA9IFwiQm91bmNlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIlN1Y2Nlc3NcIl0gPSAyXSA9IFwiU3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkVycm9yXCJdID0gM10gPSBcIkVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiRW1wdHlcIl0gPSA0XSA9IFwiRW1wdHlcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJBd2FpdGluZ0FkbWluXCJdID0gNV0gPSBcIkF3YWl0aW5nQWRtaW5cIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJVbnN1YnNjcmliZWRcIl0gPSA2XSA9IFwiVW5zdWJzY3JpYmVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiR2xvYmFsVW5zdWJzY3JpYmVkXCJdID0gN10gPSBcIkdsb2JhbFVuc3Vic2NyaWJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkV4Y2x1ZGVkXCJdID0gOF0gPSBcIkV4Y2x1ZGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiVW5rbm93blwiXSA9IDldID0gXCJVbmtub3duXCI7XG4gICAgICAgICAgICAgICAgfSkod2VsY29tZVBhY2tzLldlbGNvbWVQYWNrU3RhdGVFbnVtIHx8ICh3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tTdGF0ZUVudW0gPSB7fSkpO1xuICAgICAgICAgICAgICAgIHZhciBXZWxjb21lUGFja1N0YXRlRW51bSA9IHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1N0YXRlRW51bTtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKFdlbGNvbWVQYWNrUXVldWVFbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiU3VibWl0dGVkXCJdID0gMF0gPSBcIlN1Ym1pdHRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlJlamVjdGVkXCJdID0gMV0gPSBcIlJlamVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiUGVuZGluZ1wiXSA9IDJdID0gXCJQZW5kaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiUmVhZFwiXSA9IDNdID0gXCJSZWFkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiV2FpdGluZ1wiXSA9IDRdID0gXCJXYWl0aW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiSW1wb3J0ZWRcIl0gPSA1XSA9IFwiSW1wb3J0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJDb21wbGV0ZVwiXSA9IDZdID0gXCJDb21wbGV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIkVtcHR5XCJdID0gN10gPSBcIkVtcHR5XCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiVW5rbm93blwiXSA9IDhdID0gXCJVbmtub3duXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiRXhjbHVkZWRcIl0gPSA5XSA9IFwiRXhjbHVkZWRcIjtcbiAgICAgICAgICAgICAgICB9KSh3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tRdWV1ZUVudW0gfHwgKHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1F1ZXVlRW51bSA9IHt9KSk7XG4gICAgICAgICAgICAgICAgdmFyIFdlbGNvbWVQYWNrUXVldWVFbnVtID0gd2VsY29tZVBhY2tzLldlbGNvbWVQYWNrUXVldWVFbnVtO1xuICAgICAgICAgICAgfSkod2VsY29tZVBhY2tzID0gbW9kZWxzLndlbGNvbWVQYWNrcyB8fCAobW9kZWxzLndlbGNvbWVQYWNrcyA9IHt9KSk7XG4gICAgICAgIH0pKG1vZGVscyA9IGNvcmUubW9kZWxzIHx8IChjb3JlLm1vZGVscyA9IHt9KSk7XG4gICAgfSkoY29yZSA9IGJsdWVza3kuY29yZSB8fCAoYmx1ZXNreS5jb3JlID0ge30pKTtcbn0pKGJsdWVza3kgfHwgKGJsdWVza3kgPSB7fSkpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
