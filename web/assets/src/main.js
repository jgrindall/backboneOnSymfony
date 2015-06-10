
(function(ns){

	var productListView, controlsView;

	system = new dijon.System();
	system.mapValue("system", system);
	system.mapOutlet("system");
	system.autoMapOutlets = true;
	system.mapValue("confirmMessage", 			"Delete - are you sure?");
	system.mapClass('productListView', 			ns.ProductListView);
	system.mapClass('controlsView', 			ns.ControlsView);
	system.mapClass('productView', 				ns.ProductView);
	system.mapSingleton("productList", 			ns.ProductList);
	system.mapHandler("App:startup", 			"productList", 				"init");
	system.mapHandler("ControlsView::add", 		"productList", 				"add");
	system.mapHandler("ControlsView::save", 	"productList", 				"saveAll");
	system.mapHandler("ControlsView::edit", 	"productList", 				"editAll");
	system.mapHandler("ControlsView::delete", 	"productList", 				"removeRandom");

	productListView = system.getObject("productListView");
	controlsView = system.getObject("controlsView");

	productListView.setCollection(system.getObject("productList"));
	document.body.appendChild(controlsView.el);
	document.body.appendChild(productListView.el);

	system.notify("App:startup");

})(BBDemo);
