sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"

], function (BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.demo.nav.controller.NotFound", {
		onInit: function () {
			let oRouter, oTarget;

			oRouter = this.getRouter();
			oTarget = oRouter.getTarget("notFound");
			oTarget.attachDisplay((oEvent) => {
				this._oData = oEvent.getParameter("data");
			}, this);
		},
		/**
		 * @override override the parent's onNavBack (inherited from BaseController)
		 */
		onNavBack: function() {			
			// in some cases we could display a certain target when the back button is pressed
			if (this._oData && this._oData.fromTarget) {
				this.getRouter().getTargets().display(this._oData.fromTarget);
				delete this._oData.fromTarget;
				return;
			}

			// call the parent's onNavBack
			BaseController.prototype.onNavBack.apply(this, arguments);
		}
	});
});