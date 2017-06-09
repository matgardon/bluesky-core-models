









var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var model;
        (function (model) {
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
            })(clientConfig = model.clientConfig || (model.clientConfig = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));



















































































var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var model;
        (function (model) {
            var quote;
            (function (quote) {
                (function (QuoteStatusEnum) {
                    QuoteStatusEnum[QuoteStatusEnum["Pending"] = 0] = "Pending";
                    QuoteStatusEnum[QuoteStatusEnum["Submitted"] = 1] = "Submitted";
                    QuoteStatusEnum[QuoteStatusEnum["SignedOff"] = 2] = "SignedOff";
                    QuoteStatusEnum[QuoteStatusEnum["Allocated"] = 3] = "Allocated";
                    QuoteStatusEnum[QuoteStatusEnum["Rejected"] = 4] = "Rejected";
                    QuoteStatusEnum[QuoteStatusEnum["Canceled"] = 5] = "Canceled";
                    QuoteStatusEnum[QuoteStatusEnum["Closed"] = 6] = "Closed";
                    QuoteStatusEnum[QuoteStatusEnum["Initialized"] = 7] = "Initialized";
                    QuoteStatusEnum[QuoteStatusEnum["Discarded"] = 8] = "Discarded";
                    QuoteStatusEnum[QuoteStatusEnum["Available"] = 9] = "Available";
                    QuoteStatusEnum[QuoteStatusEnum["Approval_In_Progress"] = 10] = "Approval_In_Progress";
                    QuoteStatusEnum[QuoteStatusEnum["Approved"] = 11] = "Approved";
                    QuoteStatusEnum[QuoteStatusEnum["Disapproved"] = 12] = "Disapproved";
                })(quote.QuoteStatusEnum || (quote.QuoteStatusEnum = {}));
                var QuoteStatusEnum = quote.QuoteStatusEnum;
            })(quote = model.quote || (model.quote = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));



























































var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var model;
        (function (model) {
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
            })(technicalData = model.technicalData || (model.technicalData = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));























var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var model;
        (function (model) {
            var taxManagement;
            (function (taxManagement) {
                (function (TaxActionEnum) {
                    TaxActionEnum[TaxActionEnum["Add"] = 0] = "Add";
                    TaxActionEnum[TaxActionEnum["Modify"] = 1] = "Modify";
                    TaxActionEnum[TaxActionEnum["Cease"] = 2] = "Cease";
                })(taxManagement.TaxActionEnum || (taxManagement.TaxActionEnum = {}));
                var TaxActionEnum = taxManagement.TaxActionEnum;
            })(taxManagement = model.taxManagement || (model.taxManagement = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));



var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var model;
        (function (model) {
            var taxManagement;
            (function (taxManagement) {
                (function (TaxExemptTypeEnum) {
                    TaxExemptTypeEnum[TaxExemptTypeEnum["Federal"] = 0] = "Federal";
                    TaxExemptTypeEnum[TaxExemptTypeEnum["State"] = 1] = "State";
                })(taxManagement.TaxExemptTypeEnum || (taxManagement.TaxExemptTypeEnum = {}));
                var TaxExemptTypeEnum = taxManagement.TaxExemptTypeEnum;
            })(taxManagement = model.taxManagement || (model.taxManagement = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));































var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var model;
        (function (model) {
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
            })(welcomePack = model.welcomePack || (model.welcomePack = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));







var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var model;
        (function (model) {
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
            })(account = model.account || (model.account = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));

var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var model;
        (function (model) {
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
            })(account = model.account || (model.account = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));



















































































































var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var model;
        (function (model) {
            var salesforce;
            (function (salesforce) {
                /**
                 * List of supported segment types for a SalesForce Account.
                 */
                (function (SegmentTypeEnum) {
                    SegmentTypeEnum[SegmentTypeEnum["Premium"] = 0] = "Premium";
                    SegmentTypeEnum[SegmentTypeEnum["OnLine"] = 1] = "OnLine";
                })(salesforce.SegmentTypeEnum || (salesforce.SegmentTypeEnum = {}));
                var SegmentTypeEnum = salesforce.SegmentTypeEnum;
            })(salesforce = model.salesforce || (model.salesforce = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));
