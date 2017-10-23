



var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var command;
        (function (command) {
            var SupportedResponseFormatEnum;
            (function (SupportedResponseFormatEnum) {
                SupportedResponseFormatEnum["CSV"] = "csv";
            })(SupportedResponseFormatEnum = command.SupportedResponseFormatEnum || (command.SupportedResponseFormatEnum = {}));
        })(command = core.command || (core.command = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));













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
                var EndpointTypeEnum;
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
                })(EndpointTypeEnum = clientConfig.EndpointTypeEnum || (clientConfig.EndpointTypeEnum = {}));
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
            var customerOrder;
            (function (customerOrder) {
                //TODO MGA: remove once all migrated to string enum, or replace normal enum with strign enum without changing name ?
                /**
                 * Type of Arkadin.BlueSky.BSIC.Domain.OrderManagement.CustomerOrder
                 */
                var CustomerOrderStatusEnum;
                (function (CustomerOrderStatusEnum) {
                    // status created
                    CustomerOrderStatusEnum[CustomerOrderStatusEnum["Created"] = 0] = "Created";
                    // status  submitted
                    CustomerOrderStatusEnum[CustomerOrderStatusEnum["Submitted"] = 1] = "Submitted";
                    // status pending
                    CustomerOrderStatusEnum[CustomerOrderStatusEnum["Pending"] = 2] = "Pending";
                    // status on hold
                    CustomerOrderStatusEnum[CustomerOrderStatusEnum["OnHold"] = 3] = "OnHold";
                    // status Manual operation
                    CustomerOrderStatusEnum[CustomerOrderStatusEnum["ManualOp"] = 4] = "ManualOp";
                    // status error
                    CustomerOrderStatusEnum[CustomerOrderStatusEnum["Error"] = 5] = "Error";
                    // status completed
                    CustomerOrderStatusEnum[CustomerOrderStatusEnum["Completed"] = 6] = "Completed";
                    // status canceled
                    CustomerOrderStatusEnum[CustomerOrderStatusEnum["Canceled"] = 7] = "Canceled";
                })(CustomerOrderStatusEnum = customerOrder.CustomerOrderStatusEnum || (customerOrder.CustomerOrderStatusEnum = {}));
                ;
                var CustomerOrderStatusStringEnum;
                (function (CustomerOrderStatusStringEnum) {
                    // status created
                    CustomerOrderStatusStringEnum["Created"] = "Created";
                    // status  submitted
                    CustomerOrderStatusStringEnum["Submitted"] = "Submitted";
                    // status pending
                    CustomerOrderStatusStringEnum["Pending"] = "Pending";
                    // status on hold
                    CustomerOrderStatusStringEnum["OnHold"] = "OnHold";
                    // status Manual operation
                    CustomerOrderStatusStringEnum["ManualOp"] = "ManualOp";
                    // status error
                    CustomerOrderStatusStringEnum["Error"] = "Error";
                    // status completed
                    CustomerOrderStatusStringEnum["Completed"] = "Completed";
                    // status canceled
                    CustomerOrderStatusStringEnum["Canceled"] = "Canceled";
                })(CustomerOrderStatusStringEnum = customerOrder.CustomerOrderStatusStringEnum || (customerOrder.CustomerOrderStatusStringEnum = {}));
                ;
            })(customerOrder = model.customerOrder || (model.customerOrder = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));

var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var model;
        (function (model) {
            var customerOrder;
            (function (customerOrder) {
                //TODO MGA: remove once all migrated to string enum, or replace normal enum with strign enum without changing name ?
                /**
                 * Type of Arkadin.BlueSky.BSIC.Domain.OrderManagement.CustomerOrder
                 */
                var CustomerOrderTypeEnum;
                (function (CustomerOrderTypeEnum) {
                    // Initial an order
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["InitialOrder"] = 0] = "InitialOrder";
                    // Initial a simple order
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["InitialSimplifiedOrder"] = 1] = "InitialSimplifiedOrder";
                    // Create or update customer hierarchy
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["CreateUpdateCustomerHierarchy"] = 2] = "CreateUpdateCustomerHierarchy";
                    // Update a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["UpdateSubscription"] = 3] = "UpdateSubscription";
                    // Change user's Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["ChangeUsersSubscription"] = 4] = "ChangeUsersSubscription";
                    // Modify a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["ModifyUser"] = 5] = "ModifyUser";
                    // Modify a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["ModifyAccess"] = 6] = "ModifyAccess";
                    // Disable a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["DisableUser"] = 7] = "DisableUser";
                    // Reenable a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["ReenableUser"] = 8] = "ReenableUser";
                    // Cease Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["CeaseUsers"] = 9] = "CeaseUsers";
                    // Cease Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["CeaseAccesses"] = 10] = "CeaseAccesses";
                    // Terminate a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["TerminateSubscription"] = 11] = "TerminateSubscription";
                    // Cease a Node whose type is a class who inherite Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Account
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["CeaseNode"] = 12] = "CeaseNode";
                    // Schedule OTP conference
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["ScheduleOTPConference"] = 13] = "ScheduleOTPConference";
                    // Update OTP conference
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["UpdateOTPConference"] = 14] = "UpdateOTPConference";
                    // Cancel OTP conference
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["CancelOTPConference"] = 15] = "CancelOTPConference";
                    // Add a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["AddSubscription"] = 16] = "AddSubscription";
                    // Add a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["AddUser"] = 17] = "AddUser";
                    // Add a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["AddAccess"] = 18] = "AddAccess";
                    // Raise the miscellaneous charges
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["RaiseMiscellaneousCharges"] = 19] = "RaiseMiscellaneousCharges";
                    // Move a set of users inside their hierarchy
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["MoveUsers"] = 20] = "MoveUsers";
                    // Send welcome pack
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["SendWelcomePack"] = 21] = "SendWelcomePack";
                    // Change offer
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["ChangeOffer"] = 22] = "ChangeOffer";
                    // Move node
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["MoveNode"] = 23] = "MoveNode";
                    // Apply Addendum
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["ApplyAddendum"] = 24] = "ApplyAddendum";
                    // Merge Logo
                    CustomerOrderTypeEnum[CustomerOrderTypeEnum["MergeLogo"] = 25] = "MergeLogo";
                })(CustomerOrderTypeEnum = customerOrder.CustomerOrderTypeEnum || (customerOrder.CustomerOrderTypeEnum = {}));
                ;
                var CustomerOrderTypeStringEnum;
                (function (CustomerOrderTypeStringEnum) {
                    // Initial an order
                    CustomerOrderTypeStringEnum["InitialOrder"] = "InitialOrder";
                    // Initial a simple order
                    CustomerOrderTypeStringEnum["InitialSimplifiedOrder"] = "InitialSimplifiedOrder";
                    // Create or update customer hierarchy
                    CustomerOrderTypeStringEnum["CreateUpdateCustomerHierarchy"] = "CreateUpdateCustomerHierarchy";
                    // Update a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
                    CustomerOrderTypeStringEnum["UpdateSubscription"] = "UpdateSubscription";
                    // Change user's Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
                    CustomerOrderTypeStringEnum["ChangeUsersSubscription"] = "ChangeUsersSubscription";
                    // Modify a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
                    CustomerOrderTypeStringEnum["ModifyUser"] = "ModifyUser";
                    // Modify a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
                    CustomerOrderTypeStringEnum["ModifyAccess"] = "ModifyAccess";
                    // Disable a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
                    CustomerOrderTypeStringEnum["DisableUser"] = "DisableUser";
                    // Reenable a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
                    CustomerOrderTypeStringEnum["ReenableUser"] = "ReenableUser";
                    // Cease Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
                    CustomerOrderTypeStringEnum["CeaseUsers"] = "CeaseUsers";
                    // Cease Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
                    CustomerOrderTypeStringEnum["CeaseAccesses"] = "CeaseAccesses";
                    // Terminate a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
                    CustomerOrderTypeStringEnum["TerminateSubscription"] = "TerminateSubscription";
                    // Cease a Node whose type is a class who inherite Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Account
                    CustomerOrderTypeStringEnum["CeaseNode"] = "CeaseNode";
                    // Schedule OTP conference
                    CustomerOrderTypeStringEnum["ScheduleOTPConference"] = "ScheduleOTPConference";
                    // Update OTP conference
                    CustomerOrderTypeStringEnum["UpdateOTPConference"] = "UpdateOTPConference";
                    // Cancel OTP conference
                    CustomerOrderTypeStringEnum["CancelOTPConference"] = "CancelOTPConference";
                    // Add a Arkadin.BlueSky.BSIC.Domain.OrderManagement.Subscription
                    CustomerOrderTypeStringEnum["AddSubscription"] = "AddSubscription";
                    // Add a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.User
                    CustomerOrderTypeStringEnum["AddUser"] = "AddUser";
                    // Add a Arkadin.BlueSky.BSIC.Domain.CustomerAccount.HierarchyNode.Access
                    CustomerOrderTypeStringEnum["AddAccess"] = "AddAccess";
                    // Raise the miscellaneous charges
                    CustomerOrderTypeStringEnum["RaiseMiscellaneousCharges"] = "RaiseMiscellaneousCharges";
                    // Move a set of users inside their hierarchy
                    CustomerOrderTypeStringEnum["MoveUsers"] = "MoveUsers";
                    // Send welcome pack
                    CustomerOrderTypeStringEnum["SendWelcomePack"] = "SendWelcomePack";
                    // Change offer
                    CustomerOrderTypeStringEnum["ChangeOffer"] = "ChangeOffer";
                    // Move node
                    CustomerOrderTypeStringEnum["MoveNode"] = "MoveNode";
                    // Apply Addendum
                    CustomerOrderTypeStringEnum["ApplyAddendum"] = "ApplyAddendum";
                    // Merge Logo
                    CustomerOrderTypeStringEnum["MergeLogo"] = "MergeLogo";
                })(CustomerOrderTypeStringEnum = customerOrder.CustomerOrderTypeStringEnum || (customerOrder.CustomerOrderTypeStringEnum = {}));
                ;
            })(customerOrder = model.customerOrder || (model.customerOrder = {}));
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
                var QuoteStatusEnum;
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
                })(QuoteStatusEnum = quote.QuoteStatusEnum || (quote.QuoteStatusEnum = {}));
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
            var SubsidiaryEnum;
            (function (SubsidiaryEnum) {
                // 263 China
                SubsidiaryEnum["_263_China"] = "_263_China";
                // Arkadin Australia
                SubsidiaryEnum["Arkadin_Australia"] = "Arkadin_Australia";
                // Arkadin Belux
                SubsidiaryEnum["Arkadin_Belux"] = "Arkadin_Belux";
                // Arkadin Brazil
                SubsidiaryEnum["Arkadin_Brazil"] = "Arkadin_Brazil";
                // Arkadin Canada
                SubsidiaryEnum["Arkadin_Canada"] = "Arkadin_Canada";
                // Arkadin China
                SubsidiaryEnum["Arkadin_China"] = "Arkadin_China";
                // Arkadin Colombia
                SubsidiaryEnum["Arkadin_Colombia"] = "Arkadin_Colombia";
                // Arkadin France
                SubsidiaryEnum["Arkadin_France"] = "Arkadin_France";
                // Arkadin Germany
                SubsidiaryEnum["Arkadin_Germany"] = "Arkadin_Germany";
                // Arkadin Hong Kong
                SubsidiaryEnum["Arkadin_Hong_Kong"] = "Arkadin_Hong_Kong";
                // Arkadin India
                SubsidiaryEnum["Arkadin_India"] = "Arkadin_India";
                // Arkadin Ireland
                SubsidiaryEnum["Arkadin_Ireland"] = "Arkadin_Ireland";
                // Arkadin Italy
                SubsidiaryEnum["Arkadin_Italy"] = "Arkadin_Italy";
                // Arkadin Japan
                SubsidiaryEnum["Arkadin_Japan"] = "Arkadin_Japan";
                // Arkadin Korea
                SubsidiaryEnum["Arkadin_Korea"] = "Arkadin_Korea";
                // Arkadin Malaysia
                SubsidiaryEnum["Arkadin_Malaysia"] = "Arkadin_Malaysia";
                // Arkadin Mexico
                SubsidiaryEnum["Arkadin_Mexico"] = "Arkadin_Mexico";
                // Arkadin Middle East
                SubsidiaryEnum["Arkadin_Middle_East"] = "Arkadin_Middle_East";
                // Arkadin Netherlands
                SubsidiaryEnum["Arkadin_Netherlands"] = "Arkadin_Netherlands";
                // Arkadin New Zealand
                SubsidiaryEnum["Arkadin_New_Zealand"] = "Arkadin_New_Zealand";
                // Arkadin Norway
                SubsidiaryEnum["Arkadin_Norway"] = "Arkadin_Norway";
                // Arkadin Portugal
                SubsidiaryEnum["Arkadin_Portugal"] = "Arkadin_Portugal";
                // Arkadin Singapore
                SubsidiaryEnum["Arkadin_Singapore"] = "Arkadin_Singapore";
                // Arkadin South Africa
                SubsidiaryEnum["Arkadin_South_Africa"] = "Arkadin_South_Africa";
                // Arkadin Spain
                SubsidiaryEnum["Arkadin_Spain"] = "Arkadin_Spain";
                // Arkadin Switzerland
                SubsidiaryEnum["Arkadin_Switzerland"] = "Arkadin_Switzerland";
                // Arkadin Turkey
                SubsidiaryEnum["Arkadin_Turkey"] = "Arkadin_Turkey";
                // Arkadin UK
                SubsidiaryEnum["Arkadin_UK"] = "Arkadin_UK";
                // Arkadin US
                SubsidiaryEnum["Arkadin_US"] = "Arkadin_US";
                // Chunghwa Taiwan
                SubsidiaryEnum["Chunghwa_Taiwan"] = "Chunghwa_Taiwan";
                // NTTC Japan
                SubsidiaryEnum["NTTC_Japan"] = "NTTC_Japan";
            })(SubsidiaryEnum = model.SubsidiaryEnum || (model.SubsidiaryEnum = {}));
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
                var TechnicalAccessTypeEnum;
                (function (TechnicalAccessTypeEnum) {
                    TechnicalAccessTypeEnum[TechnicalAccessTypeEnum["None"] = 0] = "None";
                    TechnicalAccessTypeEnum[TechnicalAccessTypeEnum["AudioAccess"] = 1] = "AudioAccess";
                    TechnicalAccessTypeEnum[TechnicalAccessTypeEnum["WebAccess"] = 2] = "WebAccess";
                    TechnicalAccessTypeEnum[TechnicalAccessTypeEnum["IntegratedAudioAccess"] = 3] = "IntegratedAudioAccess";
                    TechnicalAccessTypeEnum[TechnicalAccessTypeEnum["GenericAccess"] = 4] = "GenericAccess";
                })(TechnicalAccessTypeEnum = technicalData.TechnicalAccessTypeEnum || (technicalData.TechnicalAccessTypeEnum = {}));
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
                var TaxActionEnum;
                (function (TaxActionEnum) {
                    TaxActionEnum[TaxActionEnum["Add"] = 0] = "Add";
                    TaxActionEnum[TaxActionEnum["Modify"] = 1] = "Modify";
                    TaxActionEnum[TaxActionEnum["Cease"] = 2] = "Cease";
                })(TaxActionEnum = taxManagement.TaxActionEnum || (taxManagement.TaxActionEnum = {}));
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
                var TaxExemptTypeEnum;
                (function (TaxExemptTypeEnum) {
                    TaxExemptTypeEnum[TaxExemptTypeEnum["Federal"] = 0] = "Federal";
                    TaxExemptTypeEnum[TaxExemptTypeEnum["State"] = 1] = "State";
                })(TaxExemptTypeEnum = taxManagement.TaxExemptTypeEnum || (taxManagement.TaxExemptTypeEnum = {}));
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
                var WelcomePackSendingModeEnum;
                (function (WelcomePackSendingModeEnum) {
                    WelcomePackSendingModeEnum[WelcomePackSendingModeEnum["Instantly"] = 0] = "Instantly";
                    WelcomePackSendingModeEnum[WelcomePackSendingModeEnum["NoSending"] = 1] = "NoSending";
                    WelcomePackSendingModeEnum[WelcomePackSendingModeEnum["InTheFuture"] = 2] = "InTheFuture";
                })(WelcomePackSendingModeEnum = welcomePack.WelcomePackSendingModeEnum || (welcomePack.WelcomePackSendingModeEnum = {}));
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
            var welcomePack;
            (function (welcomePack) {
                var WelcomePackSendingStrategyEnum;
                (function (WelcomePackSendingStrategyEnum) {
                    WelcomePackSendingStrategyEnum[WelcomePackSendingStrategyEnum["ToUser"] = 0] = "ToUser";
                    WelcomePackSendingStrategyEnum[WelcomePackSendingStrategyEnum["ToSingleUserRecipient"] = 1] = "ToSingleUserRecipient";
                })(WelcomePackSendingStrategyEnum = welcomePack.WelcomePackSendingStrategyEnum || (welcomePack.WelcomePackSendingStrategyEnum = {}));
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
            var welcomePack;
            (function (welcomePack) {
                var WelcomePackStateEnum;
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
                })(WelcomePackStateEnum = welcomePack.WelcomePackStateEnum || (welcomePack.WelcomePackStateEnum = {}));
                var WelcomePackQueueEnum;
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
                })(WelcomePackQueueEnum = welcomePack.WelcomePackQueueEnum || (welcomePack.WelcomePackQueueEnum = {}));
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
                //TODO MGA: remove once all migrated to string enum, or replace normal enum with strign enum without changing name ?
                var AccountStatusEnum;
                (function (AccountStatusEnum) {
                    AccountStatusEnum[AccountStatusEnum["Undefined"] = 0] = "Undefined";
                    AccountStatusEnum[AccountStatusEnum["PendingActiveApproval"] = 1] = "PendingActiveApproval";
                    AccountStatusEnum[AccountStatusEnum["Active"] = 2] = "Active";
                    AccountStatusEnum[AccountStatusEnum["Suspended"] = 3] = "Suspended";
                    AccountStatusEnum[AccountStatusEnum["PendingFinalBill"] = 4] = "PendingFinalBill";
                    AccountStatusEnum[AccountStatusEnum["Closed"] = 5] = "Closed";
                    AccountStatusEnum[AccountStatusEnum["Archived"] = 6] = "Archived";
                })(AccountStatusEnum = account.AccountStatusEnum || (account.AccountStatusEnum = {}));
                ;
                var AccountStatusStringEnum;
                (function (AccountStatusStringEnum) {
                    AccountStatusStringEnum["Undefined"] = "Undefined";
                    AccountStatusStringEnum["PendingActiveApproval"] = "PendingActiveApproval";
                    AccountStatusStringEnum["Active"] = "Active";
                    AccountStatusStringEnum["Suspended"] = "Suspended";
                    AccountStatusStringEnum["PendingFinalBill"] = "PendingFinalBill";
                    AccountStatusStringEnum["Closed"] = "Closed";
                    AccountStatusStringEnum["Archived"] = "Archived";
                })(AccountStatusStringEnum = account.AccountStatusStringEnum || (account.AccountStatusStringEnum = {}));
                ;
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
                //TODO MGA: remove once all migrated to string enum, or replace normal enum with strign enum without changing name ?
                var AccountTypeEnum;
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
                })(AccountTypeEnum = account.AccountTypeEnum || (account.AccountTypeEnum = {}));
                ;
                var AccountTypeStringEnum;
                (function (AccountTypeStringEnum) {
                    AccountTypeStringEnum["None"] = "None";
                    AccountTypeStringEnum["Logo"] = "Logo";
                    AccountTypeStringEnum["LocalLogo"] = "LocalLogo";
                    AccountTypeStringEnum["LegalEntity"] = "LegalEntity";
                    AccountTypeStringEnum["ReportingGroup1"] = "ReportingGroup1";
                    AccountTypeStringEnum["ReportingGroup2"] = "ReportingGroup2";
                    AccountTypeStringEnum["BillingAccount"] = "BillingAccount";
                    AccountTypeStringEnum["Group"] = "Group";
                    AccountTypeStringEnum["PrimaryGroup"] = "PrimaryGroup";
                    AccountTypeStringEnum["User"] = "User";
                    AccountTypeStringEnum["Access"] = "Access";
                })(AccountTypeStringEnum = account.AccountTypeStringEnum || (account.AccountTypeStringEnum = {}));
                ;
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
                var SegmentTypeEnum;
                (function (SegmentTypeEnum) {
                    SegmentTypeEnum[SegmentTypeEnum["Premium"] = 0] = "Premium";
                    SegmentTypeEnum[SegmentTypeEnum["OnLine"] = 1] = "OnLine";
                })(SegmentTypeEnum = salesforce.SegmentTypeEnum || (salesforce.SegmentTypeEnum = {}));
            })(salesforce = model.salesforce || (model.salesforce = {}));
        })(model = core.model || (core.model = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));
