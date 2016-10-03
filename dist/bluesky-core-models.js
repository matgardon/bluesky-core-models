























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





























































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9maWxlLXVwbG9hZC1iYXNlLmR0by50cyIsImNvbmZpZy9lbmRwb2ludC10eXBlLmVudW0udHMiLCJ3ZWxjb21lLXBhY2tzL3dlbGNvbWUtcGFjay5kdG8udHMiLCJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRCxJQUFVO0FBQVYsQ0FBQSxVQUFVLFNBQU87SUFBQyxJQUFBO0lBQUEsQ0FBQSxVQUFBLE1BQUk7UUFBQyxJQUFBO1FBQUEsQ0FBQSxVQUFBLFFBQU07WUFBQyxJQUFBO1lBQUEsQ0FBQSxVQUFBLGNBQWE7Ozs7Z0JBSXZDLENBQUEsVUFBWSxrQkFBZ0I7Ozs7b0JBSXhCLGlCQUFBLGlCQUFBLG1CQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGFBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxrQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGlCQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGlCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsZ0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxtQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxjQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsd0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSx1QkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGdCQUFBLE1BQUE7Ozs7b0JBSUEsaUJBQUEsaUJBQUEsY0FBQSxNQUFBO21CQXJCUSxhQUFBLHFCQUFBLGFBQUEsbUJBQWdCO2dCQUE1QixJQUFZLG1CQUFBLGFBQUE7ZUFKYyxlQUFBLE9BQUEsaUJBQUEsT0FBQSxlQUFZO1dBQW5CLFNBQUEsS0FBQSxXQUFBLEtBQUEsU0FBTTtPQUFYLE9BQUEsUUFBQSxTQUFBLFFBQUEsT0FBSTtHQUFaLFlBQUEsVUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQixJQUFVO0FBQVYsQ0FBQSxVQUFVLFNBQU87SUFBQyxJQUFBO0lBQUEsQ0FBQSxVQUFBLE1BQUk7UUFBQyxJQUFBO1FBQUEsQ0FBQSxVQUFBLFFBQU07WUFBQyxJQUFBO1lBQUEsQ0FBQSxVQUFBLGNBQWE7Z0JBQ3ZDLENBQUEsVUFBWSxzQkFBb0I7b0JBQzVCLHFCQUFBLHFCQUFBLGVBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsYUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLFdBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxXQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsbUJBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxrQkFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLHdCQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTttQkFWUSxhQUFBLHlCQUFBLGFBQUEsdUJBQW9CO2dCQUFoQyxJQUFZLHVCQUFBLGFBQUE7Z0JBYVosQ0FBQSxVQUFZLHNCQUFvQjtvQkFDNUIscUJBQUEscUJBQUEsZUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGNBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsVUFBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLGFBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxjQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO29CQUNBLHFCQUFBLHFCQUFBLFdBQUEsS0FBQTtvQkFDQSxxQkFBQSxxQkFBQSxhQUFBLEtBQUE7b0JBQ0EscUJBQUEscUJBQUEsY0FBQSxLQUFBO21CQVZRLGFBQUEseUJBQUEsYUFBQSx1QkFBb0I7Z0JBQWhDLElBQVksdUJBQUEsYUFBQTtlQWRjLGVBQUEsT0FBQSxpQkFBQSxPQUFBLGVBQVk7V0FBbkIsU0FBQSxLQUFBLFdBQUEsS0FBQSxTQUFNO09BQVgsT0FBQSxRQUFBLFNBQUEsUUFBQSxPQUFJO0dBQVosWUFBQSxVQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa1NqQiIsImZpbGUiOiJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGJsdWVza3kuY29yZS5tb2RlbHMge1xyXG5cdC8qKiBCYXNlIGluZm9ybWF0aW9uIGZvciBhIGZpbGUgdXBsb2FkLiAqL1xyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSUZpbGVVcGxvYWRCYXNlRHRvIHtcclxuXHRcdC8qKiBGaWxlIGVuY29kZWQgaW4gYmFzZSA2NC4gKi9cclxuXHRcdEZpbGVCYXNlNjRVcmw6IHN0cmluZztcclxuXHRcdC8qKiBOYW1lIG9mIHRoZSBmaWxlLiAqL1xyXG5cdFx0RmlsZU5hbWU6IHN0cmluZztcclxuXHRcdC8qKiBDb250ZW50IFR5cGUuICovXHJcblx0XHRDb250ZW50VHlwZTogc3RyaW5nO1xyXG5cdH1cclxufVxyXG4iLCJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscy5jbGllbnRDb25maWcge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnVtIGdlbmVyYXRlZCBmcm9tIHRoZSBzZXJ2ZXIgdG8ga25vdyB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgZW5kcG9pbnQgY29uZmlndXJhdGlvbi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGVudW0gRW5kcG9pbnRUeXBlRW51bSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT3JpZ2luIGRvbWFpbiBmcm9tIHdoaWNoIHRoZSBjdXJyZW50IGNsaWVudCB3YXMgbG9hZGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEN1cnJlbnREb21haW4sXHJcbiAgICAgICAgLy8gQVBJc1xyXG4gICAgICAgIENvcmVBcGksXHJcbiAgICAgICAgTWFya2V0aW5nQXBpLFxyXG4gICAgICAgIFNlbGZjYXJlQXBpLFxyXG4gICAgICAgIC8vIE9NIGFwcHNcclxuICAgICAgICBRdW90ZVdpemFyZCxcclxuICAgICAgICBPcmRlckVudHJ5LFxyXG4gICAgICAgIE9yZGVyVHJhY2tpbmcsXHJcbiAgICAgICAgLy8gSW50ZXJuYWwgYXBwc1xyXG4gICAgICAgIE1ldHJhbmV0LFxyXG4gICAgICAgIFRlY2huaWNhbEludmVudG9yeSxcclxuICAgICAgICBUZW1wbGF0ZUdlbmVyYXRvcixcclxuICAgICAgICBTYWxlc2ZvcmNlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEV4dGVybmFsIFVSTHMgKG5vdCB0cmVhdG1lbnQgYXBwbGllZCwgcmVqZWN0ZWQgaWYgVVJMIGlzIG5vdCBmdWxsKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEV4dGVybmFsXHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscy53ZWxjb21lUGFja3Mge1xyXG4gICAgZXhwb3J0IGVudW0gV2VsY29tZVBhY2tTdGF0ZUVudW0ge1xyXG4gICAgICAgIFN1Ym1pdHRlZCxcclxuICAgICAgICBCb3VuY2VkLFxyXG4gICAgICAgIFN1Y2Nlc3MsXHJcbiAgICAgICAgRXJyb3IsXHJcbiAgICAgICAgRW1wdHksXHJcbiAgICAgICAgQXdhaXRpbmdBZG1pbixcclxuICAgICAgICBVbnN1YnNjcmliZWQsXHJcbiAgICAgICAgR2xvYmFsVW5zdWJzY3JpYmVkLFxyXG4gICAgICAgIEV4Y2x1ZGVkLFxyXG4gICAgICAgIFVua25vd24sXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGVudW0gV2VsY29tZVBhY2tRdWV1ZUVudW0ge1xyXG4gICAgICAgIFN1Ym1pdHRlZCxcclxuICAgICAgICBSZWplY3RlZCxcclxuICAgICAgICBQZW5kaW5nLFxyXG4gICAgICAgIFJlYWQsXHJcbiAgICAgICAgV2FpdGluZyxcclxuICAgICAgICBJbXBvcnRlZCxcclxuICAgICAgICBDb21wbGV0ZSxcclxuICAgICAgICBFbXB0eSxcclxuICAgICAgICBVbmtub3duLFxyXG4gICAgICAgIEV4Y2x1ZGVkLFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVdlbGNvbWVQYWNrRHRvIHtcclxuICAgICAgICBJZDogc3RyaW5nO1xyXG4gICAgICAgIFRlbXBsYXRlSWQ6IHN0cmluZztcclxuICAgICAgICBPcmRlck1hbmFnZW1lbnRJZDogc3RyaW5nO1xyXG4gICAgICAgIFRlbXBsYXRlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIEVtYWlsQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgIFN0YXRlOiBzdHJpbmc7XHJcbiAgICAgICAgUXVldWU6IHN0cmluZztcclxuICAgICAgICBNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgUmVjZWl2ZWREYXRlOiBEYXRlO1xyXG4gICAgICAgIFNlbmRpbmdEYXRlOiBEYXRlO1xyXG4gICAgICAgIEFkbWluRW1haWxBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgSXNBZG1pblJlY2lwaWVudDogYm9vbGVhbjtcclxuICAgICAgICAvL0lzQWRtaW5TdHJhdGVneTogYm9vbGVhbjtcclxuICAgICAgICBDb250YWN0SWQ6IHN0cmluZztcclxuICAgICAgICBVc2VyQ291bnRyeTogc3RyaW5nO1xyXG4gICAgICAgIFN1YnNpZGlhcnk6IHN0cmluZztcclxuICAgICAgICBYbWxTdHJpbmc6IHN0cmluZztcclxuICAgICAgICBGaXJzdE5hbWU6IHN0cmluZztcclxuICAgICAgICBMYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgIFNlbmRpbmdQcmlvcml0eTogc3RyaW5nO1xyXG4gICAgICAgIFNlbGZDYXJlUm9sZTogc3RyaW5nO1xyXG4gICAgICAgIEJpbGxpbmdBY2NvdW50TmFtZTogc3RyaW5nO1xyXG4gICAgICAgIExvZ29OYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgTG9naW46IHN0cmluZztcclxuICAgICAgICBPcmRlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJTZXJ2aWNlUGhvbmU6IHN0cmluZztcclxuICAgICAgICBDdXN0b21lclNlcnZpY2VFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIEhpZXJhcmNoeTogSUhpZXJhcmNoeUR0bztcclxuICAgICAgICBVc2VyUmVjaXBpZW50OiBJVXNlclJlY2lwaWVudER0bztcclxuICAgICAgICBQcm9kdWN0czogSVByb2R1Y3REdG9bXTtcclxuICAgICAgICBPZmZlck5hbWU6IHN0cmluZztcclxuICAgICAgICBSZWNpcGllbnRUeXBlOiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIGJsdWVza3k7XG4oZnVuY3Rpb24gKGJsdWVza3kpIHtcbiAgICB2YXIgY29yZTtcbiAgICAoZnVuY3Rpb24gKGNvcmUpIHtcbiAgICAgICAgdmFyIG1vZGVscztcbiAgICAgICAgKGZ1bmN0aW9uIChtb2RlbHMpIHtcbiAgICAgICAgICAgIHZhciBjbGllbnRDb25maWc7XG4gICAgICAgICAgICAoZnVuY3Rpb24gKGNsaWVudENvbmZpZykge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVudW0gZ2VuZXJhdGVkIGZyb20gdGhlIHNlcnZlciB0byBrbm93IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBlbmRwb2ludCBjb25maWd1cmF0aW9uLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoRW5kcG9pbnRUeXBlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogT3JpZ2luIGRvbWFpbiBmcm9tIHdoaWNoIHRoZSBjdXJyZW50IGNsaWVudCB3YXMgbG9hZGVkLlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiQ3VycmVudERvbWFpblwiXSA9IDBdID0gXCJDdXJyZW50RG9tYWluXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFQSXNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiQ29yZUFwaVwiXSA9IDFdID0gXCJDb3JlQXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk1hcmtldGluZ0FwaVwiXSA9IDJdID0gXCJNYXJrZXRpbmdBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiU2VsZmNhcmVBcGlcIl0gPSAzXSA9IFwiU2VsZmNhcmVBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gT00gYXBwc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJRdW90ZVdpemFyZFwiXSA9IDRdID0gXCJRdW90ZVdpemFyZFwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJPcmRlckVudHJ5XCJdID0gNV0gPSBcIk9yZGVyRW50cnlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiT3JkZXJUcmFja2luZ1wiXSA9IDZdID0gXCJPcmRlclRyYWNraW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsIGFwcHNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiTWV0cmFuZXRcIl0gPSA3XSA9IFwiTWV0cmFuZXRcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiVGVjaG5pY2FsSW52ZW50b3J5XCJdID0gOF0gPSBcIlRlY2huaWNhbEludmVudG9yeVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJUZW1wbGF0ZUdlbmVyYXRvclwiXSA9IDldID0gXCJUZW1wbGF0ZUdlbmVyYXRvclwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJTYWxlc2ZvcmNlXCJdID0gMTBdID0gXCJTYWxlc2ZvcmNlXCI7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBFeHRlcm5hbCBVUkxzIChub3QgdHJlYXRtZW50IGFwcGxpZWQsIHJlamVjdGVkIGlmIFVSTCBpcyBub3QgZnVsbClcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIkV4dGVybmFsXCJdID0gMTFdID0gXCJFeHRlcm5hbFwiO1xuICAgICAgICAgICAgICAgIH0pKGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtIHx8IChjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bSA9IHt9KSk7XG4gICAgICAgICAgICAgICAgdmFyIEVuZHBvaW50VHlwZUVudW0gPSBjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bTtcbiAgICAgICAgICAgIH0pKGNsaWVudENvbmZpZyA9IG1vZGVscy5jbGllbnRDb25maWcgfHwgKG1vZGVscy5jbGllbnRDb25maWcgPSB7fSkpO1xuICAgICAgICB9KShtb2RlbHMgPSBjb3JlLm1vZGVscyB8fCAoY29yZS5tb2RlbHMgPSB7fSkpO1xuICAgIH0pKGNvcmUgPSBibHVlc2t5LmNvcmUgfHwgKGJsdWVza3kuY29yZSA9IHt9KSk7XG59KShibHVlc2t5IHx8IChibHVlc2t5ID0ge30pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBibHVlc2t5O1xuKGZ1bmN0aW9uIChibHVlc2t5KSB7XG4gICAgdmFyIGNvcmU7XG4gICAgKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgICAgIHZhciBtb2RlbHM7XG4gICAgICAgIChmdW5jdGlvbiAobW9kZWxzKSB7XG4gICAgICAgICAgICB2YXIgd2VsY29tZVBhY2tzO1xuICAgICAgICAgICAgKGZ1bmN0aW9uICh3ZWxjb21lUGFja3MpIHtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKFdlbGNvbWVQYWNrU3RhdGVFbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiU3VibWl0dGVkXCJdID0gMF0gPSBcIlN1Ym1pdHRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkJvdW5jZWRcIl0gPSAxXSA9IFwiQm91bmNlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIlN1Y2Nlc3NcIl0gPSAyXSA9IFwiU3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkVycm9yXCJdID0gM10gPSBcIkVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiRW1wdHlcIl0gPSA0XSA9IFwiRW1wdHlcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJBd2FpdGluZ0FkbWluXCJdID0gNV0gPSBcIkF3YWl0aW5nQWRtaW5cIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tTdGF0ZUVudW1bV2VsY29tZVBhY2tTdGF0ZUVudW1bXCJVbnN1YnNjcmliZWRcIl0gPSA2XSA9IFwiVW5zdWJzY3JpYmVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiR2xvYmFsVW5zdWJzY3JpYmVkXCJdID0gN10gPSBcIkdsb2JhbFVuc3Vic2NyaWJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1N0YXRlRW51bVtXZWxjb21lUGFja1N0YXRlRW51bVtcIkV4Y2x1ZGVkXCJdID0gOF0gPSBcIkV4Y2x1ZGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrU3RhdGVFbnVtW1dlbGNvbWVQYWNrU3RhdGVFbnVtW1wiVW5rbm93blwiXSA9IDldID0gXCJVbmtub3duXCI7XG4gICAgICAgICAgICAgICAgfSkod2VsY29tZVBhY2tzLldlbGNvbWVQYWNrU3RhdGVFbnVtIHx8ICh3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tTdGF0ZUVudW0gPSB7fSkpO1xuICAgICAgICAgICAgICAgIHZhciBXZWxjb21lUGFja1N0YXRlRW51bSA9IHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1N0YXRlRW51bTtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKFdlbGNvbWVQYWNrUXVldWVFbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiU3VibWl0dGVkXCJdID0gMF0gPSBcIlN1Ym1pdHRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIlJlamVjdGVkXCJdID0gMV0gPSBcIlJlamVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiUGVuZGluZ1wiXSA9IDJdID0gXCJQZW5kaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiUmVhZFwiXSA9IDNdID0gXCJSZWFkXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiV2FpdGluZ1wiXSA9IDRdID0gXCJXYWl0aW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiSW1wb3J0ZWRcIl0gPSA1XSA9IFwiSW1wb3J0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZVBhY2tRdWV1ZUVudW1bV2VsY29tZVBhY2tRdWV1ZUVudW1bXCJDb21wbGV0ZVwiXSA9IDZdID0gXCJDb21wbGV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBXZWxjb21lUGFja1F1ZXVlRW51bVtXZWxjb21lUGFja1F1ZXVlRW51bVtcIkVtcHR5XCJdID0gN10gPSBcIkVtcHR5XCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiVW5rbm93blwiXSA9IDhdID0gXCJVbmtub3duXCI7XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWVQYWNrUXVldWVFbnVtW1dlbGNvbWVQYWNrUXVldWVFbnVtW1wiRXhjbHVkZWRcIl0gPSA5XSA9IFwiRXhjbHVkZWRcIjtcbiAgICAgICAgICAgICAgICB9KSh3ZWxjb21lUGFja3MuV2VsY29tZVBhY2tRdWV1ZUVudW0gfHwgKHdlbGNvbWVQYWNrcy5XZWxjb21lUGFja1F1ZXVlRW51bSA9IHt9KSk7XG4gICAgICAgICAgICAgICAgdmFyIFdlbGNvbWVQYWNrUXVldWVFbnVtID0gd2VsY29tZVBhY2tzLldlbGNvbWVQYWNrUXVldWVFbnVtO1xuICAgICAgICAgICAgfSkod2VsY29tZVBhY2tzID0gbW9kZWxzLndlbGNvbWVQYWNrcyB8fCAobW9kZWxzLndlbGNvbWVQYWNrcyA9IHt9KSk7XG4gICAgICAgIH0pKG1vZGVscyA9IGNvcmUubW9kZWxzIHx8IChjb3JlLm1vZGVscyA9IHt9KSk7XG4gICAgfSkoY29yZSA9IGJsdWVza3kuY29yZSB8fCAoYmx1ZXNreS5jb3JlID0ge30pKTtcbn0pKGJsdWVza3kgfHwgKGJsdWVza3kgPSB7fSkpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
