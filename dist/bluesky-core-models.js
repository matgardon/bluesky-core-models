

























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
            var taxManagement;
            (function (taxManagement) {
                (function (TaxActionEnum) {
                    TaxActionEnum[TaxActionEnum["Add"] = 0] = "Add";
                    TaxActionEnum[TaxActionEnum["Modify"] = 1] = "Modify";
                    TaxActionEnum[TaxActionEnum["Cease"] = 2] = "Cease";
                })(taxManagement.TaxActionEnum || (taxManagement.TaxActionEnum = {}));
                var TaxActionEnum = taxManagement.TaxActionEnum;
            })(taxManagement = models.taxManagement || (models.taxManagement = {}));
        })(models = core.models || (core.models = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));



var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var models;
        (function (models) {
            var taxManagement;
            (function (taxManagement) {
                (function (TaxExemptTypeEnum) {
                    TaxExemptTypeEnum[TaxExemptTypeEnum["Federal"] = 0] = "Federal";
                    TaxExemptTypeEnum[TaxExemptTypeEnum["State"] = 1] = "State";
                })(taxManagement.TaxExemptTypeEnum || (taxManagement.TaxExemptTypeEnum = {}));
                var TaxExemptTypeEnum = taxManagement.TaxExemptTypeEnum;
            })(taxManagement = models.taxManagement || (models.taxManagement = {}));
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
            var welcomePack;
            (function (welcomePack) {
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
                })(welcomePack.WelcomePackStateEnum || (welcomePack.WelcomePackStateEnum = {}));
                var WelcomePackStateEnum = welcomePack.WelcomePackStateEnum;
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
                })(welcomePack.WelcomePackQueueEnum || (welcomePack.WelcomePackQueueEnum = {}));
                var WelcomePackQueueEnum = welcomePack.WelcomePackQueueEnum;
            })(welcomePack = models.welcomePack || (models.welcomePack = {}));
        })(models = core.models || (core.models = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));



















































































var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var models;
        (function (models) {
            var account;
            (function (account) {
                (function (AccountStatusEnum) {
                    AccountStatusEnum[AccountStatusEnum["Undefined"] = 0] = "Undefined";
                    AccountStatusEnum[AccountStatusEnum["PendingActiveApproval"] = 1] = "PendingActiveApproval";
                    AccountStatusEnum[AccountStatusEnum["Active"] = 2] = "Active";
                    AccountStatusEnum[AccountStatusEnum["Suspended"] = 3] = "Suspended";
                    AccountStatusEnum[AccountStatusEnum["PendingFinalBill"] = 4] = "PendingFinalBill";
                    AccountStatusEnum[AccountStatusEnum["Closed"] = 5] = "Closed";
                    AccountStatusEnum[AccountStatusEnum["Archived"] = 6] = "Archived";
                })(account.AccountStatusEnum || (account.AccountStatusEnum = {}));
                var AccountStatusEnum = account.AccountStatusEnum;
            })(account = models.account || (models.account = {}));
        })(models = core.models || (core.models = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));

var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var models;
        (function (models) {
            var account;
            (function (account) {
                (function (AccountTypeEnum) {
                    AccountTypeEnum[AccountTypeEnum["None"] = 0] = "None";
                    AccountTypeEnum[AccountTypeEnum["Logo"] = 1] = "Logo";
                    AccountTypeEnum[AccountTypeEnum["LocalLogo"] = 2] = "LocalLogo";
                    AccountTypeEnum[AccountTypeEnum["LegalEntity"] = 3] = "LegalEntity";
                    AccountTypeEnum[AccountTypeEnum["ReportingGroup1"] = 4] = "ReportingGroup1";
                    AccountTypeEnum[AccountTypeEnum["ReportingGroup2"] = 5] = "ReportingGroup2";
                    AccountTypeEnum[AccountTypeEnum["BillingAccount"] = 6] = "BillingAccount";
                    AccountTypeEnum[AccountTypeEnum["Group"] = 7] = "Group";
                    AccountTypeEnum[AccountTypeEnum["PrimaryGroup"] = 8] = "PrimaryGroup";
                    AccountTypeEnum[AccountTypeEnum["User"] = 9] = "User";
                    AccountTypeEnum[AccountTypeEnum["Access"] = 10] = "Access";
                })(account.AccountTypeEnum || (account.AccountTypeEnum = {}));
                var AccountTypeEnum = account.AccountTypeEnum;
            })(account = models.account || (models.account = {}));
        })(models = core.models || (core.models = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));


























