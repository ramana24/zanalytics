## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Wed May 08 2024 02:13:56 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.13.3|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>OData Url|
|**Service URL**<br>https://sapes5.sapdevcenter.com/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/
|**Module Name**<br>zanalytics|
|**Application Title**<br>Fiori Analytics|
|**Namespace**<br>ux|
|**UI5 Theme**<br>sap_horizon_dark|
|**UI5 Version**<br>1.121.4|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## zanalytics

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

#### Preview:
https://www.figma.com/file/2OxRcHowDhLPga7lfTaNYG/Untitled?type=whiteboard&node-id=0%3A1&t=fJkofAn2j2r5qZrs-1
#### Prototype:
<img width="663" alt="image" src="https://github.com/ramana24/zanalytics/assets/16117165/970d9bf4-0c49-4ffe-88ac-be44c276759b">

#### Notes:
Analytics -

 Annotations -  OVP (Annotations - analytical) , ALP - Annotations. ()
 UI5 - Charts - Viz frame  < 10 K data - <1 lakh. ~ Viz frame
 Smart Business Runtime - Manage KPI. High volume data . > 10k, ALP can be created using manage KPi.
 
 
 Migrate - 
 WebIDE / or older version - 
 Ensure below steps in place  before start of project - 
 - Prototype - url-https://www.figma.com/file/2OxRcHowDhLPga7lfTaNYG/Untitled?type=whiteboard&node-id=0%3A1&t=wCTfamfG47XBgqb5-1
 - Add Destinations
 - BTP login  use cf login command
 - Link SAP System
 - Link Git Repository 
 -
#### Version 1.0 
<img width="745" alt="image" src="https://github.com/ramana24/zanalytics/assets/16117165/54837b40-6d60-4b4a-af87-eae7005a7670">

<img width="853" alt="image" src="https://github.com/ramana24/zanalytics/assets/16117165/ace9a952-e75d-4082-8366-1e7d9c15eb63">


Open Issues:
1. Card spacing - css margin,css color.
2. Full width - shell fullwidth, VBox - 100% width,height. [Working as expected.]
3. KPI - comaprsion chart -data binind blank
4. Ui table - single record - repeating multiple times. For PurchaseOrderItems , if it has multiple records - syntax might not work from xml alone.
   Solution:

<t:Table id="tblsysTable" rows="{/PurchaseOrders?$expand=Supplier,PurchaseOrderItems}" class="sapUiSizeCompact" selectionMode="None">


					<t:columns>
						<t:Column width="4rem" tooltip="PO ID ">
							<Label text="PO ID" />
							<t:template>
								<Text text="{Supplier/Id}" />
							</t:template>
						</t:Column>

						<t:Column width="4rem" tooltip="PO item ID ">
							<Label text="PO ID" />
							<t:template>
								<Text text="{POId}" />
							</t:template>
						</t:Column>


						
					</t:columns>
				</t:Table>
   
5. Asyc call wait function error prompt - while using fragment 1.24 syntax
6. 
