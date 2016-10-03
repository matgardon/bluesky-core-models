





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

























































































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VzL3NhbGVzZm9yY2UtY2FzZS5kdG8udHMiLCJjb25maWcvZW5kcG9pbnQtdHlwZS5lbnVtLnRzIiwid2VsY29tZS1wYWNrcy93ZWxjb21lLXBhY2suZHRvLnRzIiwiYmx1ZXNreS1jb3JlLW1vZGVscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkM7Ozs7OztBQzFCRCxJQUFVO0FBQVYsQ0FBQSxVQUFVLFNBQU87SUFBQyxJQUFBO0lBQUEsQ0FBQSxVQUFBLE1BQUk7UUFBQyxJQUFBO1FBQUEsQ0FBQSxVQUFBLFFBQU07WUFBQyxJQUFBO1lBQUEsQ0FBQSxVQUFBLGNBQWE7Ozs7Z0JBSXZDLENBQUEsVUFBWSxrQkFBZ0I7Ozs7b0JBSXhCLGlCQUFBLGlCQUFBLG1CQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGFBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxrQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGlCQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGlCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsZ0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxtQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxjQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsd0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSx1QkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGdCQUFBLE1BQUE7Ozs7b0JBSUEsaUJBQUEsaUJBQUEsY0FBQSxNQUFBO21CQXJCUSxhQUFBLHFCQUFBLGFBQUEsbUJBQWdCO2dCQUE1QixJQUFZLG1CQUFBLGFBQUE7ZUFKYyxlQUFBLE9BQUEsaUJBQUEsT0FBQSxlQUFZO1dBQW5CLFNBQUEsS0FBQSxXQUFBLEtBQUEsU0FBTTtPQUFYLE9BQUEsUUFBQSxTQUFBLFFBQUEsT0FBSTtHQUFaLFlBQUEsVUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQixJQUFVO0FBQVYsQ0FBQSxVQUFVLFNBQU87SUFBQyxJQUFBO0lBQUEsQ0FBQSxVQUFBLE1BQUk7UUFBQyxJQUFBO1FBQUEsQ0FBQSxVQUFBLFFBQU07WUFBQyxJQUFBO1lBQUEsQ0FBQSxVQUFBLGNBQWE7Z0JBQ3ZDLENBQUEsVUFBWSxzQkFBb0I7b0JBQzVCLHFCQUFBLHFCQUFBLGVBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLFdBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxXQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsbUJBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxrQkFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLHdCQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTttQkFWUSxhQUFBLHlCQUFBLGFBQUEsdUJBQW9CO2dCQUFoQyxJQUFZLHVCQUFBLGFBQUE7Z0JBYVosQ0FBQSxVQUFZLHNCQUFvQjtvQkFDNUIscUJBQUEscUJBQUEsZUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsVUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxjQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLFdBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO21CQVZRLGFBQUEseUJBQUEsYUFBQSx1QkFBb0I7Z0JBQWhDLElBQVksdUJBQUEsYUFBQTtlQWRjLGVBQUEsT0FBQSxpQkFBQSxPQUFBLGVBQVk7V0FBbkIsU0FBQSxLQUFBLFdBQUEsS0FBQSxTQUFNO09BQVgsT0FBQSxRQUFBLFNBQUEsUUFBQSxPQUFJO0dBQVosWUFBQSxVQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzBSakIiLCJmaWxlIjoiYmx1ZXNreS1jb3JlLW1vZGVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBibHVlc2t5LmNvcmUubW9kZWxzLmNhc2VzIHtcclxuICAgIC8qKiBEdG8gb2YgYSBzYWxlcyBmb3JjZSBjYXNlLlxyXG4gICAgKiBBIGNhc2UgaXMgYSBkZXNjcmlwdGlvbiBvZiBhIGN1c3RvbWVyJ3MgZmVlZGJhY2ssIHByb2JsZW0sIG9yIHF1ZXN0aW9uLlxyXG4gICAgKiBDYXNlcyBhcmUgdXNlZCB0byB0cmFjayBhbmQgc29sdmUgY3VzdG9tZXJzJyBpc3N1ZXMuICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTYWxlc2ZvcmNlQ2FzZUR0byB7XHJcbiAgICAgICAgLyoqIElkZW50aWZpZXIgb2YgdGhlIGNhc2UuICovXHJcbiAgICAgICAgSWQ6IHN0cmluZztcclxuICAgICAgICAvKiogQ2FzZSBzdGF0dXMuRXhhbXBsZTogTmV3LCBBY2tub3dsZWRnZSwgUGVuZGluZyBjdXN0b21lciwgT24gZ29pbmcsIFJhaXNlZCB0byBTdXBwbGllciwgUmFpc2VkLCBDbG9zaW5nLCBQZW5kaW5nIGNvbXBsZXRpb24sIFVwZGF0ZSBvZiBzdXBwbGllciBjYXNlLCBDbG9zaW5nIG9mIHN1cHBsaWVyIGNhc2UsIENsb3NlLiAqL1xyXG4gICAgICAgIFN0YXR1czogc3RyaW5nO1xyXG4gICAgICAgIC8qKiBDYXNlIHNldmVyaXR5LiAqL1xyXG4gICAgICAgIFNldmVyaXR5OiBzdHJpbmc7XHJcbiAgICAgICAgLyoqIFVuaXF1ZSBudW1iZXIgYXV0b21hdGljYWxseSBhc3NpZ25lZCB0byB0aGUgY2FzZS4gKi9cclxuICAgICAgICBOdW1iZXI6IHN0cmluZztcclxuICAgICAgICAvKiogUmVjb3JkIHR5cGUgbmFtZS4gKi9cclxuICAgICAgICBSZWNvcmRUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgLyoqIEJyaWVmIGRlc2NyaXB0aW9uIG9mIGN1c3RvbWVyJ3MgaXNzdWUuICovXHJcbiAgICAgICAgU3ViamVjdDogc3RyaW5nO1xyXG4gICAgICAgIC8qKiBDcmVhdGlvbiBkYXRlIG9mIHRoZSBjYXNlLiAqL1xyXG4gICAgICAgIENyZWF0ZWREYXRlOiBEYXRlO1xyXG4gICAgICAgIC8qKiBDYXNlIG93bmVyJ3MgbmFtZS4gKi9cclxuICAgICAgICBPd25lck5hbWU6IHN0cmluZztcclxuICAgICAgICAvKiogQ2FzZSBjb250YWN0J3MgbmFtZS4gKi9cclxuICAgICAgICBDb250YWN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgIC8qKiBVcmwgdG8gdGhlIGNhc2UgaW4gU2FsZXNGb3JjZS4gKi9cclxuICAgICAgICBDYXNlVXJsOiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIGJsdWVza3kuY29yZS5tb2RlbHMuY2xpZW50Q29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogRW51bSBnZW5lcmF0ZWQgZnJvbSB0aGUgc2VydmVyIHRvIGtub3cgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGVuZHBvaW50IGNvbmZpZ3VyYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBlbnVtIEVuZHBvaW50VHlwZUVudW0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9yaWdpbiBkb21haW4gZnJvbSB3aGljaCB0aGUgY3VycmVudCBjbGllbnQgd2FzIGxvYWRlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBDdXJyZW50RG9tYWluLFxyXG4gICAgICAgIC8vIEFQSXNcclxuICAgICAgICBDb3JlQXBpLFxyXG4gICAgICAgIE1hcmtldGluZ0FwaSxcclxuICAgICAgICBTZWxmY2FyZUFwaSxcclxuICAgICAgICAvLyBPTSBhcHBzXHJcbiAgICAgICAgUXVvdGVXaXphcmQsXHJcbiAgICAgICAgT3JkZXJFbnRyeSxcclxuICAgICAgICBPcmRlclRyYWNraW5nLFxyXG4gICAgICAgIC8vIEludGVybmFsIGFwcHNcclxuICAgICAgICBNZXRyYW5ldCxcclxuICAgICAgICBUZWNobmljYWxJbnZlbnRvcnksXHJcbiAgICAgICAgVGVtcGxhdGVHZW5lcmF0b3IsXHJcbiAgICAgICAgU2FsZXNmb3JjZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFeHRlcm5hbCBVUkxzIChub3QgdHJlYXRtZW50IGFwcGxpZWQsIHJlamVjdGVkIGlmIFVSTCBpcyBub3QgZnVsbClcclxuICAgICAgICAgKi9cclxuICAgICAgICBFeHRlcm5hbFxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGJsdWVza3kuY29yZS5tb2RlbHMud2VsY29tZVBhY2tzIHtcclxuICAgIGV4cG9ydCBlbnVtIFdlbGNvbWVQYWNrU3RhdGVFbnVtIHtcclxuICAgICAgICBTdWJtaXR0ZWQsXHJcbiAgICAgICAgQm91bmNlZCxcclxuICAgICAgICBTdWNjZXNzLFxyXG4gICAgICAgIEVycm9yLFxyXG4gICAgICAgIEVtcHR5LFxyXG4gICAgICAgIEF3YWl0aW5nQWRtaW4sXHJcbiAgICAgICAgVW5zdWJzY3JpYmVkLFxyXG4gICAgICAgIEdsb2JhbFVuc3Vic2NyaWJlZCxcclxuICAgICAgICBFeGNsdWRlZCxcclxuICAgICAgICBVbmtub3duLFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIFdlbGNvbWVQYWNrUXVldWVFbnVtIHtcclxuICAgICAgICBTdWJtaXR0ZWQsXHJcbiAgICAgICAgUmVqZWN0ZWQsXHJcbiAgICAgICAgUGVuZGluZyxcclxuICAgICAgICBSZWFkLFxyXG4gICAgICAgIFdhaXRpbmcsXHJcbiAgICAgICAgSW1wb3J0ZWQsXHJcbiAgICAgICAgQ29tcGxldGUsXHJcbiAgICAgICAgRW1wdHksXHJcbiAgICAgICAgVW5rbm93bixcclxuICAgICAgICBFeGNsdWRlZCxcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElXZWxjb21lUGFja0R0byB7XHJcbiAgICAgICAgSWQ6IHN0cmluZztcclxuICAgICAgICBUZW1wbGF0ZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgT3JkZXJNYW5hZ2VtZW50SWQ6IHN0cmluZztcclxuICAgICAgICBUZW1wbGF0ZU5hbWU6IHN0cmluZztcclxuICAgICAgICBFbWFpbEFkZHJlc3M6IHN0cmluZztcclxuICAgICAgICBTdGF0ZTogc3RyaW5nO1xyXG4gICAgICAgIFF1ZXVlOiBzdHJpbmc7XHJcbiAgICAgICAgTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgIFJlY2VpdmVkRGF0ZTogRGF0ZTtcclxuICAgICAgICBTZW5kaW5nRGF0ZTogRGF0ZTtcclxuICAgICAgICBBZG1pbkVtYWlsQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgIElzQWRtaW5SZWNpcGllbnQ6IGJvb2xlYW47XHJcbiAgICAgICAgLy9Jc0FkbWluU3RyYXRlZ3k6IGJvb2xlYW47XHJcbiAgICAgICAgQ29udGFjdElkOiBzdHJpbmc7XHJcbiAgICAgICAgVXNlckNvdW50cnk6IHN0cmluZztcclxuICAgICAgICBTdWJzaWRpYXJ5OiBzdHJpbmc7XHJcbiAgICAgICAgWG1sU3RyaW5nOiBzdHJpbmc7XHJcbiAgICAgICAgRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdE5hbWU6IHN0cmluZztcclxuICAgICAgICBTZW5kaW5nUHJpb3JpdHk6IHN0cmluZztcclxuICAgICAgICBTZWxmQ2FyZVJvbGU6IHN0cmluZztcclxuICAgICAgICBCaWxsaW5nQWNjb3VudE5hbWU6IHN0cmluZztcclxuICAgICAgICBMb2dvTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgIExvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgT3JkZXJJZDogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyU2VydmljZVBob25lOiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJTZXJ2aWNlRW1haWw6IHN0cmluZztcclxuICAgICAgICBIaWVyYXJjaHk6IElIaWVyYXJjaHlEdG87XHJcbiAgICAgICAgVXNlclJlY2lwaWVudDogSVVzZXJSZWNpcGllbnREdG87XHJcbiAgICAgICAgUHJvZHVjdHM6IElQcm9kdWN0RHRvW107XHJcbiAgICAgICAgT2ZmZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgUmVjaXBpZW50VHlwZTogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiIsIlxuXG5cblxuXG5cbnZhciBibHVlc2t5O1xuKGZ1bmN0aW9uIChibHVlc2t5KSB7XG4gICAgdmFyIGNvcmU7XG4gICAgKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgICAgIHZhciBtb2RlbHM7XG4gICAgICAgIChmdW5jdGlvbiAobW9kZWxzKSB7XG4gICAgICAgICAgICB2YXIgY2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChjbGllbnRDb25maWcpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFbnVtIGdlbmVyYXRlZCBmcm9tIHRoZSBzZXJ2ZXIgdG8ga25vdyB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgZW5kcG9pbnQgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKEVuZHBvaW50VHlwZUVudW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE9yaWdpbiBkb21haW4gZnJvbSB3aGljaCB0aGUgY3VycmVudCBjbGllbnQgd2FzIGxvYWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIkN1cnJlbnREb21haW5cIl0gPSAwXSA9IFwiQ3VycmVudERvbWFpblwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBBUElzXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIkNvcmVBcGlcIl0gPSAxXSA9IFwiQ29yZUFwaVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJNYXJrZXRpbmdBcGlcIl0gPSAyXSA9IFwiTWFya2V0aW5nQXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlNlbGZjYXJlQXBpXCJdID0gM10gPSBcIlNlbGZjYXJlQXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9NIGFwcHNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiUXVvdGVXaXphcmRcIl0gPSA0XSA9IFwiUXVvdGVXaXphcmRcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiT3JkZXJFbnRyeVwiXSA9IDVdID0gXCJPcmRlckVudHJ5XCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk9yZGVyVHJhY2tpbmdcIl0gPSA2XSA9IFwiT3JkZXJUcmFja2luZ1wiO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbCBhcHBzXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk1ldHJhbmV0XCJdID0gN10gPSBcIk1ldHJhbmV0XCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlRlY2huaWNhbEludmVudG9yeVwiXSA9IDhdID0gXCJUZWNobmljYWxJbnZlbnRvcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiVGVtcGxhdGVHZW5lcmF0b3JcIl0gPSA5XSA9IFwiVGVtcGxhdGVHZW5lcmF0b3JcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiU2FsZXNmb3JjZVwiXSA9IDEwXSA9IFwiU2FsZXNmb3JjZVwiO1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogRXh0ZXJuYWwgVVJMcyAobm90IHRyZWF0bWVudCBhcHBsaWVkLCByZWplY3RlZCBpZiBVUkwgaXMgbm90IGZ1bGwpXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJFeHRlcm5hbFwiXSA9IDExXSA9IFwiRXh0ZXJuYWxcIjtcbiAgICAgICAgICAgICAgICB9KShjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bSB8fCAoY2xpZW50Q29uZmlnLkVuZHBvaW50VHlwZUVudW0gPSB7fSkpO1xuICAgICAgICAgICAgICAgIHZhciBFbmRwb2ludFR5cGVFbnVtID0gY2xpZW50Q29uZmlnLkVuZHBvaW50VHlwZUVudW07XG4gICAgICAgICAgICB9KShjbGllbnRDb25maWcgPSBtb2RlbHMuY2xpZW50Q29uZmlnIHx8IChtb2RlbHMuY2xpZW50Q29uZmlnID0ge30pKTtcbiAgICAgICAgfSkobW9kZWxzID0gY29yZS5tb2RlbHMgfHwgKGNvcmUubW9kZWxzID0ge30pKTtcbiAgICB9KShjb3JlID0gYmx1ZXNreS5jb3JlIHx8IChibHVlc2t5LmNvcmUgPSB7fSkpO1xufSkoYmx1ZXNreSB8fCAoYmx1ZXNreSA9IHt9KSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgYmx1ZXNreTtcbihmdW5jdGlvbiAoYmx1ZXNreSkge1xuICAgIHZhciBjb3JlO1xuICAgIChmdW5jdGlvbiAoY29yZSkge1xuICAgICAgICB2YXIgbW9kZWxzO1xuICAgICAgICAoZnVuY3Rpb24gKG1vZGVscykge1xuICAgICAgICAgICAgdmFyIHdlbGNvbWVQYWNrcztcbiAgICAgICAgICAgIChmdW5jdGlvbiAod2VsY29tZVBhY2tzKSB7XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChXZWxjb21lUGFja1N0YXRlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIlN1Ym1pdHRlZFwiXSA9IDBdID0gXCJTdWJtaXR0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJCb3VuY2VkXCJdID0gMV0gPSBcIkJvdW5jZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJTdWNjZXNzXCJdID0gMl0gPSBcIlN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJFcnJvclwiXSA9IDNdID0gXCJFcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkVtcHR5XCJdID0gNF0gPSBcIkVtcHR5XCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiQXdhaXRpbmdBZG1pblwiXSA9IDVdID0gXCJBd2FpdGluZ0FkbWluXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiVW5zdWJzY3JpYmVkXCJdID0gNl0gPSBcIlVuc3Vic2NyaWJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkdsb2JhbFVuc3Vic2NyaWJlZFwiXSA9IDddID0gXCJHbG9iYWxVbnN1YnNjcmliZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJFeGNsdWRlZFwiXSA9IDhdID0gXCJFeGNsdWRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIlVua25vd25cIl0gPSA5XSA9IFwiVW5rbm93blwiO1xuICAgICAgICAgICAgICAgIH0pKHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1N0YXRlRW51bSB8fCAod2VsY29tZVBhY2tzLldlbGNvbWVQYWNrU3RhdGVFbnVtID0ge30pKTtcbiAgICAgICAgICAgICAgICB2YXIgV2VsY29tZVBhY2tTdGF0ZUVudW0gPSB3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tTdGF0ZUVudW07XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChXZWxjb21lUGFja1F1ZXVlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlN1Ym1pdHRlZFwiXSA9IDBdID0gXCJTdWJtaXR0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJSZWplY3RlZFwiXSA9IDFdID0gXCJSZWplY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlBlbmRpbmdcIl0gPSAyXSA9IFwiUGVuZGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlJlYWRcIl0gPSAzXSA9IFwiUmVhZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIldhaXRpbmdcIl0gPSA0XSA9IFwiV2FpdGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIkltcG9ydGVkXCJdID0gNV0gPSBcIkltcG9ydGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiQ29tcGxldGVcIl0gPSA2XSA9IFwiQ29tcGxldGVcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJFbXB0eVwiXSA9IDddID0gXCJFbXB0eVwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlVua25vd25cIl0gPSA4XSA9IFwiVW5rbm93blwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIkV4Y2x1ZGVkXCJdID0gOV0gPSBcIkV4Y2x1ZGVkXCI7XG4gICAgICAgICAgICAgICAgfSkod2VsY29tZVBhY2tzLldlbGNvbWVQYWNrUXVldWVFbnVtIHx8ICh3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tRdWV1ZUVudW0gPSB7fSkpO1xuICAgICAgICAgICAgICAgIHZhciBXZWxjb21lUGFja1F1ZXVlRW51bSA9IHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1F1ZXVlRW51bTtcbiAgICAgICAgICAgIH0pKHdlbGNvbWVQYWNrcyA9IG1vZGVscy53ZWxjb21lUGFja3MgfHwgKG1vZGVscy53ZWxjb21lUGFja3MgPSB7fSkpO1xuICAgICAgICB9KShtb2RlbHMgPSBjb3JlLm1vZGVscyB8fCAoY29yZS5tb2RlbHMgPSB7fSkpO1xuICAgIH0pKGNvcmUgPSBibHVlc2t5LmNvcmUgfHwgKGJsdWVza3kuY29yZSA9IHt9KSk7XG59KShibHVlc2t5IHx8IChibHVlc2t5ID0ge30pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
