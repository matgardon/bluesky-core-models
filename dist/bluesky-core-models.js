

























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













































































































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VzL2Nhc2UtY3JlYXRpb24tdXJsLmR0by50cyIsImNvbmZpZy9lbmRwb2ludC10eXBlLmVudW0udHMiLCJ3ZWxjb21lLXBhY2tzL3dlbGNvbWUtcGFjay5kdG8udHMiLCJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pELElBQVU7QUFBVixDQUFBLFVBQVUsU0FBTztJQUFDLElBQUE7SUFBQSxDQUFBLFVBQUEsTUFBSTtRQUFDLElBQUE7UUFBQSxDQUFBLFVBQUEsUUFBTTtZQUFDLElBQUE7WUFBQSxDQUFBLFVBQUEsY0FBYTs7OztnQkFJdkMsQ0FBQSxVQUFZLGtCQUFnQjs7OztvQkFJeEIsaUJBQUEsaUJBQUEsbUJBQUEsS0FBQTs7b0JBRUEsaUJBQUEsaUJBQUEsYUFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGtCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsaUJBQUEsS0FBQTs7b0JBRUEsaUJBQUEsaUJBQUEsaUJBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxnQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLG1CQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGNBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSx3QkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLHVCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsZ0JBQUEsTUFBQTs7OztvQkFJQSxpQkFBQSxpQkFBQSxjQUFBLE1BQUE7bUJBckJRLGFBQUEscUJBQUEsYUFBQSxtQkFBZ0I7Z0JBQTVCLElBQVksbUJBQUEsYUFBQTtlQUpjLGVBQUEsT0FBQSxpQkFBQSxPQUFBLGVBQVk7V0FBbkIsU0FBQSxLQUFBLFdBQUEsS0FBQSxTQUFNO09BQVgsT0FBQSxRQUFBLFNBQUEsUUFBQSxPQUFJO0dBQVosWUFBQSxVQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakIsSUFBVTtBQUFWLENBQUEsVUFBVSxTQUFPO0lBQUMsSUFBQTtJQUFBLENBQUEsVUFBQSxNQUFJO1FBQUMsSUFBQTtRQUFBLENBQUEsVUFBQSxRQUFNO1lBQUMsSUFBQTtZQUFBLENBQUEsVUFBQSxjQUFhO2dCQUN2QyxDQUFBLFVBQVksc0JBQW9CO29CQUM1QixxQkFBQSxxQkFBQSxlQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxXQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsV0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLG1CQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsa0JBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSx3QkFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7bUJBVlEsYUFBQSx5QkFBQSxhQUFBLHVCQUFvQjtnQkFBaEMsSUFBWSx1QkFBQSxhQUFBO2dCQWFaLENBQUEsVUFBWSxzQkFBb0I7b0JBQzVCLHFCQUFBLHFCQUFBLGVBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxjQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLFVBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxXQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTttQkFWUSxhQUFBLHlCQUFBLGFBQUEsdUJBQW9CO2dCQUFoQyxJQUFZLHVCQUFBLGFBQUE7ZUFkYyxlQUFBLE9BQUEsaUJBQUEsT0FBQSxlQUFZO1dBQW5CLFNBQUEsS0FBQSxXQUFBLEtBQUEsU0FBTTtPQUFYLE9BQUEsUUFBQSxTQUFBLFFBQUEsT0FBSTtHQUFaLFlBQUEsVUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tXakIiLCJmaWxlIjoiYmx1ZXNreS1jb3JlLW1vZGVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBibHVlc2t5LmNvcmUubW9kZWxzLnVzZXJDYXNlIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUNhc2VDcmVhdGlvblVybER0byB7XHJcbiAgICAgICAgQ2FzZVVybDogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGJsdWVza3kuY29yZS5tb2RlbHMuY2xpZW50Q29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogRW51bSBnZW5lcmF0ZWQgZnJvbSB0aGUgc2VydmVyIHRvIGtub3cgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGVuZHBvaW50IGNvbmZpZ3VyYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBlbnVtIEVuZHBvaW50VHlwZUVudW0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9yaWdpbiBkb21haW4gZnJvbSB3aGljaCB0aGUgY3VycmVudCBjbGllbnQgd2FzIGxvYWRlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBDdXJyZW50RG9tYWluLFxyXG4gICAgICAgIC8vIEFQSXNcclxuICAgICAgICBDb3JlQXBpLFxyXG4gICAgICAgIE1hcmtldGluZ0FwaSxcclxuICAgICAgICBTZWxmY2FyZUFwaSxcclxuICAgICAgICAvLyBPTSBhcHBzXHJcbiAgICAgICAgUXVvdGVXaXphcmQsXHJcbiAgICAgICAgT3JkZXJFbnRyeSxcclxuICAgICAgICBPcmRlclRyYWNraW5nLFxyXG4gICAgICAgIC8vIEludGVybmFsIGFwcHNcclxuICAgICAgICBNZXRyYW5ldCxcclxuICAgICAgICBUZWNobmljYWxJbnZlbnRvcnksXHJcbiAgICAgICAgVGVtcGxhdGVHZW5lcmF0b3IsXHJcbiAgICAgICAgU2FsZXNmb3JjZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFeHRlcm5hbCBVUkxzIChub3QgdHJlYXRtZW50IGFwcGxpZWQsIHJlamVjdGVkIGlmIFVSTCBpcyBub3QgZnVsbClcclxuICAgICAgICAgKi9cclxuICAgICAgICBFeHRlcm5hbFxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGJsdWVza3kuY29yZS5tb2RlbHMud2VsY29tZVBhY2tzIHtcclxuICAgIGV4cG9ydCBlbnVtIFdlbGNvbWVQYWNrU3RhdGVFbnVtIHtcclxuICAgICAgICBTdWJtaXR0ZWQsXHJcbiAgICAgICAgQm91bmNlZCxcclxuICAgICAgICBTdWNjZXNzLFxyXG4gICAgICAgIEVycm9yLFxyXG4gICAgICAgIEVtcHR5LFxyXG4gICAgICAgIEF3YWl0aW5nQWRtaW4sXHJcbiAgICAgICAgVW5zdWJzY3JpYmVkLFxyXG4gICAgICAgIEdsb2JhbFVuc3Vic2NyaWJlZCxcclxuICAgICAgICBFeGNsdWRlZCxcclxuICAgICAgICBVbmtub3duLFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIFdlbGNvbWVQYWNrUXVldWVFbnVtIHtcclxuICAgICAgICBTdWJtaXR0ZWQsXHJcbiAgICAgICAgUmVqZWN0ZWQsXHJcbiAgICAgICAgUGVuZGluZyxcclxuICAgICAgICBSZWFkLFxyXG4gICAgICAgIFdhaXRpbmcsXHJcbiAgICAgICAgSW1wb3J0ZWQsXHJcbiAgICAgICAgQ29tcGxldGUsXHJcbiAgICAgICAgRW1wdHksXHJcbiAgICAgICAgVW5rbm93bixcclxuICAgICAgICBFeGNsdWRlZCxcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElXZWxjb21lUGFja0R0byB7XHJcbiAgICAgICAgSWQ6IHN0cmluZztcclxuICAgICAgICBUZW1wbGF0ZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgT3JkZXJNYW5hZ2VtZW50SWQ6IHN0cmluZztcclxuICAgICAgICBUZW1wbGF0ZU5hbWU6IHN0cmluZztcclxuICAgICAgICBFbWFpbEFkZHJlc3M6IHN0cmluZztcclxuICAgICAgICBTdGF0ZTogc3RyaW5nO1xyXG4gICAgICAgIFF1ZXVlOiBzdHJpbmc7XHJcbiAgICAgICAgTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgIFJlY2VpdmVkRGF0ZTogRGF0ZTtcclxuICAgICAgICBTZW5kaW5nRGF0ZTogRGF0ZTtcclxuICAgICAgICBBZG1pbkVtYWlsQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgIElzQWRtaW5SZWNpcGllbnQ6IGJvb2xlYW47XHJcbiAgICAgICAgLy9Jc0FkbWluU3RyYXRlZ3k6IGJvb2xlYW47XHJcbiAgICAgICAgQ29udGFjdElkOiBzdHJpbmc7XHJcbiAgICAgICAgVXNlckNvdW50cnk6IHN0cmluZztcclxuICAgICAgICBTdWJzaWRpYXJ5OiBzdHJpbmc7XHJcbiAgICAgICAgWG1sU3RyaW5nOiBzdHJpbmc7XHJcbiAgICAgICAgRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdE5hbWU6IHN0cmluZztcclxuICAgICAgICBTZW5kaW5nUHJpb3JpdHk6IHN0cmluZztcclxuICAgICAgICBTZWxmQ2FyZVJvbGU6IHN0cmluZztcclxuICAgICAgICBCaWxsaW5nQWNjb3VudE5hbWU6IHN0cmluZztcclxuICAgICAgICBMb2dvTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgIExvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgT3JkZXJJZDogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyU2VydmljZVBob25lOiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJTZXJ2aWNlRW1haWw6IHN0cmluZztcclxuICAgICAgICBIaWVyYXJjaHk6IElIaWVyYXJjaHlEdG87XHJcbiAgICAgICAgVXNlclJlY2lwaWVudDogSVVzZXJSZWNpcGllbnREdG87XHJcbiAgICAgICAgUHJvZHVjdHM6IElQcm9kdWN0RHRvW107XHJcbiAgICAgICAgT2ZmZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgUmVjaXBpZW50VHlwZTogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiIsIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgYmx1ZXNreTtcbihmdW5jdGlvbiAoYmx1ZXNreSkge1xuICAgIHZhciBjb3JlO1xuICAgIChmdW5jdGlvbiAoY29yZSkge1xuICAgICAgICB2YXIgbW9kZWxzO1xuICAgICAgICAoZnVuY3Rpb24gKG1vZGVscykge1xuICAgICAgICAgICAgdmFyIGNsaWVudENvbmZpZztcbiAgICAgICAgICAgIChmdW5jdGlvbiAoY2xpZW50Q29uZmlnKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW51bSBnZW5lcmF0ZWQgZnJvbSB0aGUgc2VydmVyIHRvIGtub3cgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGVuZHBvaW50IGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChFbmRwb2ludFR5cGVFbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBPcmlnaW4gZG9tYWluIGZyb20gd2hpY2ggdGhlIGN1cnJlbnQgY2xpZW50IHdhcyBsb2FkZWQuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJDdXJyZW50RG9tYWluXCJdID0gMF0gPSBcIkN1cnJlbnREb21haW5cIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gQVBJc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJDb3JlQXBpXCJdID0gMV0gPSBcIkNvcmVBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiTWFya2V0aW5nQXBpXCJdID0gMl0gPSBcIk1hcmtldGluZ0FwaVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJTZWxmY2FyZUFwaVwiXSA9IDNdID0gXCJTZWxmY2FyZUFwaVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBPTSBhcHBzXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlF1b3RlV2l6YXJkXCJdID0gNF0gPSBcIlF1b3RlV2l6YXJkXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk9yZGVyRW50cnlcIl0gPSA1XSA9IFwiT3JkZXJFbnRyeVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJPcmRlclRyYWNraW5nXCJdID0gNl0gPSBcIk9yZGVyVHJhY2tpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuYWwgYXBwc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJNZXRyYW5ldFwiXSA9IDddID0gXCJNZXRyYW5ldFwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJUZWNobmljYWxJbnZlbnRvcnlcIl0gPSA4XSA9IFwiVGVjaG5pY2FsSW52ZW50b3J5XCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlRlbXBsYXRlR2VuZXJhdG9yXCJdID0gOV0gPSBcIlRlbXBsYXRlR2VuZXJhdG9yXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlNhbGVzZm9yY2VcIl0gPSAxMF0gPSBcIlNhbGVzZm9yY2VcIjtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEV4dGVybmFsIFVSTHMgKG5vdCB0cmVhdG1lbnQgYXBwbGllZCwgcmVqZWN0ZWQgaWYgVVJMIGlzIG5vdCBmdWxsKVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiRXh0ZXJuYWxcIl0gPSAxMV0gPSBcIkV4dGVybmFsXCI7XG4gICAgICAgICAgICAgICAgfSkoY2xpZW50Q29uZmlnLkVuZHBvaW50VHlwZUVudW0gfHwgKGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtID0ge30pKTtcbiAgICAgICAgICAgICAgICB2YXIgRW5kcG9pbnRUeXBlRW51bSA9IGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtO1xuICAgICAgICAgICAgfSkoY2xpZW50Q29uZmlnID0gbW9kZWxzLmNsaWVudENvbmZpZyB8fCAobW9kZWxzLmNsaWVudENvbmZpZyA9IHt9KSk7XG4gICAgICAgIH0pKG1vZGVscyA9IGNvcmUubW9kZWxzIHx8IChjb3JlLm1vZGVscyA9IHt9KSk7XG4gICAgfSkoY29yZSA9IGJsdWVza3kuY29yZSB8fCAoYmx1ZXNreS5jb3JlID0ge30pKTtcbn0pKGJsdWVza3kgfHwgKGJsdWVza3kgPSB7fSkpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBibHVlc2t5O1xuKGZ1bmN0aW9uIChibHVlc2t5KSB7XG4gICAgdmFyIGNvcmU7XG4gICAgKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgICAgIHZhciBtb2RlbHM7XG4gICAgICAgIChmdW5jdGlvbiAobW9kZWxzKSB7XG4gICAgICAgICAgICB2YXIgd2VsY29tZVBhY2tzO1xuICAgICAgICAgICAgKGZ1bmN0aW9uICh3ZWxjb21lUGFja3MpIHtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKFdlbGNvbWVQYWNrU3RhdGVFbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiU3VibWl0dGVkXCJdID0gMF0gPSBcIlN1Ym1pdHRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkJvdW5jZWRcIl0gPSAxXSA9IFwiQm91bmNlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIlN1Y2Nlc3NcIl0gPSAyXSA9IFwiU3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkVycm9yXCJdID0gM10gPSBcIkVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiRW1wdHlcIl0gPSA0XSA9IFwiRW1wdHlcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJBd2FpdGluZ0FkbWluXCJdID0gNV0gPSBcIkF3YWl0aW5nQWRtaW5cIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJVbnN1YnNjcmliZWRcIl0gPSA2XSA9IFwiVW5zdWJzY3JpYmVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiR2xvYmFsVW5zdWJzY3JpYmVkXCJdID0gN10gPSBcIkdsb2JhbFVuc3Vic2NyaWJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkV4Y2x1ZGVkXCJdID0gOF0gPSBcIkV4Y2x1ZGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiVW5rbm93blwiXSA9IDldID0gXCJVbmtub3duXCI7XG4gICAgICAgICAgICAgICAgfSkod2VsY29tZVBhY2tzLldlbGNvbWVQYWNrU3RhdGVFbnVtIHx8ICh3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tTdGF0ZUVudW0gPSB7fSkpO1xuICAgICAgICAgICAgICAgIHZhciBXZWxjb21lUGFja1N0YXRlRW51bSA9IHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1N0YXRlRW51bTtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKFdlbGNvbWVQYWNrUXVldWVFbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiU3VibWl0dGVkXCJdID0gMF0gPSBcIlN1Ym1pdHRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlJlamVjdGVkXCJdID0gMV0gPSBcIlJlamVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiUGVuZGluZ1wiXSA9IDJdID0gXCJQZW5kaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiUmVhZFwiXSA9IDNdID0gXCJSZWFkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiV2FpdGluZ1wiXSA9IDRdID0gXCJXYWl0aW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiSW1wb3J0ZWRcIl0gPSA1XSA9IFwiSW1wb3J0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJDb21wbGV0ZVwiXSA9IDZdID0gXCJDb21wbGV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIkVtcHR5XCJdID0gN10gPSBcIkVtcHR5XCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiVW5rbm93blwiXSA9IDhdID0gXCJVbmtub3duXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiRXhjbHVkZWRcIl0gPSA5XSA9IFwiRXhjbHVkZWRcIjtcbiAgICAgICAgICAgICAgICB9KSh3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tRdWV1ZUVudW0gfHwgKHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1F1ZXVlRW51bSA9IHt9KSk7XG4gICAgICAgICAgICAgICAgdmFyIFdlbGNvbWVQYWNrUXVldWVFbnVtID0gd2VsY29tZVBhY2tzLldlbGNvbWVQYWNrUXVldWVFbnVtO1xuICAgICAgICAgICAgfSkod2VsY29tZVBhY2tzID0gbW9kZWxzLndlbGNvbWVQYWNrcyB8fCAobW9kZWxzLndlbGNvbWVQYWNrcyA9IHt9KSk7XG4gICAgICAgIH0pKG1vZGVscyA9IGNvcmUubW9kZWxzIHx8IChjb3JlLm1vZGVscyA9IHt9KSk7XG4gICAgfSkoY29yZSA9IGJsdWVza3kuY29yZSB8fCAoYmx1ZXNreS5jb3JlID0ge30pKTtcbn0pKGJsdWVza3kgfHwgKGJsdWVza3kgPSB7fSkpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
