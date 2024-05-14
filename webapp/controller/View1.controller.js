sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ux/zanalytics/util/Formatter",
    "sap/ui/model/json/JSONModel",
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Formatter,JSONModel) {
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
                                   var oPOId="300001996";

                              //     var oJavaModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('+oPOId+')?$format=json");
            
                                   var oJavaModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001996')?$format=json");
            
                                   this.getView().byId("Javcontainer").setModel(oJavaModel,"oJavaModel");


                                      // card 7 model
                                      var oSFModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001989')?$format=json");
            
                                      this.getView().byId("SFcontainer").setModel(oSFModel,"oSFModel");

                                     // card 8 model
                                     var oAZModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('300001992')?$format=json");
            
                                     this.getView().byId("Azcontainer").setModel(oAZModel,"oAZModel");

                                     // KPI 1 

                                    

                                     var sUrl ="/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrderItems(POId='300001998',POItemPos='30')?$select=Price,GrossAmount&$format=json";

                                     var CompModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrderItems(POId='300001998',POItemPos='30')?$select=Price,GrossAmount&$format=json");
            
                                     this.getView().byId("IDKPIComp").setModel(CompModel,"CompModel");


                                     // KPI 2

                                     var oLineModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders?$select=ItemCount&$format=json");
            
                                     this.getView().byId("IDLineChart").setModel(oLineModel,"oLineModel");


// Chart Model

var oVizFrame = this.getView().byId("idVizFrameBar");


       var aData = {
        Items : [  
            {
                Flavor:"Blue Moon",
                Sales : 700
            },
            {
                Flavor:"Matcha Green Tea",
                Sales : 1100
            },
            {
                Flavor:"ButterScotch",
                Sales : 1400
            },
            {
                Flavor:"Black Current",
                Sales : 560
            }
            ]
};
var oIceCreamModel = new sap.ui.model.json.JSONModel();
oIceCreamModel.setData(aData);
this.getView().byId("chartContainer").setModel(oIceCreamModel, "IceCreamModel");


// PIE Model

//var oVizFrame = this.getView().byId("idVizFramePie");


       var aData = {
        Items : [  
            {
                Flavor:"Blue Moon",
                Sales : 700
            },
            {
                Flavor:"Matcha Green Tea",
                Sales : 1100
            },
            {
                Flavor:"ButterScotch",
                Sales : 1400
            },
            {
                Flavor:"Black Current",
                Sales : 560
            }
            ]
};
var oIceCreamModel = new sap.ui.model.json.JSONModel();
oIceCreamModel.setData(aData);
this.getView().byId("chartContainer2").setModel(oIceCreamModel, "IceCreamModel");
  
















// // Refernce.

// 	 /*Total -Summary*/
// 	 var oVizFrame = this.getView().byId("idVizFrameColumn");
// 	 var oModel = new JSONModel();
   
   
//      var data = {
// 		   'Count' : [
// 			   {"Status": "Total","Value": "1234","Value2":"456"},
// 			   {"Status": "Inbound","Value": "9127","Value2":"569"},
			  
// 				{"Status": "Outbound","Value": "15957","Value2":"700"},
// 				{"Status": "Profit","Value": "20000","Value2":"23000"},
				
// 			  ]};
//    oModel.setData(data);
   
//    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
// 	   dimensions : [{
// 		   name : 'Status',
// 		   value : "{Status}"}],
					  
// 	   measures : [
//            {
// 		   name : 'Count',
//            value : '{Value}'
//            },
//            {
// 		   name : 'Count2',
//            value : '{Value2}'
//            }
//                   ],
        
					
// 	   data : {
// 		   path : "/Count"
// 	   }
//    });		
//    oVizFrame.setDataset(oDataset);
//    oVizFrame.setModel(oModel);	
//    oVizFrame.setVizType('bar');

// // below all charts are supported
// // Chart customizations property, aim to customize existing (build-in) charts to meet specific LoB requirements. Currently, supported chart type : column, dual_column, bar, dual_bar, stacked_column, stacked_bar, 100_stacked_bar, 100_stacked_column, 100_dual_stacked_bar, 100_dual_stacked_column, dual_stacked_bar, dual_stacked_column, line, horizontal_line, dual_line, dual_horizontal_line, combination, horizontal_combination, stacked_combination, horizontal_stacked_combination, dual_stacked_combination, dual_horizontal_stacked_combination, scatter, bubble.   
// // 
   
   
//    oVizFrame.setVizProperties({
   
// 	   plotArea: {
// 	  // 	colorPalette : d3.scale.category20().range
// 	   dataLabel: {
// 					   visible: "true"
// 				   }
				
// 		   }});
   
//    var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
// 		 'uid': "valueAxis",
// 		 'type': "Measure",
// 		 'values': ["Count"],
// 		 'label':"true"
// 	   }), 
// 	   feedDataAxis =   new sap.viz.ui5.controls.common.feeds.FeedItem({
// 		'uid': "DataAxis",
// 		'type': "Measure",
// 		'values': ["Count"],
// 		'label':"true"
// 	  }), 
// 	   feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
// 		 'uid': "categoryAxis",
// 		 'type': "Dimension",
// 		 'values': ["Status"]
// 	   });
//    oVizFrame.addFeed(feedValueAxis);
//    oVizFrame.addFeed(feedCategoryAxis);
//    oVizFrame.addFeed(feedDataAxis);







            }
        });
    });
