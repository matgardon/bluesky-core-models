



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































































































































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9hamF4LWNsaWVudC1lbmRwb2ludC1jb25maWd1cmF0aW9uLmR0by50cyIsImNvbmZpZy9lbmRwb2ludC10eXBlLmVudW0udHMiLCJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9DOzs7O0FDUEQsSUFBVTtBQUFWLENBQUEsVUFBVSxTQUFPO0lBQUMsSUFBQTtJQUFBLENBQUEsVUFBQSxNQUFJO1FBQUMsSUFBQTtRQUFBLENBQUEsVUFBQSxRQUFNO1lBQUMsSUFBQTtZQUFBLENBQUEsVUFBQSxjQUFhOzs7O2dCQUl2QyxDQUFBLFVBQVksa0JBQWdCOzs7O29CQUl4QixpQkFBQSxpQkFBQSxtQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxhQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsa0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxpQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxpQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGdCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsbUJBQUEsS0FBQTs7b0JBRUEsaUJBQUEsaUJBQUEsY0FBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLHdCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsdUJBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxnQkFBQSxNQUFBOzs7O29CQUlBLGlCQUFBLGlCQUFBLGNBQUEsTUFBQTttQkFyQlEsYUFBQSxxQkFBQSxhQUFBLG1CQUFnQjtnQkFBNUIsSUFBWSxtQkFBQSxhQUFBO2VBSmMsZUFBQSxPQUFBLGlCQUFBLE9BQUEsZUFBWTtXQUFuQixTQUFBLEtBQUEsV0FBQSxLQUFBLFNBQU07T0FBWCxPQUFBLFFBQUEsU0FBQSxRQUFBLE9BQUk7R0FBWixZQUFBLFVBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN5S2pCIiwiZmlsZSI6ImJsdWVza3ktY29yZS1tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscy5jbGllbnRDb25maWcge1xyXG5cdGV4cG9ydCBpbnRlcmZhY2UgQWpheENsaWVudEVuZHBvaW50Q29uZmlndXJhdGlvbkR0byB7XHJcblx0XHRlbmRwb2ludEJhc2VVUkw6IHN0cmluZztcclxuXHRcdGVuZHBvaW50U3VmZml4OiBzdHJpbmc7XHJcblx0XHRhdXRoVG9rZW46IHN0cmluZztcclxuXHRcdGF1dGhUb2tlblZhbGlkaXR5RW5kRGF0ZTogRGF0ZTtcclxuXHR9XHJcbn1cclxuIiwibmFtZXNwYWNlIGJsdWVza3kuY29yZS5tb2RlbHMuY2xpZW50Q29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogRW51bSBnZW5lcmF0ZWQgZnJvbSB0aGUgc2VydmVyIHRvIGtub3cgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGVuZHBvaW50IGNvbmZpZ3VyYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBlbnVtIEVuZHBvaW50VHlwZUVudW0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9yaWdpbiBkb21haW4gZnJvbSB3aGljaCB0aGUgY3VycmVudCBjbGllbnQgd2FzIGxvYWRlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBDdXJyZW50RG9tYWluLFxyXG4gICAgICAgIC8vIEFQSXNcclxuICAgICAgICBDb3JlQXBpLFxyXG4gICAgICAgIE1hcmtldGluZ0FwaSxcclxuICAgICAgICBTZWxmY2FyZUFwaSxcclxuICAgICAgICAvLyBPTSBhcHBzXHJcbiAgICAgICAgUXVvdGVXaXphcmQsXHJcbiAgICAgICAgT3JkZXJFbnRyeSxcclxuICAgICAgICBPcmRlclRyYWNraW5nLFxyXG4gICAgICAgIC8vIEludGVybmFsIGFwcHNcclxuICAgICAgICBNZXRyYW5ldCxcclxuICAgICAgICBUZWNobmljYWxJbnZlbnRvcnksXHJcbiAgICAgICAgVGVtcGxhdGVHZW5lcmF0b3IsXHJcbiAgICAgICAgU2FsZXNmb3JjZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFeHRlcm5hbCBVUkxzIChub3QgdHJlYXRtZW50IGFwcGxpZWQsIHJlamVjdGVkIGlmIFVSTCBpcyBub3QgZnVsbClcclxuICAgICAgICAgKi9cclxuICAgICAgICBFeHRlcm5hbFxyXG4gICAgfVxyXG59IiwiXG5cblxuXG52YXIgYmx1ZXNreTtcbihmdW5jdGlvbiAoYmx1ZXNreSkge1xuICAgIHZhciBjb3JlO1xuICAgIChmdW5jdGlvbiAoY29yZSkge1xuICAgICAgICB2YXIgbW9kZWxzO1xuICAgICAgICAoZnVuY3Rpb24gKG1vZGVscykge1xuICAgICAgICAgICAgdmFyIGNsaWVudENvbmZpZztcbiAgICAgICAgICAgIChmdW5jdGlvbiAoY2xpZW50Q29uZmlnKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW51bSBnZW5lcmF0ZWQgZnJvbSB0aGUgc2VydmVyIHRvIGtub3cgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGVuZHBvaW50IGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChFbmRwb2ludFR5cGVFbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBPcmlnaW4gZG9tYWluIGZyb20gd2hpY2ggdGhlIGN1cnJlbnQgY2xpZW50IHdhcyBsb2FkZWQuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJDdXJyZW50RG9tYWluXCJdID0gMF0gPSBcIkN1cnJlbnREb21haW5cIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gQVBJc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJDb3JlQXBpXCJdID0gMV0gPSBcIkNvcmVBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiTWFya2V0aW5nQXBpXCJdID0gMl0gPSBcIk1hcmtldGluZ0FwaVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJTZWxmY2FyZUFwaVwiXSA9IDNdID0gXCJTZWxmY2FyZUFwaVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBPTSBhcHBzXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlF1b3RlV2l6YXJkXCJdID0gNF0gPSBcIlF1b3RlV2l6YXJkXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk9yZGVyRW50cnlcIl0gPSA1XSA9IFwiT3JkZXJFbnRyeVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJPcmRlclRyYWNraW5nXCJdID0gNl0gPSBcIk9yZGVyVHJhY2tpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuYWwgYXBwc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJNZXRyYW5ldFwiXSA9IDddID0gXCJNZXRyYW5ldFwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJUZWNobmljYWxJbnZlbnRvcnlcIl0gPSA4XSA9IFwiVGVjaG5pY2FsSW52ZW50b3J5XCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlRlbXBsYXRlR2VuZXJhdG9yXCJdID0gOV0gPSBcIlRlbXBsYXRlR2VuZXJhdG9yXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlNhbGVzZm9yY2VcIl0gPSAxMF0gPSBcIlNhbGVzZm9yY2VcIjtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEV4dGVybmFsIFVSTHMgKG5vdCB0cmVhdG1lbnQgYXBwbGllZCwgcmVqZWN0ZWQgaWYgVVJMIGlzIG5vdCBmdWxsKVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiRXh0ZXJuYWxcIl0gPSAxMV0gPSBcIkV4dGVybmFsXCI7XG4gICAgICAgICAgICAgICAgfSkoY2xpZW50Q29uZmlnLkVuZHBvaW50VHlwZUVudW0gfHwgKGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtID0ge30pKTtcbiAgICAgICAgICAgICAgICB2YXIgRW5kcG9pbnRUeXBlRW51bSA9IGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtO1xuICAgICAgICAgICAgfSkoY2xpZW50Q29uZmlnID0gbW9kZWxzLmNsaWVudENvbmZpZyB8fCAobW9kZWxzLmNsaWVudENvbmZpZyA9IHt9KSk7XG4gICAgICAgIH0pKG1vZGVscyA9IGNvcmUubW9kZWxzIHx8IChjb3JlLm1vZGVscyA9IHt9KSk7XG4gICAgfSkoY29yZSA9IGJsdWVza3kuY29yZSB8fCAoYmx1ZXNreS5jb3JlID0ge30pKTtcbn0pKGJsdWVza3kgfHwgKGJsdWVza3kgPSB7fSkpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
