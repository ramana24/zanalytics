sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ux/zanalytics/util/Formatter",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/Sorter",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/viz/ui5/format/ChartFormatter",
    "sap/viz/ui5/api/env/Format"

],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter, JSONModel, Fragment, Filter, Sorter, MessageToast, MessageBox, ChartFormatter, Format) { // "use strict";

    return Controller.extend("ux.zanalytics.controller.View1", {
        Formatter: Formatter,// loading outside formatter into our file
            onInit: function () {
                var that = this;
                var sServiceUrl = "/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/";

                var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);

                this.getView().setModel(oModel);

                this._mViewSettingsDialogs = {};

                // card 1 model
                var oSAPModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001997')?$format=json");

                this.getView().byId("IDcontainer").setModel(oSAPModel, "oSAPModel");


                // card 2 model
                var oConModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001998')?$format=json");

                this.getView().byId("Concontainer").setModel(oConModel, "oConModel");

                // card 3 model
                var oAriModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001999')?$format=json");

                this.getView().byId("Aribacontainer").setModel(oAriModel, "oAriModel");

                // card 4 model
                var oFGModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001994')?$format=json");

                this.getView().byId("FGcontainer").setModel(oFGModel, "oFGModel");

                // card 5 model
                var oECCModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001995')?$format=json");

                this.getView().byId("ECCcontainer").setModel(oECCModel, "oECCModel");

                // card 6 model
                var oPOId = "300001996";

                //     var oJavaModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('+oPOId+')?$format=json");

                var oJavaModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001996')?$format=json");

                this.getView().byId("Javcontainer").setModel(oJavaModel, "oJavaModel");


                // card 7 model
                var oSFModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001989')?$format=json");

                this.getView().byId("SFcontainer").setModel(oSFModel, "oSFModel");

                // card 8 model
                var oAZModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001992')?$format=json");

                this.getView().byId("Azcontainer").setModel(oAZModel, "oAZModel");

                // KPI 1


                var sUrl = "/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrderItems(POId='300001998',POItemPos='30')?$select=Price,GrossAmount&$format=json";

                var CompModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrderItems(POId='300001998',POItemPos='30')?$select=Price,GrossAmount&$format=json");

                this.getView().byId("IDKPIComp").setModel(CompModel, "CompModel");


                // KPI 2

                var oLineModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders?$select=ItemCount&$format=json");

                this.getView().byId("IDLineChart").setModel(oLineModel, "oLineModel");


                // Chart Model

                var oVizFrame = this.getView().byId("idVizFrameBar");


                var aData = {
                    Items: [
                        {
                            Flavor: "Blue Moon",
                            Sales: 700
                        }, {
                            Flavor: "Matcha Green Tea",
                            Sales: 1100
                        }, {
                            Flavor: "ButterScotch",
                            Sales: 1400
                        }, {
                            Flavor: "Black Current",
                            Sales: 560
                        }
                    ]
                };
                var oIceCreamModel = new sap.ui.model.json.JSONModel();
                oIceCreamModel.setData(aData);
                this.getView().byId("chartContainer").setModel(oIceCreamModel, "IceCreamModel");


                // PIE Model

                // var oVizFrame = this.getView().byId("idVizFramePie");


                var aData = {
                    Items: [
                        {
                            Flavor: "Blue Moon",
                            Sales: 700
                        }, {
                            Flavor: "Matcha Green Tea",
                            Sales: 1100
                        }, {
                            Flavor: "ButterScotch",
                            Sales: 1400
                        }, {
                            Flavor: "Black Current",
                            Sales: 560
                        }
                    ]
                };
                var oIceCreamModel = new sap.ui.model.json.JSONModel();
                oIceCreamModel.setData(aData);
                this.getView().byId("chartContainer2").setModel(oIceCreamModel, "IceCreamModel");
                var oPopOver = this.getView().byId("idPopOver");
                oPopOver.connect(oVizFrame.getVizUid());

            },
            // end of init function.
              
            // New syntax - 1.93 above

            // this === Controller instance
            onOpenCreateDialog:function() {
             //   const dialogcreate = this.byId("CreateDialog") || await this.loadFragment({name: "ux.zanalytics.view.create"});
             var that = this;

             if (!this.pDialogCreate) {
                 this.pDialogCreate = this.loadFragment({name: "ux.zanalytics.view.create"});
             }
             this.pDialogCreate.then(function (oDialog) { // oDialog.open();



                var oTable = this.getView().byId("IDOrderTable");


                var length = oTable.getSelectedItems().length;

                                                if (length > 0) {
                                                    oDialog.open();


                                                    // Loading selected row data in create fragment

                                                    // var oTable = this.getView().byId("IDOrderTable");

                                                    var oCreateDialog = this.getView().byId("CreateDialog");

                                                    var oPOID = oTable.getSelectedContextPaths()[0].split('(')[1].substr(1, 9);

                                                    var oCreateModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('" + oPOID + "')?$format=json");

                                                    this.getView().byId("IdCreateForm").setModel(oCreateModel, "oCreateModel");

                                                } else {

                                                    MessageToast.show("Please select a row");
                                                }
                                            });
            },
            onCloseCreateDialog: function () {
                this.getView().byId("CreateDialog").close();

            },// logic create operation

            onPOCreate: function (oEvent) {

                try {
                    var oTable = this.getView().byId("IDOrderTable");

                    var oCreateDialog = this.getView().byId("CreateDialog");

                    var oModel = this.getView().getModel();


                    var oPOID = this.getView().byId("idPOID").getValue();
                    var oGAmt = this.getView().byId("idGAmt").getValue();
                    var oSupplier = this.getView().byId("idSupplier").getValue();

                    // JSON Payload structure - test in gw client
                    var oArr = [];
                    var oCreatePayload = {

                        "POId": oPOID,
                        "OrderedById": oGAmt,
                        "OrderedByName": "Walter  Winter",
                        "ChangedAt": "/Date(1716328800000)/",
                        "SupplierId": "100000088",
                        "SupplierName": oSupplier,
                        "DeliveryAddress": "Zeppelinstrasse 2, 85399 Munich, DE Germany",
                        "DeliveryDateEarliest": "/Date(1716933600000)/",
                        "LaterDelivDateExist": "X",
                        "GrossAmount": "6189.19",
                        "CurrencyCode": "USD",
                        "ItemCount": 4
                    };


                    // var oData = {
                    //     ProductI: 999,
                    //     ProductName: "myProductUpdated"
                    // }
                    oModel.create("/PurchaseOrders", oCreatePayload, {
                        success: function () {


                            MessageToast.show("PO Created Successfully" + oPOID);


                        },
                        error: function (oError) {


                            console.log(oError);
                            MessageToast.show("Po Creation failed.");
                        }
                    });
                } catch {
                    MessageBox.error("Unable to Process Request . Kindly reach out to IT Support. ");
                }},
            onPOCreateMultipleRows : function (oEvent) {

                try {
                    var oTable = this.getView().byId("IDOrderTable");

                    //    var oCreateDialog = this.getView().byId("CreateDialog");

                    var oModel = this.getView().getModel();


                    var oPOID = this.getView().byId("IDPOM").getValue();
                    // Logic to determine selected row index methods  [Open - To be added]


                    var length = 3;


                    if (length > 0) { // JSON Payload structure - test in gw client
                        var oArr = []; // 3 records
                        var oCreatePayload = {

                            "POId": oPOID,
                            "OrderedById": oGAmt,
                            "OrderedByName": "Walter  Winter",
                            "ChangedAt": "/Date(1716328800000)/",
                            "SupplierId": "100000088",
                            "SupplierName": oSupplier,
                            "DeliveryAddress": "Zeppelinstrasse 2, 85399 Munich, DE Germany",
                            "DeliveryDateEarliest": "/Date(1716933600000)/",
                            "LaterDelivDateExist": "X",
                            "GrossAmount": "6189.19",
                            "CurrencyCode": "USD",
                            "ItemCount": 4
                        };

                        for (var i = 0; i < length; i++) {
                            oArr.push("oCreatePayload");
                        }


                        // var oData = {
                        //     ProductI: 999,
                        //     ProductName: "myProductUpdated"
                        // }
                        oModel.create("/PurchaseOrders", oArr, {
                            success: function () {


                                MessageToast.show("PO Created Successfully" + oPOID);


                            },
                            error: function (oError) {


                                console.log(oError);
                                MessageToast.show("Po Creation failed.");
                            }
                        });
                    }
                } catch {
                    MessageBox.error("Unable to Process Request . Kindly reach out to IT Support. ");
                }},


            onOpenDialogUpdate : function () { // create dialog lazily

                var that = this;

                if (!this.pDialogUpdate) {
                    this.pDialogUpdate = this.loadFragment({name: "ux.zanalytics.view.update"});
                }
                this.pDialogUpdate.then(function (oDialog) { // oDialog.open();


                    var oTable = that.getView().byId("IDOrderTable");


                    var length = oTable.getSelectedItems().length;

                    if (length > 0) {
                        oDialog.open();


                        // Loading selected row data in create fragment

                        // var oTable = this.getView().byId("IDOrderTable");

                        var oCreateDialog = that.getView().byId("UpdateDialog");

                        var oPOID = oTable.getSelectedContextPaths()[0].split('(')[1].substr(1, 9);

                        var oCreateModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('" + oPOID + "')?$format=json");

                        that.getView().byId("IdUpdateForm").setModel(oCreateModel, "oCreateModel");

                    } else {

                        MessageToast.show("Please select a row");
                    }


                });
            },

            onPOUpdate : function () {
                try {
                    var oTable = this.getView().byId("IDOrderTable");

                    var oCreateDialog = this.getView().byId("UpdateDialog");

                    var oModel = this.getView().getModel();


                    var oPOID = this.getView().byId("idUPOID").getValue();
                    var oGAmt = this.getView().byId("idUGAmt").getValue();
                    var oSupplier = this.getView().byId("idUSupplier").getValue();

                    // JSON Payload structure - test in gw client
                    var oArr = [];
                    var oUpdatePayload = {

                        "POId": oPOID,
                        "OrderedById": "1000023",
                        "OrderedByName": "Walter  Winter",
                        "ChangedAt": "/Date(1716328800000)/",
                        "SupplierId": "100000088",
                        "SupplierName": oSupplier,
                        "DeliveryAddress": "Zeppelinstrasse 2, 85399 Munich, DE Germany",
                        "DeliveryDateEarliest": "/Date(1716933600000)/",
                        "LaterDelivDateExist": "X",
                        "GrossAmount": oGAmt,
                        "CurrencyCode": "USD",
                        "ItemCount": 4
                    };


                    // var oData = {
                    //     ProductI: 999,
                    //     ProductName: "myProductUpdated"
                    // }
                    oModel.update("/PurchaseOrders('" + oPOID + "')", oUpdatePayload, {
                        success: function () {


                            MessageToast.show("PO Updated  Successfully" + oPOID);


                        },
                        error: function (oError) {


                            console.log(oError);
                            MessageToast.show("Po Creation failed.");
                        }
                    });
                } catch {
                    MessageBox.error("Unable to Process Request . Kindly reach out to IT Support. ");
                }},
            onDelete : function () {

            try {


                        var oModel = this.getView().getModel();


                        // var oPOID = this.getView().byId("idUPOID").getValue();
                        // clue-    evt.getSource().getBindingContext().getPath();


                        var oPOID = '300001999';

                        oModel.remove("/PurchaseOrders('" + oPOID + "')", {
                            success: function () {


                                MessageToast.show("PO Deleted  Successfully" + oPOID);


                            },
                            error: function (oError) {


                                console.log(oError);
                                MessageToast.show("Po Creation failed.");
                            }
                        });

                    } catch {
                        MessageBox.error("Unable to Process Request . Kindly reach out to IT Support. ");
                    }},
            onPOCreateMultipleRows : function (oEvent) {
                    try {
                        var oTable = this.getView().byId("IDOrderTable");

                        //    var oCreateDialog = this.getView().byId("CreateDialog");

                        var oModel = this.getView().getModel();


                        var oPOID = this.getView().byId("IDPOM").getValue();
                        // Logic to determine selected row index methods  [Open - To be added]


                        var length = 3;


                        if (length > 0) { // JSON Payload structure - test in gw client
                            var oArr = []; // 3 records
                            var oCreatePayload = {

                                "POId": oPOID,
                                "OrderedById": oGAmt,
                                "OrderedByName": "Walter  Winter",
                                "ChangedAt": "/Date(1716328800000)/",
                                "SupplierId": "100000088",
                                "SupplierName": oSupplier,
                                "DeliveryAddress": "Zeppelinstrasse 2, 85399 Munich, DE Germany",
                                "DeliveryDateEarliest": "/Date(1716933600000)/",
                                "LaterDelivDateExist": "X",
                                "GrossAmount": "6189.19",
                                "CurrencyCode": "USD",
                                "ItemCount": 4
                            };

                            for (var i = 0; i < length; i++) {
                                oArr.push("oCreatePayload");
                            }


                            // var oData = {
                            //     ProductI: 999,
                            //     ProductName: "myProductUpdated"
                            // }
                            oModel.create("/PurchaseOrders", oArr, {
                                success: function () {


                                    MessageToast.show("PO Created Successfully" + oPOID);


                                },
                                error: function (oError) {


                                    console.log(oError);
                                    MessageToast.show("Po Creation failed.");
                                }
                            });
                        }
                    } catch {
                        MessageBox.error("Unable to Process Request . Kindly reach out to IT Support. ");
                    }},
                onCloseUpdateDialog : function () {
                    this.getView().byId("UpdateDialog").close();
                }, 
                
            });
        });