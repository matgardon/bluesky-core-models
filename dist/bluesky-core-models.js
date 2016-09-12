





























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





































































































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9maWxlLXVwbG9hZC1iYXNlLmR0by50cyIsImNvbmZpZy9lbmRwb2ludC10eXBlLmVudW0udHMiLCJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRCxJQUFVO0FBQVYsQ0FBQSxVQUFVLFNBQU87SUFBQyxJQUFBO0lBQUEsQ0FBQSxVQUFBLE1BQUk7UUFBQyxJQUFBO1FBQUEsQ0FBQSxVQUFBLFFBQU07WUFBQyxJQUFBO1lBQUEsQ0FBQSxVQUFBLGNBQWE7Ozs7Z0JBSXZDLENBQUEsVUFBWSxrQkFBZ0I7Ozs7b0JBSXhCLGlCQUFBLGlCQUFBLG1CQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGFBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxrQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGlCQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGlCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsZ0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxtQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxjQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsd0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSx1QkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGdCQUFBLE1BQUE7Ozs7b0JBSUEsaUJBQUEsaUJBQUEsY0FBQSxNQUFBO21CQXJCUSxhQUFBLHFCQUFBLGFBQUEsbUJBQWdCO2dCQUE1QixJQUFZLG1CQUFBLGFBQUE7ZUFKYyxlQUFBLE9BQUEsaUJBQUEsT0FBQSxlQUFZO1dBQW5CLFNBQUEsS0FBQSxXQUFBLEtBQUEsU0FBTTtPQUFYLE9BQUEsUUFBQSxTQUFBLFFBQUEsT0FBSTtHQUFaLFlBQUEsVUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN5S2pCIiwiZmlsZSI6ImJsdWVza3ktY29yZS1tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscyB7XHJcblx0LyoqIEJhc2UgaW5mb3JtYXRpb24gZm9yIGEgZmlsZSB1cGxvYWQuICovXHJcblx0ZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkQmFzZUR0byB7XHJcblx0XHQvKiogRmlsZSBlbmNvZGVkIGluIGJhc2UgNjQuICovXHJcblx0XHRmaWxlQmFzZTY0VXJsOiBzdHJpbmc7XHJcblx0XHQvKiogTmFtZSBvZiB0aGUgZmlsZS4gKi9cclxuXHRcdGZpbGVOYW1lOiBzdHJpbmc7XHJcblx0XHQvKiogQ29udGVudCBUeXBlLiAqL1xyXG5cdFx0Y29udGVudFR5cGU6IHN0cmluZztcclxuXHR9XHJcbn1cclxuIiwibmFtZXNwYWNlIGJsdWVza3kuY29yZS5tb2RlbHMuY2xpZW50Q29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogRW51bSBnZW5lcmF0ZWQgZnJvbSB0aGUgc2VydmVyIHRvIGtub3cgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGVuZHBvaW50IGNvbmZpZ3VyYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBlbnVtIEVuZHBvaW50VHlwZUVudW0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9yaWdpbiBkb21haW4gZnJvbSB3aGljaCB0aGUgY3VycmVudCBjbGllbnQgd2FzIGxvYWRlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBDdXJyZW50RG9tYWluLFxyXG4gICAgICAgIC8vIEFQSXNcclxuICAgICAgICBDb3JlQXBpLFxyXG4gICAgICAgIE1hcmtldGluZ0FwaSxcclxuICAgICAgICBTZWxmY2FyZUFwaSxcclxuICAgICAgICAvLyBPTSBhcHBzXHJcbiAgICAgICAgUXVvdGVXaXphcmQsXHJcbiAgICAgICAgT3JkZXJFbnRyeSxcclxuICAgICAgICBPcmRlclRyYWNraW5nLFxyXG4gICAgICAgIC8vIEludGVybmFsIGFwcHNcclxuICAgICAgICBNZXRyYW5ldCxcclxuICAgICAgICBUZWNobmljYWxJbnZlbnRvcnksXHJcbiAgICAgICAgVGVtcGxhdGVHZW5lcmF0b3IsXHJcbiAgICAgICAgU2FsZXNmb3JjZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFeHRlcm5hbCBVUkxzIChub3QgdHJlYXRtZW50IGFwcGxpZWQsIHJlamVjdGVkIGlmIFVSTCBpcyBub3QgZnVsbClcclxuICAgICAgICAgKi9cclxuICAgICAgICBFeHRlcm5hbFxyXG4gICAgfVxyXG59IiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIGJsdWVza3k7XG4oZnVuY3Rpb24gKGJsdWVza3kpIHtcbiAgICB2YXIgY29yZTtcbiAgICAoZnVuY3Rpb24gKGNvcmUpIHtcbiAgICAgICAgdmFyIG1vZGVscztcbiAgICAgICAgKGZ1bmN0aW9uIChtb2RlbHMpIHtcbiAgICAgICAgICAgIHZhciBjbGllbnRDb25maWc7XG4gICAgICAgICAgICAoZnVuY3Rpb24gKGNsaWVudENvbmZpZykge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVudW0gZ2VuZXJhdGVkIGZyb20gdGhlIHNlcnZlciB0byBrbm93IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBlbmRwb2ludCBjb25maWd1cmF0aW9uLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoRW5kcG9pbnRUeXBlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogT3JpZ2luIGRvbWFpbiBmcm9tIHdoaWNoIHRoZSBjdXJyZW50IGNsaWVudCB3YXMgbG9hZGVkLlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiQ3VycmVudERvbWFpblwiXSA9IDBdID0gXCJDdXJyZW50RG9tYWluXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFQSXNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiQ29yZUFwaVwiXSA9IDFdID0gXCJDb3JlQXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk1hcmtldGluZ0FwaVwiXSA9IDJdID0gXCJNYXJrZXRpbmdBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiU2VsZmNhcmVBcGlcIl0gPSAzXSA9IFwiU2VsZmNhcmVBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gT00gYXBwc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJRdW90ZVdpemFyZFwiXSA9IDRdID0gXCJRdW90ZVdpemFyZFwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJPcmRlckVudHJ5XCJdID0gNV0gPSBcIk9yZGVyRW50cnlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiT3JkZXJUcmFja2luZ1wiXSA9IDZdID0gXCJPcmRlclRyYWNraW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsIGFwcHNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiTWV0cmFuZXRcIl0gPSA3XSA9IFwiTWV0cmFuZXRcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiVGVjaG5pY2FsSW52ZW50b3J5XCJdID0gOF0gPSBcIlRlY2huaWNhbEludmVudG9yeVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJUZW1wbGF0ZUdlbmVyYXRvclwiXSA9IDldID0gXCJUZW1wbGF0ZUdlbmVyYXRvclwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJTYWxlc2ZvcmNlXCJdID0gMTBdID0gXCJTYWxlc2ZvcmNlXCI7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBFeHRlcm5hbCBVUkxzIChub3QgdHJlYXRtZW50IGFwcGxpZWQsIHJlamVjdGVkIGlmIFVSTCBpcyBub3QgZnVsbClcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIkV4dGVybmFsXCJdID0gMTFdID0gXCJFeHRlcm5hbFwiO1xuICAgICAgICAgICAgICAgIH0pKGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtIHx8IChjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bSA9IHt9KSk7XG4gICAgICAgICAgICAgICAgdmFyIEVuZHBvaW50VHlwZUVudW0gPSBjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bTtcbiAgICAgICAgICAgIH0pKGNsaWVudENvbmZpZyA9IG1vZGVscy5jbGllbnRDb25maWcgfHwgKG1vZGVscy5jbGllbnRDb25maWcgPSB7fSkpO1xuICAgICAgICB9KShtb2RlbHMgPSBjb3JlLm1vZGVscyB8fCAoY29yZS5tb2RlbHMgPSB7fSkpO1xuICAgIH0pKGNvcmUgPSBibHVlc2t5LmNvcmUgfHwgKGJsdWVza3kuY29yZSA9IHt9KSk7XG59KShibHVlc2t5IHx8IChibHVlc2t5ID0ge30pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
