sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ux/zanalytics/util/Formatter",
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Formatter) {
        "use strict";

        return Controller.extend("ux.zanalytics.controller.View1", {
            Formatter:Formatter, // loading outside formatter into our file
            onInit: function () {
                var that=this;
                var sServiceUrl = "/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/";
    
                   var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
            
                  this.getView().setModel(oModel);
                  
    
            // card 1 model
                  var oSAPModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001997')?$format=json");
            
                  this.getView().byId("IDcontainer").setModel(oSAPModel,"oSAPModel");
            }
        });
    });
