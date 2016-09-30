



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

















































































































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9hamF4LWNsaWVudC1lbmRwb2ludC1jb25maWd1cmF0aW9uLmR0by50cyIsImNvbmZpZy9lbmRwb2ludC10eXBlLmVudW0udHMiLCJ3ZWxjb21lLXBhY2tzL3dlbGNvbWUtcGFjay5kdG8udHMiLCJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9DOzs7O0FDUEQsSUFBVTtBQUFWLENBQUEsVUFBVSxTQUFPO0lBQUMsSUFBQTtJQUFBLENBQUEsVUFBQSxNQUFJO1FBQUMsSUFBQTtRQUFBLENBQUEsVUFBQSxRQUFNO1lBQUMsSUFBQTtZQUFBLENBQUEsVUFBQSxjQUFhOzs7O2dCQUl2QyxDQUFBLFVBQVksa0JBQWdCOzs7O29CQUl4QixpQkFBQSxpQkFBQSxtQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxhQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsa0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxpQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxpQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGdCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsbUJBQUEsS0FBQTs7b0JBRUEsaUJBQUEsaUJBQUEsY0FBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLHdCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsdUJBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxnQkFBQSxNQUFBOzs7O29CQUlBLGlCQUFBLGlCQUFBLGNBQUEsTUFBQTttQkFyQlEsYUFBQSxxQkFBQSxhQUFBLG1CQUFnQjtnQkFBNUIsSUFBWSxtQkFBQSxhQUFBO2VBSmMsZUFBQSxPQUFBLGlCQUFBLE9BQUEsZUFBWTtXQUFuQixTQUFBLEtBQUEsV0FBQSxLQUFBLFNBQU07T0FBWCxPQUFBLFFBQUEsU0FBQSxRQUFBLE9BQUk7R0FBWixZQUFBLFVBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakIsSUFBVTtBQUFWLENBQUEsVUFBVSxTQUFPO0lBQUMsSUFBQTtJQUFBLENBQUEsVUFBQSxNQUFJO1FBQUMsSUFBQTtRQUFBLENBQUEsVUFBQSxRQUFNO1lBQUMsSUFBQTtZQUFBLENBQUEsVUFBQSxjQUFhO2dCQUN2QyxDQUFBLFVBQVksc0JBQW9CO29CQUM1QixxQkFBQSxxQkFBQSxlQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxXQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsV0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLG1CQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsa0JBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSx3QkFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7bUJBVlEsYUFBQSx5QkFBQSxhQUFBLHVCQUFvQjtnQkFBaEMsSUFBWSx1QkFBQSxhQUFBO2dCQWFaLENBQUEsVUFBWSxzQkFBb0I7b0JBQzVCLHFCQUFBLHFCQUFBLGVBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxjQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLFVBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxXQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTttQkFWUSxhQUFBLHlCQUFBLGFBQUEsdUJBQW9CO2dCQUFoQyxJQUFZLHVCQUFBLGFBQUE7ZUFkYyxlQUFBLE9BQUEsaUJBQUEsT0FBQSxlQUFZO1dBQW5CLFNBQUEsS0FBQSxXQUFBLEtBQUEsU0FBTTtPQUFYLE9BQUEsUUFBQSxTQUFBLFFBQUEsT0FBSTtHQUFaLFlBQUEsVUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN3UmpCIiwiZmlsZSI6ImJsdWVza3ktY29yZS1tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscy5jbGllbnRDb25maWcge1xyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSUFqYXhDbGllbnRFbmRwb2ludENvbmZpZ3VyYXRpb25EdG8ge1xyXG5cdFx0RW5kcG9pbnRCYXNlVVJMOiBzdHJpbmc7XHJcblx0XHRFbmRwb2ludFN1ZmZpeDogc3RyaW5nO1xyXG5cdFx0QXV0aFRva2VuOiBzdHJpbmc7XHJcblx0XHRBdXRoVG9rZW5WYWxpZGl0eUVuZERhdGU6IERhdGU7XHJcblx0fVxyXG59XHJcbiIsIm5hbWVzcGFjZSBibHVlc2t5LmNvcmUubW9kZWxzLmNsaWVudENvbmZpZyB7XHJcbiAgICAvKipcclxuICAgICAqIEVudW0gZ2VuZXJhdGVkIGZyb20gdGhlIHNlcnZlciB0byBrbm93IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBlbmRwb2ludCBjb25maWd1cmF0aW9uLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZW51bSBFbmRwb2ludFR5cGVFbnVtIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcmlnaW4gZG9tYWluIGZyb20gd2hpY2ggdGhlIGN1cnJlbnQgY2xpZW50IHdhcyBsb2FkZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQ3VycmVudERvbWFpbixcclxuICAgICAgICAvLyBBUElzXHJcbiAgICAgICAgQ29yZUFwaSxcclxuICAgICAgICBNYXJrZXRpbmdBcGksXHJcbiAgICAgICAgU2VsZmNhcmVBcGksXHJcbiAgICAgICAgLy8gT00gYXBwc1xyXG4gICAgICAgIFF1b3RlV2l6YXJkLFxyXG4gICAgICAgIE9yZGVyRW50cnksXHJcbiAgICAgICAgT3JkZXJUcmFja2luZyxcclxuICAgICAgICAvLyBJbnRlcm5hbCBhcHBzXHJcbiAgICAgICAgTWV0cmFuZXQsXHJcbiAgICAgICAgVGVjaG5pY2FsSW52ZW50b3J5LFxyXG4gICAgICAgIFRlbXBsYXRlR2VuZXJhdG9yLFxyXG4gICAgICAgIFNhbGVzZm9yY2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXh0ZXJuYWwgVVJMcyAobm90IHRyZWF0bWVudCBhcHBsaWVkLCByZWplY3RlZCBpZiBVUkwgaXMgbm90IGZ1bGwpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRXh0ZXJuYWxcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBibHVlc2t5LmNvcmUubW9kZWxzLndlbGNvbWVQYWNrcyB7XHJcbiAgICBleHBvcnQgZW51bSBXZWxjb21lUGFja1N0YXRlRW51bSB7XHJcbiAgICAgICAgU3VibWl0dGVkLFxyXG4gICAgICAgIEJvdW5jZWQsXHJcbiAgICAgICAgU3VjY2VzcyxcclxuICAgICAgICBFcnJvcixcclxuICAgICAgICBFbXB0eSxcclxuICAgICAgICBBd2FpdGluZ0FkbWluLFxyXG4gICAgICAgIFVuc3Vic2NyaWJlZCxcclxuICAgICAgICBHbG9iYWxVbnN1YnNjcmliZWQsXHJcbiAgICAgICAgRXhjbHVkZWQsXHJcbiAgICAgICAgVW5rbm93bixcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZW51bSBXZWxjb21lUGFja1F1ZXVlRW51bSB7XHJcbiAgICAgICAgU3VibWl0dGVkLFxyXG4gICAgICAgIFJlamVjdGVkLFxyXG4gICAgICAgIFBlbmRpbmcsXHJcbiAgICAgICAgUmVhZCxcclxuICAgICAgICBXYWl0aW5nLFxyXG4gICAgICAgIEltcG9ydGVkLFxyXG4gICAgICAgIENvbXBsZXRlLFxyXG4gICAgICAgIEVtcHR5LFxyXG4gICAgICAgIFVua25vd24sXHJcbiAgICAgICAgRXhjbHVkZWQsXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJV2VsY29tZVBhY2tEdG8ge1xyXG4gICAgICAgIElkOiBzdHJpbmc7XHJcbiAgICAgICAgVGVtcGxhdGVJZDogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVyTWFuYWdlbWVudElkOiBzdHJpbmc7XHJcbiAgICAgICAgVGVtcGxhdGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWxBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgU3RhdGU6IHN0cmluZztcclxuICAgICAgICBRdWV1ZTogc3RyaW5nO1xyXG4gICAgICAgIE1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICBSZWNlaXZlZERhdGU6IERhdGU7XHJcbiAgICAgICAgU2VuZGluZ0RhdGU6IERhdGU7XHJcbiAgICAgICAgQWRtaW5FbWFpbEFkZHJlc3M6IHN0cmluZztcclxuICAgICAgICBJc0FkbWluUmVjaXBpZW50OiBib29sZWFuO1xyXG4gICAgICAgIC8vSXNBZG1pblN0cmF0ZWd5OiBib29sZWFuO1xyXG4gICAgICAgIENvbnRhY3RJZDogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJDb3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgU3Vic2lkaWFyeTogc3RyaW5nO1xyXG4gICAgICAgIFhtbFN0cmluZzogc3RyaW5nO1xyXG4gICAgICAgIEZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgIExhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgU2VuZGluZ1ByaW9yaXR5OiBzdHJpbmc7XHJcbiAgICAgICAgU2VsZkNhcmVSb2xlOiBzdHJpbmc7XHJcbiAgICAgICAgQmlsbGluZ0FjY291bnROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgTG9nb05hbWU6IHN0cmluZztcclxuICAgICAgICBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICBMb2dpbjogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVySWQ6IHN0cmluZztcclxuICAgICAgICBDdXN0b21lclNlcnZpY2VQaG9uZTogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyU2VydmljZUVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgSGllcmFyY2h5OiBJSGllcmFyY2h5RHRvO1xyXG4gICAgICAgIFVzZXJSZWNpcGllbnQ6IElVc2VyUmVjaXBpZW50RHRvO1xyXG4gICAgICAgIFByb2R1Y3RzOiBJUHJvZHVjdER0b1tdO1xyXG4gICAgICAgIE9mZmVyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIFJlY2lwaWVudFR5cGU6IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJcblxuXG5cbnZhciBibHVlc2t5O1xuKGZ1bmN0aW9uIChibHVlc2t5KSB7XG4gICAgdmFyIGNvcmU7XG4gICAgKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgICAgIHZhciBtb2RlbHM7XG4gICAgICAgIChmdW5jdGlvbiAobW9kZWxzKSB7XG4gICAgICAgICAgICB2YXIgY2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChjbGllbnRDb25maWcpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFbnVtIGdlbmVyYXRlZCBmcm9tIHRoZSBzZXJ2ZXIgdG8ga25vdyB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgZW5kcG9pbnQgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKEVuZHBvaW50VHlwZUVudW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE9yaWdpbiBkb21haW4gZnJvbSB3aGljaCB0aGUgY3VycmVudCBjbGllbnQgd2FzIGxvYWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIkN1cnJlbnREb21haW5cIl0gPSAwXSA9IFwiQ3VycmVudERvbWFpblwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBBUElzXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIkNvcmVBcGlcIl0gPSAxXSA9IFwiQ29yZUFwaVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJNYXJrZXRpbmdBcGlcIl0gPSAyXSA9IFwiTWFya2V0aW5nQXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlNlbGZjYXJlQXBpXCJdID0gM10gPSBcIlNlbGZjYXJlQXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9NIGFwcHNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiUXVvdGVXaXphcmRcIl0gPSA0XSA9IFwiUXVvdGVXaXphcmRcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiT3JkZXJFbnRyeVwiXSA9IDVdID0gXCJPcmRlckVudHJ5XCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk9yZGVyVHJhY2tpbmdcIl0gPSA2XSA9IFwiT3JkZXJUcmFja2luZ1wiO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbCBhcHBzXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk1ldHJhbmV0XCJdID0gN10gPSBcIk1ldHJhbmV0XCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlRlY2huaWNhbEludmVudG9yeVwiXSA9IDhdID0gXCJUZWNobmljYWxJbnZlbnRvcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiVGVtcGxhdGVHZW5lcmF0b3JcIl0gPSA5XSA9IFwiVGVtcGxhdGVHZW5lcmF0b3JcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiU2FsZXNmb3JjZVwiXSA9IDEwXSA9IFwiU2FsZXNmb3JjZVwiO1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogRXh0ZXJuYWwgVVJMcyAobm90IHRyZWF0bWVudCBhcHBsaWVkLCByZWplY3RlZCBpZiBVUkwgaXMgbm90IGZ1bGwpXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJFeHRlcm5hbFwiXSA9IDExXSA9IFwiRXh0ZXJuYWxcIjtcbiAgICAgICAgICAgICAgICB9KShjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bSB8fCAoY2xpZW50Q29uZmlnLkVuZHBvaW50VHlwZUVudW0gPSB7fSkpO1xuICAgICAgICAgICAgICAgIHZhciBFbmRwb2ludFR5cGVFbnVtID0gY2xpZW50Q29uZmlnLkVuZHBvaW50VHlwZUVudW07XG4gICAgICAgICAgICB9KShjbGllbnRDb25maWcgPSBtb2RlbHMuY2xpZW50Q29uZmlnIHx8IChtb2RlbHMuY2xpZW50Q29uZmlnID0ge30pKTtcbiAgICAgICAgfSkobW9kZWxzID0gY29yZS5tb2RlbHMgfHwgKGNvcmUubW9kZWxzID0ge30pKTtcbiAgICB9KShjb3JlID0gYmx1ZXNreS5jb3JlIHx8IChibHVlc2t5LmNvcmUgPSB7fSkpO1xufSkoYmx1ZXNreSB8fCAoYmx1ZXNreSA9IHt9KSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgYmx1ZXNreTtcbihmdW5jdGlvbiAoYmx1ZXNreSkge1xuICAgIHZhciBjb3JlO1xuICAgIChmdW5jdGlvbiAoY29yZSkge1xuICAgICAgICB2YXIgbW9kZWxzO1xuICAgICAgICAoZnVuY3Rpb24gKG1vZGVscykge1xuICAgICAgICAgICAgdmFyIHdlbGNvbWVQYWNrcztcbiAgICAgICAgICAgIChmdW5jdGlvbiAod2VsY29tZVBhY2tzKSB7XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChXZWxjb21lUGFja1N0YXRlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIlN1Ym1pdHRlZFwiXSA9IDBdID0gXCJTdWJtaXR0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJCb3VuY2VkXCJdID0gMV0gPSBcIkJvdW5jZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJTdWNjZXNzXCJdID0gMl0gPSBcIlN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJFcnJvclwiXSA9IDNdID0gXCJFcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkVtcHR5XCJdID0gNF0gPSBcIkVtcHR5XCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiQXdhaXRpbmdBZG1pblwiXSA9IDVdID0gXCJBd2FpdGluZ0FkbWluXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiVW5zdWJzY3JpYmVkXCJdID0gNl0gPSBcIlVuc3Vic2NyaWJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkdsb2JhbFVuc3Vic2NyaWJlZFwiXSA9IDddID0gXCJHbG9iYWxVbnN1YnNjcmliZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJFeGNsdWRlZFwiXSA9IDhdID0gXCJFeGNsdWRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIlVua25vd25cIl0gPSA5XSA9IFwiVW5rbm93blwiO1xuICAgICAgICAgICAgICAgIH0pKHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1N0YXRlRW51bSB8fCAod2VsY29tZVBhY2tzLldlbGNvbWVQYWNrU3RhdGVFbnVtID0ge30pKTtcbiAgICAgICAgICAgICAgICB2YXIgV2VsY29tZVBhY2tTdGF0ZUVudW0gPSB3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tTdGF0ZUVudW07XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChXZWxjb21lUGFja1F1ZXVlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlN1Ym1pdHRlZFwiXSA9IDBdID0gXCJTdWJtaXR0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJSZWplY3RlZFwiXSA9IDFdID0gXCJSZWplY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlBlbmRpbmdcIl0gPSAyXSA9IFwiUGVuZGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlJlYWRcIl0gPSAzXSA9IFwiUmVhZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIldhaXRpbmdcIl0gPSA0XSA9IFwiV2FpdGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIkltcG9ydGVkXCJdID0gNV0gPSBcIkltcG9ydGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiQ29tcGxldGVcIl0gPSA2XSA9IFwiQ29tcGxldGVcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJFbXB0eVwiXSA9IDddID0gXCJFbXB0eVwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlVua25vd25cIl0gPSA4XSA9IFwiVW5rbm93blwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIkV4Y2x1ZGVkXCJdID0gOV0gPSBcIkV4Y2x1ZGVkXCI7XG4gICAgICAgICAgICAgICAgfSkod2VsY29tZVBhY2tzLldlbGNvbWVQYWNrUXVldWVFbnVtIHx8ICh3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tRdWV1ZUVudW0gPSB7fSkpO1xuICAgICAgICAgICAgICAgIHZhciBXZWxjb21lUGFja1F1ZXVlRW51bSA9IHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1F1ZXVlRW51bTtcbiAgICAgICAgICAgIH0pKHdlbGNvbWVQYWNrcyA9IG1vZGVscy53ZWxjb21lUGFja3MgfHwgKG1vZGVscy53ZWxjb21lUGFja3MgPSB7fSkpO1xuICAgICAgICB9KShtb2RlbHMgPSBjb3JlLm1vZGVscyB8fCAoY29yZS5tb2RlbHMgPSB7fSkpO1xuICAgIH0pKGNvcmUgPSBibHVlc2t5LmNvcmUgfHwgKGJsdWVza3kuY29yZSA9IHt9KSk7XG59KShibHVlc2t5IHx8IChibHVlc2t5ID0ge30pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
