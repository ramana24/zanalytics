sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ux/zanalytics/util/Formatter",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/Sorter",

],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter, JSONModel, Fragment, Filter, Sorter) {
    //"use strict";

    return Controller.extend("ux.zanalytics.controller.View1", {
        Formatter: Formatter, // loading outside formatter into our file
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


            // // Refernce.

            // /*Total -Summary*/
            // var oVizFrame = this.getView().byId("idVizFrameColumn");
            // var oModel = new JSONModel();


            //      var data = {
            // 'Count' : [
            // {"Status": "Total","Value": "1234","Value2":"456"},
            // {"Status": "Inbound","Value": "9127","Value2":"569"},

            // {"Status": "Outbound","Value": "15957","Value2":"700"},
            // {"Status": "Profit","Value": "20000","Value2":"23000"},

            // ]};
            //    oModel.setData(data);

            //    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            // dimensions : [{
            // name : 'Status',
            // value : "{Status}"}],

            // measures : [
            //            {
            // name : 'Count',
            //            value : '{Value}'
            //            },
            //            {
            // name : 'Count2',
            //            value : '{Value2}'
            //            }
            //                   ],


            // data : {
            // path : "/Count"
            // }
            //    });
            //    oVizFrame.setDataset(oDataset);
            //    oVizFrame.setModel(oModel);
            //    oVizFrame.setVizType('bar');

            // // below all charts are supported
            // // Chart customizations property, aim to customize existing (build-in) charts to meet specific LoB requirements. Currently, supported chart type : column, dual_column, bar, dual_bar, stacked_column, stacked_bar, 100_stacked_bar, 100_stacked_column, 100_dual_stacked_bar, 100_dual_stacked_column, dual_stacked_bar, dual_stacked_column, line, horizontal_line, dual_line, dual_horizontal_line, combination, horizontal_combination, stacked_combination, horizontal_stacked_combination, dual_stacked_combination, dual_horizontal_stacked_combination, scatter, bubble.
            // //


            //    oVizFrame.setVizProperties({

            // plotArea: {
            // // 	colorPalette : d3.scale.category20().range
            // dataLabel: {
            // visible: "true"
            // }

            // }});

            //    var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
            // 'uid': "valueAxis",
            // 'type': "Measure",
            // 'values': ["Count"],
            // 'label':"true"
            // }),
            // feedDataAxis =   new sap.viz.ui5.controls.common.feeds.FeedItem({
            // 'uid': "DataAxis",
            // 'type': "Measure",
            // 'values': ["Count"],
            // 'label':"true"
            // }),
            // feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
            // 'uid': "categoryAxis",
            // 'type': "Dimension",
            // 'values': ["Status"]
            // });
            //    oVizFrame.addFeed(feedValueAxis);
            //    oVizFrame.addFeed(feedCategoryAxis);
            //    oVizFrame.addFeed(feedDataAxis);


        },

        // Fragments controller logic - 1.20
        // Create function
        async onOpenCreateDialog(oEvent) { // create dialog lazily
            this.oDialogCreate ?? = await this.loadFragment({name: "ux.zanalytics.view.create"});

            this.oDialogCreate.open();


            var oTable = this.getView().byId("IDOrderTable");

            var oCreateDialog = this.getView().byId("CreateDialog");

            var oPOID = "300001998";

            var oCreateModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('" + oPOID + "')?$format=json");

            this.getView().byId("IdCreateForm").setModel(oCreateModel, "oCreateModel");


        },
        onCloseCreateDialog: function () {
            this.getView().byId("CreateDialog").close();

        },

        // logic create operation

        onPOCreate: function (oEvent) {
            var oTable = this.getView().byId("IDOrderTable");

            var oCreateDialog = this.getView().byId("CreateDialog");

            var oModel = this.getView().getModel();

            var oPOID = "300001998";

            // JSON Payload structure

            var oCreatePayload = {

                "POId": oPOID,
                "OrderedById": "400000003",
                "OrderedByName": "Walter  Winter",
                "ChangedAt": "/Date(1716328800000)/",
                "SupplierId": "100000088",
                "SupplierName": "Siwusha",
                "DeliveryAddress": "Zeppelinstrasse 2, 85399 Munich, DE Germany",
                "DeliveryDateEarliest": "/Date(1716933600000)/",
                "LaterDelivDateExist": "X",
                "GrossAmount": "6189.19",
                "CurrencyCode": "USD",
                "ItemCount": 4
            };

            var oData = {
                ProductI: 999,
                ProductName: "myProductUpdated"
            }
            oModel.create("/PurchaseOrders", oCreatePayload, {
                success: function () {


                    console.log("success");


                },
                error: function () {


                    console.log("error");

                }
            });

        },


        // update function
        async onOpenUpdateDialog() { 
            // create dialog lazily
            this.oDialogUpdate ?? = await this.loadFragment({name: "ux.zanalytics.view.update"});

            this.oDialogUpdate.open();
        },


        onCloseUpdateDialog: function () {
            this.getView().byId("UpdateDialog").close();

        },
        // Fragments controller logic - 1.96 below.
        onOpenDialog1: function () { // create dialog lazily
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({name: "ux.zanalytics.view.create"});
            }
            this.pDialog.then(function (oDialog) {
                oDialog.open();
            });
        },

        async onOpenSysErrorDialog() { // create dialog lazily
            this.oDialog ?? = await this.loadFragment({name: "ux.zanalytics.view.SysError"});

            this.oDialog.open();
            var oSysModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001998')?$expand=Supplier&$format=json");
            this.getView().byId("tblsysTable").setModel(oSysModel, "oSysModel");
        },
        onCloseAppDialog: function () {
            this.getView().byId("SysDialog").close();

        },
        // SORT
        handleSortButtonPressed: function () {
            this.getViewSettingsDialog("ux.zanalytics.view.Sort").then(function (oViewSettingsDialog) {
                oViewSettingsDialog.open();
            });
        },

        handleSortDialogConfirm: function (oEvent) {
            var oTable = this.byId("IDOrderTable"),
                mParams = oEvent.getParameters(),
                oBinding = oTable.getBinding("items"),
                sPath,
                bDescending,
                aSorters = [];

            sPath = mParams.sortItem.getKey();
            bDescending = mParams.sortDescending;
            aSorters.push(new Sorter(sPath, bDescending));
            // sort login in ui

            // apply the selected sort and group settings
            oBinding.sort(aSorters);
        },

        // Filter
        handleFilterButtonPressed: function () {
            this.getViewSettingsDialog("ux.zanalytics.view.Filter").then(function (oViewSettingsDialog) {
                oViewSettingsDialog.open();
            });
        },
        handleFilterDialogConfirm: function (oEvent) {
            var oTable = this.byId("IDOrderTable"),
                mParams = oEvent.getParameters(),
                oBinding = oTable.getBinding("items"),
                aFilters = [];

            mParams.filterItems.forEach(function (oItem) {
                var aSplit = oItem.getKey().split("___"),
                    sPath = aSplit[0],
                    sOperator = aSplit[1],
                    sValue1 = aSplit[2],
                    sValue2 = aSplit[3],
                    oFilter = new Filter(sPath, sOperator, sValue1, sValue2); // logic for fitler
                aFilters.push(oFilter);
            });

            // apply filter settings
            oBinding.filter(aFilters);

            // update filter bar
            // this.byId("vsdFilterBar").setVisible(aFilters.length > 0);
            // this.byId("vsdFilterLabel").setText(mParams.filterString);
        },

        // Grouping

        handleGroupButtonPressed: function () {
            this.getViewSettingsDialog("ux.zanalytics.view.GroupBy").then(function (oViewSettingsDialog) {
                oViewSettingsDialog.open();
            });
        },
        handleGroupDialogConfirm: function (oEvent) {
            var oTable = this.byId("IDOrderTable"),
                mParams = oEvent.getParameters(),
                oBinding = oTable.getBinding("items"),
                sPath,
                bDescending,
                vGroup,
                aGroups = [];

            if (mParams.groupItem) {
                sPath = mParams.groupItem.getKey();
                bDescending = mParams.groupDescending;
                vGroup = this.mGroupFunctions[sPath];
                aGroups.push(new Sorter(sPath, bDescending, vGroup));
                // group logic - 3rd parameter
                // apply the selected group settings
                oBinding.sort(aGroups);
            } else if (this.groupReset) {
                oBinding.sort();
                this.groupReset = false;
            }
        },

        // reset group
        resetGroupDialog: function (oEvent) {
            this.groupReset = true;
        },

        getViewSettingsDialog: function (sDialogFragmentName) {
            var pDialog = this._mViewSettingsDialogs[sDialogFragmentName];

            if (! pDialog) {
                pDialog = Fragment.load({id: this.getView().getId(), name: sDialogFragmentName, controller: this}).then(function (oDialog) {
                    // if (Device.system.desktop) {
                    //     oDialog.addStyleClass("sapUiSizeCompact");
                    // }
                    return oDialog;
                });
                this._mViewSettingsDialogs[sDialogFragmentName] = pDialog;
            }
            return pDialog;
        }

    });
});
