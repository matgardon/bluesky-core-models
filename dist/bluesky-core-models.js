



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









































































































































































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9hamF4LWNsaWVudC1lbmRwb2ludC1jb25maWd1cmF0aW9uLmR0by50cyIsImNvbmZpZy9lbmRwb2ludC10eXBlLmVudW0udHMiLCJibHVlc2t5LWNvcmUtbW9kZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9DOzs7O0FDUEQsSUFBVTtBQUFWLENBQUEsVUFBVSxTQUFPO0lBQUMsSUFBQTtJQUFBLENBQUEsVUFBQSxNQUFJO1FBQUMsSUFBQTtRQUFBLENBQUEsVUFBQSxRQUFNO1lBQUMsSUFBQTtZQUFBLENBQUEsVUFBQSxjQUFhOzs7O2dCQUl2QyxDQUFBLFVBQVksa0JBQWdCOzs7O29CQUl4QixpQkFBQSxpQkFBQSxtQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxhQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsa0JBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxpQkFBQSxLQUFBOztvQkFFQSxpQkFBQSxpQkFBQSxpQkFBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLGdCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsbUJBQUEsS0FBQTs7b0JBRUEsaUJBQUEsaUJBQUEsY0FBQSxLQUFBO29CQUNBLGlCQUFBLGlCQUFBLHdCQUFBLEtBQUE7b0JBQ0EsaUJBQUEsaUJBQUEsdUJBQUEsS0FBQTtvQkFDQSxpQkFBQSxpQkFBQSxnQkFBQSxNQUFBOzs7O29CQUlBLGlCQUFBLGlCQUFBLGNBQUEsTUFBQTttQkFyQlEsYUFBQSxxQkFBQSxhQUFBLG1CQUFnQjtnQkFBNUIsSUFBWSxtQkFBQSxhQUFBO2VBSmMsZUFBQSxPQUFBLGlCQUFBLE9BQUEsZUFBWTtXQUFuQixTQUFBLEtBQUEsV0FBQSxLQUFBLFNBQU07T0FBWCxPQUFBLFFBQUEsU0FBQSxRQUFBLE9BQUk7R0FBWixZQUFBLFVBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNtTmpCIiwiZmlsZSI6ImJsdWVza3ktY29yZS1tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYmx1ZXNreS5jb3JlLm1vZGVscy5jbGllbnRDb25maWcge1xyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSUFqYXhDbGllbnRFbmRwb2ludENvbmZpZ3VyYXRpb25EdG8ge1xyXG5cdFx0RW5kcG9pbnRCYXNlVVJMOiBzdHJpbmc7XHJcblx0XHRFbmRwb2ludFN1ZmZpeDogc3RyaW5nO1xyXG5cdFx0QXV0aFRva2VuOiBzdHJpbmc7XHJcblx0XHRBdXRoVG9rZW5WYWxpZGl0eUVuZERhdGU6IERhdGU7XHJcblx0fVxyXG59XHJcbiIsIm5hbWVzcGFjZSBibHVlc2t5LmNvcmUubW9kZWxzLmNsaWVudENvbmZpZyB7XHJcbiAgICAvKipcclxuICAgICAqIEVudW0gZ2VuZXJhdGVkIGZyb20gdGhlIHNlcnZlciB0byBrbm93IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBlbmRwb2ludCBjb25maWd1cmF0aW9uLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZW51bSBFbmRwb2ludFR5cGVFbnVtIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcmlnaW4gZG9tYWluIGZyb20gd2hpY2ggdGhlIGN1cnJlbnQgY2xpZW50IHdhcyBsb2FkZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQ3VycmVudERvbWFpbixcclxuICAgICAgICAvLyBBUElzXHJcbiAgICAgICAgQ29yZUFwaSxcclxuICAgICAgICBNYXJrZXRpbmdBcGksXHJcbiAgICAgICAgU2VsZmNhcmVBcGksXHJcbiAgICAgICAgLy8gT00gYXBwc1xyXG4gICAgICAgIFF1b3RlV2l6YXJkLFxyXG4gICAgICAgIE9yZGVyRW50cnksXHJcbiAgICAgICAgT3JkZXJUcmFja2luZyxcclxuICAgICAgICAvLyBJbnRlcm5hbCBhcHBzXHJcbiAgICAgICAgTWV0cmFuZXQsXHJcbiAgICAgICAgVGVjaG5pY2FsSW52ZW50b3J5LFxyXG4gICAgICAgIFRlbXBsYXRlR2VuZXJhdG9yLFxyXG4gICAgICAgIFNhbGVzZm9yY2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXh0ZXJuYWwgVVJMcyAobm90IHRyZWF0bWVudCBhcHBsaWVkLCByZWplY3RlZCBpZiBVUkwgaXMgbm90IGZ1bGwpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRXh0ZXJuYWxcclxuICAgIH1cclxufSIsIlxuXG5cblxudmFyIGJsdWVza3k7XG4oZnVuY3Rpb24gKGJsdWVza3kpIHtcbiAgICB2YXIgY29yZTtcbiAgICAoZnVuY3Rpb24gKGNvcmUpIHtcbiAgICAgICAgdmFyIG1vZGVscztcbiAgICAgICAgKGZ1bmN0aW9uIChtb2RlbHMpIHtcbiAgICAgICAgICAgIHZhciBjbGllbnRDb25maWc7XG4gICAgICAgICAgICAoZnVuY3Rpb24gKGNsaWVudENvbmZpZykge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVudW0gZ2VuZXJhdGVkIGZyb20gdGhlIHNlcnZlciB0byBrbm93IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBlbmRwb2ludCBjb25maWd1cmF0aW9uLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoRW5kcG9pbnRUeXBlRW51bSkge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogT3JpZ2luIGRvbWFpbiBmcm9tIHdoaWNoIHRoZSBjdXJyZW50IGNsaWVudCB3YXMgbG9hZGVkLlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiQ3VycmVudERvbWFpblwiXSA9IDBdID0gXCJDdXJyZW50RG9tYWluXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFQSXNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiQ29yZUFwaVwiXSA9IDFdID0gXCJDb3JlQXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIk1hcmtldGluZ0FwaVwiXSA9IDJdID0gXCJNYXJrZXRpbmdBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiU2VsZmNhcmVBcGlcIl0gPSAzXSA9IFwiU2VsZmNhcmVBcGlcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gT00gYXBwc1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJRdW90ZVdpemFyZFwiXSA9IDRdID0gXCJRdW90ZVdpemFyZFwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJPcmRlckVudHJ5XCJdID0gNV0gPSBcIk9yZGVyRW50cnlcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiT3JkZXJUcmFja2luZ1wiXSA9IDZdID0gXCJPcmRlclRyYWNraW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsIGFwcHNcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiTWV0cmFuZXRcIl0gPSA3XSA9IFwiTWV0cmFuZXRcIjtcbiAgICAgICAgICAgICAgICAgICAgRW5kcG9pbnRUeXBlRW51bVtFbmRwb2ludFR5cGVFbnVtW1wiVGVjaG5pY2FsSW52ZW50b3J5XCJdID0gOF0gPSBcIlRlY2huaWNhbEludmVudG9yeVwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJUZW1wbGF0ZUdlbmVyYXRvclwiXSA9IDldID0gXCJUZW1wbGF0ZUdlbmVyYXRvclwiO1xuICAgICAgICAgICAgICAgICAgICBFbmRwb2ludFR5cGVFbnVtW0VuZHBvaW50VHlwZUVudW1bXCJTYWxlc2ZvcmNlXCJdID0gMTBdID0gXCJTYWxlc2ZvcmNlXCI7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBFeHRlcm5hbCBVUkxzIChub3QgdHJlYXRtZW50IGFwcGxpZWQsIHJlamVjdGVkIGlmIFVSTCBpcyBub3QgZnVsbClcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIEVuZHBvaW50VHlwZUVudW1bRW5kcG9pbnRUeXBlRW51bVtcIkV4dGVybmFsXCJdID0gMTFdID0gXCJFeHRlcm5hbFwiO1xuICAgICAgICAgICAgICAgIH0pKGNsaWVudENvbmZpZy5FbmRwb2ludFR5cGVFbnVtIHx8IChjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bSA9IHt9KSk7XG4gICAgICAgICAgICAgICAgdmFyIEVuZHBvaW50VHlwZUVudW0gPSBjbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bTtcbiAgICAgICAgICAgIH0pKGNsaWVudENvbmZpZyA9IG1vZGVscy5jbGllbnRDb25maWcgfHwgKG1vZGVscy5jbGllbnRDb25maWcgPSB7fSkpO1xuICAgICAgICB9KShtb2RlbHMgPSBjb3JlLm1vZGVscyB8fCAoY29yZS5tb2RlbHMgPSB7fSkpO1xuICAgIH0pKGNvcmUgPSBibHVlc2t5LmNvcmUgfHwgKGJsdWVza3kuY29yZSA9IHt9KSk7XG59KShibHVlc2t5IHx8IChibHVlc2t5ID0ge30pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
