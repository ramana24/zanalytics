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


                   // card 2 model
                   var oConModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001998')?$format=json");
            
                   this.getView().byId("Concontainer").setModel(oConModel,"oConModel");

                      // card 3 model
                      var oAriModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001999')?$format=json");
            
                      this.getView().byId("Aribacontainer").setModel(oAriModel,"oAriModel");

                          // card 4 model
                          var oFGModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001994')?$format=json");
            
                          this.getView().byId("FGcontainer").setModel(oFGModel,"oFGModel");

                             // card 5 model
                             var oECCModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001995')?$format=json");
            
                             this.getView().byId("ECCcontainer").setModel(oECCModel,"oECCModel");

                                   // card 6 model
                                   var oJavaModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001996')?$format=json");
            
                                   this.getView().byId("Javcontainer").setModel(oJavaModel,"oJavaModel");


                                      // card 7 model
                                      var oSFModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001989')?$format=json");
            
                                      this.getView().byId("SFcontainer").setModel(oSFModel,"oSFModel");

                                     // card 8 model
                                     var oAZModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001992')?$format=json");
            
                                     this.getView().byId("Azcontainer").setModel(oAZModel,"oAZModel");


            }
        });
    });
