















































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





























































































































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9maWxlLXVwbG9hZC1iYXNlLmR0by50cyIsImNvbmZpZy9lbmRwb2ludC10eXBlLmVudW0udHMiLCJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRCxJQUFVO0FBQVYsQ0FBQSxVQUFVLFNBQU87SUFBQyxJQUFBO0lBQUEsQ0FBQSxVQUFBLE1BQUk7UUFBQyxJQUFBO1FBQUEsQ0FBQSxVQUFBLFFBQU07WUFBQyxJQUFBO1lBQUEsQ0FBQSxVQUFBLGNBQWE7Ozs7Z0JBSXZDLENBQUEsVUFBWSxrQkFBZ0I7Ozs7b0JBSXhCLGlCQUFBLGlCQUFBLG1CQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGFBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxrQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGlCQUFBLEtBQUE7O29CQUVBLGlCQUFBLGlCQUFBLGlCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsZ0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxtQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxjQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsd0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSx1QkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGdCQUFBLE1BQUE7Ozs7b0JBSUEsaUJBQUEsaUJBQUEsY0FBQSxNQUFBO21CQXJCUSxhQUFBLHFCQUFBLGFBQUEsbUJBQWdCO2dCQUE1QixJQUFZLG1CQUFBLGFBQUE7ZUFKYyxlQUFBLE9BQUEsaUJBQUEsT0FBQSxlQUFZO1dBQW5CLFNBQUEsS0FBQSxXQUFBLEtBQUEsU0FBTTtPQUFYLE9BQUEsUUFBQSxTQUFBLFFBQUEsT0FBSTtHQUFaLFlBQUEsVUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNtTmpCIiwiZmlsZSI6ImJsdWVza3ktY29yZS1tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscyB7XHJcblx0LyoqIEJhc2UgaW5mb3JtYXRpb24gZm9yIGEgZmlsZSB1cGxvYWQuICovXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJRmlsZVVwbG9hZEJhc2VEdG8ge1xyXG5cdFx0LyoqIEZpbGUgZW5jb2RlZCBpbiBiYXNlIDY0LiAqL1xyXG5cdFx0RmlsZUJhc2U2NFVybDogc3RyaW5nO1xyXG5cdFx0LyoqIE5hbWUgb2YgdGhlIGZpbGUuICovXHJcblx0XHRGaWxlTmFtZTogc3RyaW5nO1xyXG5cdFx0LyoqIENvbnRlbnQgVHlwZS4gKi9cclxuXHRcdENvbnRlbnRUeXBlOiBzdHJpbmc7XHJcblx0fVxyXG59XHJcbiIsIm5hbWVzcGFjZSBibHVlc2t5LmNvcmUubW9kZWxzLmNsaWVudENvbmZpZyB7XHJcbiAgICAvKipcclxuICAgICAqIEVudW0gZ2VuZXJhdGVkIGZyb20gdGhlIHNlcnZlciB0byBrbm93IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBlbmRwb2ludCBjb25maWd1cmF0aW9uLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZW51bSBFbmRwb2ludFR5cGVFbnVtIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcmlnaW4gZG9tYWluIGZyb20gd2hpY2ggdGhlIGN1cnJlbnQgY2xpZW50IHdhcyBsb2FkZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQ3VycmVudERvbWFpbixcclxuICAgICAgICAvLyBBUElzXHJcbiAgICAgICAgQ29yZUFwaSxcclxuICAgICAgICBNYXJrZXRpbmdBcGksXHJcbiAgICAgICAgU2VsZmNhcmVBcGksXHJcbiAgICAgICAgLy8gT00gYXBwc1xyXG4gICAgICAgIFF1b3RlV2l6YXJkLFxyXG4gICAgICAgIE9yZGVyRW50cnksXHJcbiAgICAgICAgT3JkZXJUcmFja2luZyxcclxuICAgICAgICAvLyBJbnRlcm5hbCBhcHBzXHJcbiAgICAgICAgTWV0cmFuZXQsXHJcbiAgICAgICAgVGVjaG5pY2FsSW52ZW50b3J5LFxyXG4gICAgICAgIFRlbXBsYXRlR2VuZXJhdG9yLFxyXG4gICAgICAgIFNhbGVzZm9yY2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXh0ZXJuYWwgVVJMcyAobm90IHRyZWF0bWVudCBhcHBsaWVkLCByZWplY3RlZCBpZiBVUkwgaXMgbm90IGZ1bGwpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRXh0ZXJuYWxcclxuICAgIH1cclxufSIsIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBibHVlc2t5O1xuKGZ1bmN0aW9uIChibHVlc2t5KSB7XG4gICAgdmFyIGNvcmU7XG4gICAgKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgICAgIHZhciBtb2RlbHM7XG4gICAgICAgIChmdW5jdGlvbiAobW9kZWxzKSB7XG4gICAgICAgICAgICB2YXIgY2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChjbGllbnRDb25maWcpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFbnVtIGdlbmVyYXRlZCBmcm9tIHRoZSBzZXJ2ZXIgdG8ga25vdyB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgZW5kcG9pbnQgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKEVuZHBvaW50VHlwZUVudW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE9yaWdpbiBkb21haW4gZnJvbSB3aGljaCB0aGUgY3VycmVudCBjbGllbnQgd2FzIGxvYWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIkN1cnJlbnREb21haW5cIl0gPSAwXSA9IFwiQ3VycmVudERvbWFpblwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBBUElzXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIkNvcmVBcGlcIl0gPSAxXSA9IFwiQ29yZUFwaVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJNYXJrZXRpbmdBcGlcIl0gPSAyXSA9IFwiTWFya2V0aW5nQXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlNlbGZjYXJlQXBpXCJdID0gM10gPSBcIlNlbGZjYXJlQXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9NIGFwcHNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiUXVvdGVXaXphcmRcIl0gPSA0XSA9IFwiUXVvdGVXaXphcmRcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiT3JkZXJFbnRyeVwiXSA9IDVdID0gXCJPcmRlckVudHJ5XCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk9yZGVyVHJhY2tpbmdcIl0gPSA2XSA9IFwiT3JkZXJUcmFja2luZ1wiO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbCBhcHBzXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk1ldHJhbmV0XCJdID0gN10gPSBcIk1ldHJhbmV0XCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIlRlY2huaWNhbEludmVudG9yeVwiXSA9IDhdID0gXCJUZWNobmljYWxJbnZlbnRvcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiVGVtcGxhdGVHZW5lcmF0b3JcIl0gPSA5XSA9IFwiVGVtcGxhdGVHZW5lcmF0b3JcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiU2FsZXNmb3JjZVwiXSA9IDEwXSA9IFwiU2FsZXNmb3JjZVwiO1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogRXh0ZXJuYWwgVVJMcyAobm90IHRyZWF0bWVudCBhcHBsaWVkLCByZWplY3RlZCBpZiBVUkwgaXMgbm90IGZ1bGwpXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJFeHRlcm5hbFwiXSA9IDExXSA9IFwiRXh0ZXJuYWxcIjtcbiAgICAgICAgICAgICAgICB9KShjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bSB8fCAoY2xpZW50Q29uZmlnLkVuZHBvaW50VHlwZUVudW0gPSB7fSkpO1xuICAgICAgICAgICAgICAgIHZhciBFbmRwb2ludFR5cGVFbnVtID0gY2xpZW50Q29uZmlnLkVuZHBvaW50VHlwZUVudW07XG4gICAgICAgICAgICB9KShjbGllbnRDb25maWcgPSBtb2RlbHMuY2xpZW50Q29uZmlnIHx8IChtb2RlbHMuY2xpZW50Q29uZmlnID0ge30pKTtcbiAgICAgICAgfSkobW9kZWxzID0gY29yZS5tb2RlbHMgfHwgKGNvcmUubW9kZWxzID0ge30pKTtcbiAgICB9KShjb3JlID0gYmx1ZXNreS5jb3JlIHx8IChibHVlc2t5LmNvcmUgPSB7fSkpO1xufSkoYmx1ZXNreSB8fCAoYmx1ZXNreSA9IHt9KSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
