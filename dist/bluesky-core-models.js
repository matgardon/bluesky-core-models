







































































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



























































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9maWxlLXVwbG9hZC1iYXNlLmR0by50cyIsImNvbmZpZy9lbmRwb2ludC10eXBlLmVudW0udHMiLCJ3ZWxjb21lLXBhY2tzL3dlbGNvbWUtcGFjay5kdG8udHMiLCJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRCxJQUFVO0FBQVYsQ0FBQSxVQUFVLFNBQU87SUFBQyxJQUFBO0lBQUEsQ0FBQSxVQUFBLE1BQUk7UUFBQyxJQUFBO1FBQUEsQ0FBQSxVQUFBLFFBQU07WUFBQyxJQUFBO1lBQUEsQ0FBQSxVQUFBLGNBQWE7Ozs7Z0JBSXZDLENBQUEsVUFBWSxrQkFBZ0I7Ozs7b0JBSXhCLGlCQUFBLGlCQUFBLG1CQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGFBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxrQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGlCQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGlCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsZ0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxtQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxjQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsd0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSx1QkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGdCQUFBLE1BQUE7Ozs7b0JBSUEsaUJBQUEsaUJBQUEsY0FBQSxNQUFBO21CQXJCUSxhQUFBLHFCQUFBLGFBQUEsbUJBQWdCO2dCQUE1QixJQUFZLG1CQUFBLGFBQUE7ZUFKYyxlQUFBLE9BQUEsaUJBQUEsT0FBQSxlQUFZO1dBQW5CLFNBQUEsS0FBQSxXQUFBLEtBQUEsU0FBTTtPQUFYLE9BQUEsUUFBQSxTQUFBLFFBQUEsT0FBSTtHQUFaLFlBQUEsVUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakIsSUFBVTtBQUFWLENBQUEsVUFBVSxTQUFPO0lBQUMsSUFBQTtJQUFBLENBQUEsVUFBQSxNQUFJO1FBQUMsSUFBQTtRQUFBLENBQUEsVUFBQSxRQUFNO1lBQUMsSUFBQTtZQUFBLENBQUEsVUFBQSxjQUFhO2dCQUN2QyxDQUFBLFVBQVksc0JBQW9CO29CQUM1QixxQkFBQSxxQkFBQSxlQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxXQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsV0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLG1CQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsa0JBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSx3QkFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7bUJBVlEsYUFBQSx5QkFBQSxhQUFBLHVCQUFvQjtnQkFBaEMsSUFBWSx1QkFBQSxhQUFBO2dCQWFaLENBQUEsVUFBWSxzQkFBb0I7b0JBQzVCLHFCQUFBLHFCQUFBLGVBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxjQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLFVBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxXQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTttQkFWUSxhQUFBLHlCQUFBLGFBQUEsdUJBQW9CO2dCQUFoQyxJQUFZLHVCQUFBLGFBQUE7ZUFkYyxlQUFBLE9BQUEsaUJBQUEsT0FBQSxlQUFZO1dBQW5CLFNBQUEsS0FBQSxXQUFBLEtBQUEsU0FBTTtPQUFYLE9BQUEsUUFBQSxTQUFBLFFBQUEsT0FBSTtHQUFaLFlBQUEsVUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN3UmpCIiwiZmlsZSI6ImJsdWVza3ktY29yZS1tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscyB7XHJcblx0LyoqIEJhc2UgaW5mb3JtYXRpb24gZm9yIGEgZmlsZSB1cGxvYWQuICovXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJRmlsZVVwbG9hZEJhc2VEdG8ge1xyXG5cdFx0LyoqIEZpbGUgZW5jb2RlZCBpbiBiYXNlIDY0LiAqL1xyXG5cdFx0RmlsZUJhc2U2NFVybDogc3RyaW5nO1xyXG5cdFx0LyoqIE5hbWUgb2YgdGhlIGZpbGUuICovXHJcblx0XHRGaWxlTmFtZTogc3RyaW5nO1xyXG5cdFx0LyoqIENvbnRlbnQgVHlwZS4gKi9cclxuXHRcdENvbnRlbnRUeXBlOiBzdHJpbmc7XHJcblx0fVxyXG59XHJcbiIsIm5hbWVzcGFjZSBibHVlc2t5LmNvcmUubW9kZWxzLmNsaWVudENvbmZpZyB7XHJcbiAgICAvKipcclxuICAgICAqIEVudW0gZ2VuZXJhdGVkIGZyb20gdGhlIHNlcnZlciB0byBrbm93IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBlbmRwb2ludCBjb25maWd1cmF0aW9uLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZW51bSBFbmRwb2ludFR5cGVFbnVtIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcmlnaW4gZG9tYWluIGZyb20gd2hpY2ggdGhlIGN1cnJlbnQgY2xpZW50IHdhcyBsb2FkZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQ3VycmVudERvbWFpbixcclxuICAgICAgICAvLyBBUElzXHJcbiAgICAgICAgQ29yZUFwaSxcclxuICAgICAgICBNYXJrZXRpbmdBcGksXHJcbiAgICAgICAgU2VsZmNhcmVBcGksXHJcbiAgICAgICAgLy8gT00gYXBwc1xyXG4gICAgICAgIFF1b3RlV2l6YXJkLFxyXG4gICAgICAgIE9yZGVyRW50cnksXHJcbiAgICAgICAgT3JkZXJUcmFja2luZyxcclxuICAgICAgICAvLyBJbnRlcm5hbCBhcHBzXHJcbiAgICAgICAgTWV0cmFuZXQsXHJcbiAgICAgICAgVGVjaG5pY2FsSW52ZW50b3J5LFxyXG4gICAgICAgIFRlbXBsYXRlR2VuZXJhdG9yLFxyXG4gICAgICAgIFNhbGVzZm9yY2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXh0ZXJuYWwgVVJMcyAobm90IHRyZWF0bWVudCBhcHBsaWVkLCByZWplY3RlZCBpZiBVUkwgaXMgbm90IGZ1bGwpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRXh0ZXJuYWxcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBibHVlc2t5LmNvcmUubW9kZWxzLndlbGNvbWVQYWNrcyB7XHJcbiAgICBleHBvcnQgZW51bSBXZWxjb21lUGFja1N0YXRlRW51bSB7XHJcbiAgICAgICAgU3VibWl0dGVkLFxyXG4gICAgICAgIEJvdW5jZWQsXHJcbiAgICAgICAgU3VjY2VzcyxcclxuICAgICAgICBFcnJvcixcclxuICAgICAgICBFbXB0eSxcclxuICAgICAgICBBd2FpdGluZ0FkbWluLFxyXG4gICAgICAgIFVuc3Vic2NyaWJlZCxcclxuICAgICAgICBHbG9iYWxVbnN1YnNjcmliZWQsXHJcbiAgICAgICAgRXhjbHVkZWQsXHJcbiAgICAgICAgVW5rbm93bixcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZW51bSBXZWxjb21lUGFja1F1ZXVlRW51bSB7XHJcbiAgICAgICAgU3VibWl0dGVkLFxyXG4gICAgICAgIFJlamVjdGVkLFxyXG4gICAgICAgIFBlbmRpbmcsXHJcbiAgICAgICAgUmVhZCxcclxuICAgICAgICBXYWl0aW5nLFxyXG4gICAgICAgIEltcG9ydGVkLFxyXG4gICAgICAgIENvbXBsZXRlLFxyXG4gICAgICAgIEVtcHR5LFxyXG4gICAgICAgIFVua25vd24sXHJcbiAgICAgICAgRXhjbHVkZWQsXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJV2VsY29tZVBhY2tEdG8ge1xyXG4gICAgICAgIElkOiBzdHJpbmc7XHJcbiAgICAgICAgVGVtcGxhdGVJZDogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVyTWFuYWdlbWVudElkOiBzdHJpbmc7XHJcbiAgICAgICAgVGVtcGxhdGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWxBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgU3RhdGU6IHN0cmluZztcclxuICAgICAgICBRdWV1ZTogc3RyaW5nO1xyXG4gICAgICAgIE1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICBSZWNlaXZlZERhdGU6IERhdGU7XHJcbiAgICAgICAgU2VuZGluZ0RhdGU6IERhdGU7XHJcbiAgICAgICAgQWRtaW5FbWFpbEFkZHJlc3M6IHN0cmluZztcclxuICAgICAgICBJc0FkbWluUmVjaXBpZW50OiBib29sZWFuO1xyXG4gICAgICAgIC8vSXNBZG1pblN0cmF0ZWd5OiBib29sZWFuO1xyXG4gICAgICAgIENvbnRhY3RJZDogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJDb3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgU3Vic2lkaWFyeTogc3RyaW5nO1xyXG4gICAgICAgIFhtbFN0cmluZzogc3RyaW5nO1xyXG4gICAgICAgIEZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgIExhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgU2VuZGluZ1ByaW9yaXR5OiBzdHJpbmc7XHJcbiAgICAgICAgU2VsZkNhcmVSb2xlOiBzdHJpbmc7XHJcbiAgICAgICAgQmlsbGluZ0FjY291bnROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgTG9nb05hbWU6IHN0cmluZztcclxuICAgICAgICBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICBMb2dpbjogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVySWQ6IHN0cmluZztcclxuICAgICAgICBDdXN0b21lclNlcnZpY2VQaG9uZTogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyU2VydmljZUVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgSGllcmFyY2h5OiBJSGllcmFyY2h5RHRvO1xyXG4gICAgICAgIFVzZXJSZWNpcGllbnQ6IElVc2VyUmVjaXBpZW50RHRvO1xyXG4gICAgICAgIFByb2R1Y3RzOiBJUHJvZHVjdER0b1tdO1xyXG4gICAgICAgIE9mZmVyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIFJlY2lwaWVudFR5cGU6IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgYmx1ZXNreTtcbihmdW5jdGlvbiAoYmx1ZXNreSkge1xuICAgIHZhciBjb3JlO1xuICAgIChmdW5jdGlvbiAoY29yZSkge1xuICAgICAgICB2YXIgbW9kZWxzO1xuICAgICAgICAoZnVuY3Rpb24gKG1vZGVscykge1xuICAgICAgICAgICAgdmFyIGNsaWVudENvbmZpZztcbiAgICAgICAgICAgIChmdW5jdGlvbiAoY2xpZW50Q29uZmlnKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW51bSBnZW5lcmF0ZWQgZnJvbSB0aGUgc2VydmVyIHRvIGtub3cgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGVuZHBvaW50IGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChFbmRwb2ludFR5cGVFbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBPcmlnaW4gZG9tYWluIGZyb20gd2hpY2ggdGhlIGN1cnJlbnQgY2xpZW50IHdhcyBsb2FkZWQuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJDdXJyZW50RG9tYWluXCJdID0gMF0gPSBcIkN1cnJlbnREb21haW5cIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gQVBJc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJDb3JlQXBpXCJdID0gMV0gPSBcIkNvcmVBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiTWFya2V0aW5nQXBpXCJdID0gMl0gPSBcIk1hcmtldGluZ0FwaVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJTZWxmY2FyZUFwaVwiXSA9IDNdID0gXCJTZWxmY2FyZUFwaVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBPTSBhcHBzXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlF1b3RlV2l6YXJkXCJdID0gNF0gPSBcIlF1b3RlV2l6YXJkXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk9yZGVyRW50cnlcIl0gPSA1XSA9IFwiT3JkZXJFbnRyeVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJPcmRlclRyYWNraW5nXCJdID0gNl0gPSBcIk9yZGVyVHJhY2tpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuYWwgYXBwc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJNZXRyYW5ldFwiXSA9IDddID0gXCJNZXRyYW5ldFwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJUZWNobmljYWxJbnZlbnRvcnlcIl0gPSA4XSA9IFwiVGVjaG5pY2FsSW52ZW50b3J5XCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlRlbXBsYXRlR2VuZXJhdG9yXCJdID0gOV0gPSBcIlRlbXBsYXRlR2VuZXJhdG9yXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlNhbGVzZm9yY2VcIl0gPSAxMF0gPSBcIlNhbGVzZm9yY2VcIjtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEV4dGVybmFsIFVSTHMgKG5vdCB0cmVhdG1lbnQgYXBwbGllZCwgcmVqZWN0ZWQgaWYgVVJMIGlzIG5vdCBmdWxsKVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiRXh0ZXJuYWxcIl0gPSAxMV0gPSBcIkV4dGVybmFsXCI7XG4gICAgICAgICAgICAgICAgfSkoY2xpZW50Q29uZmlnLkVuZHBvaW50VHlwZUVudW0gfHwgKGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtID0ge30pKTtcbiAgICAgICAgICAgICAgICB2YXIgRW5kcG9pbnRUeXBlRW51bSA9IGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtO1xuICAgICAgICAgICAgfSkoY2xpZW50Q29uZmlnID0gbW9kZWxzLmNsaWVudENvbmZpZyB8fCAobW9kZWxzLmNsaWVudENvbmZpZyA9IHt9KSk7XG4gICAgICAgIH0pKG1vZGVscyA9IGNvcmUubW9kZWxzIHx8IChjb3JlLm1vZGVscyA9IHt9KSk7XG4gICAgfSkoY29yZSA9IGJsdWVza3kuY29yZSB8fCAoYmx1ZXNreS5jb3JlID0ge30pKTtcbn0pKGJsdWVza3kgfHwgKGJsdWVza3kgPSB7fSkpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgYmx1ZXNreTtcbihmdW5jdGlvbiAoYmx1ZXNreSkge1xuICAgIHZhciBjb3JlO1xuICAgIChmdW5jdGlvbiAoY29yZSkge1xuICAgICAgICB2YXIgbW9kZWxzO1xuICAgICAgICAoZnVuY3Rpb24gKG1vZGVscykge1xuICAgICAgICAgICAgdmFyIHdlbGNvbWVQYWNrcztcbiAgICAgICAgICAgIChmdW5jdGlvbiAod2VsY29tZVBhY2tzKSB7XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChXZWxjb21lUGFja1N0YXRlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIlN1Ym1pdHRlZFwiXSA9IDBdID0gXCJTdWJtaXR0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJCb3VuY2VkXCJdID0gMV0gPSBcIkJvdW5jZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJTdWNjZXNzXCJdID0gMl0gPSBcIlN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJFcnJvclwiXSA9IDNdID0gXCJFcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkVtcHR5XCJdID0gNF0gPSBcIkVtcHR5XCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiQXdhaXRpbmdBZG1pblwiXSA9IDVdID0gXCJBd2FpdGluZ0FkbWluXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiVW5zdWJzY3JpYmVkXCJdID0gNl0gPSBcIlVuc3Vic2NyaWJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkdsb2JhbFVuc3Vic2NyaWJlZFwiXSA9IDddID0gXCJHbG9iYWxVbnN1YnNjcmliZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJFeGNsdWRlZFwiXSA9IDhdID0gXCJFeGNsdWRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIlVua25vd25cIl0gPSA5XSA9IFwiVW5rbm93blwiO1xuICAgICAgICAgICAgICAgIH0pKHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1N0YXRlRW51bSB8fCAod2VsY29tZVBhY2tzLldlbGNvbWVQYWNrU3RhdGVFbnVtID0ge30pKTtcbiAgICAgICAgICAgICAgICB2YXIgV2VsY29tZVBhY2tTdGF0ZUVudW0gPSB3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tTdGF0ZUVudW07XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChXZWxjb21lUGFja1F1ZXVlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlN1Ym1pdHRlZFwiXSA9IDBdID0gXCJTdWJtaXR0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJSZWplY3RlZFwiXSA9IDFdID0gXCJSZWplY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlBlbmRpbmdcIl0gPSAyXSA9IFwiUGVuZGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlJlYWRcIl0gPSAzXSA9IFwiUmVhZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIldhaXRpbmdcIl0gPSA0XSA9IFwiV2FpdGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIkltcG9ydGVkXCJdID0gNV0gPSBcIkltcG9ydGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiQ29tcGxldGVcIl0gPSA2XSA9IFwiQ29tcGxldGVcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJFbXB0eVwiXSA9IDddID0gXCJFbXB0eVwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlVua25vd25cIl0gPSA4XSA9IFwiVW5rbm93blwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIkV4Y2x1ZGVkXCJdID0gOV0gPSBcIkV4Y2x1ZGVkXCI7XG4gICAgICAgICAgICAgICAgfSkod2VsY29tZVBhY2tzLldlbGNvbWVQYWNrUXVldWVFbnVtIHx8ICh3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tRdWV1ZUVudW0gPSB7fSkpO1xuICAgICAgICAgICAgICAgIHZhciBXZWxjb21lUGFja1F1ZXVlRW51bSA9IHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1F1ZXVlRW51bTtcbiAgICAgICAgICAgIH0pKHdlbGNvbWVQYWNrcyA9IG1vZGVscy53ZWxjb21lUGFja3MgfHwgKG1vZGVscy53ZWxjb21lUGFja3MgPSB7fSkpO1xuICAgICAgICB9KShtb2RlbHMgPSBjb3JlLm1vZGVscyB8fCAoY29yZS5tb2RlbHMgPSB7fSkpO1xuICAgIH0pKGNvcmUgPSBibHVlc2t5LmNvcmUgfHwgKGJsdWVza3kuY29yZSA9IHt9KSk7XG59KShibHVlc2t5IHx8IChibHVlc2t5ID0ge30pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9