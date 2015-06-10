(function(ns){

	"use strict";

	ns.ControlsView = Backbone.View.extend({
		"tagName": "ul",
		"id":"controls",
		"confirmMessage":"",
		"nameUtils":""
	});

	ns.ControlsView.prototype.initialize = function(){
		this.render();
	};

	ns.ControlsView.prototype.events = function(e){
		var obj = {
			"click button#addbutton": 		"onClickAdd",
			"click button#savebutton": 		"onClickSave",
			"click button#editbutton": 		"onClickEdit",
			"click button#deletebutton": 	"onClickDelete"
		};
		return obj;
	};

	ns.ControlsView.prototype.onClickAdd = function(e){
		e.stopPropagation();
		var toAdd = [];
		toAdd.push({"name":this.nameUtils.getName(), "age":Math.round(Math.random()*1000), "description":"Fabulous"});
		toAdd.push({"name":this.nameUtils.getName(), "age":Math.round(Math.random()*1000), "description":"Fabulous"});
		system.notify("ControlsView::add", toAdd);
	};

	ns.ControlsView.prototype.onClickSave = function(){
		console.log("saving...");
		var options = {};
		options.success = function(){
			window.alert("saved");
		};
		system.notify("ControlsView::save", options);
	};

	ns.ControlsView.prototype.onClickEdit = function(e){
		e.stopPropagation();
		console.log("editing...");
		system.notify("ControlsView::edit");
	};

	ns.ControlsView.prototype.onClickDelete = function(e){
		e.stopPropagation();
		console.log("deleting...");
		var ok = window.confirm(this.confirmMessage);
		if(ok){
			system.notify("ControlsView::delete");
		}
	};

	ns.ControlsView.prototype.render = function(e){
		var s ="";
		s += "<li><button class='btn btn-primary' id='addbutton'>Add</button></li>";
		s += "<li><button class='btn btn-success' id='savebutton'>Save</button></li>";
		s += "<li><button class='btn btn-info' id='editbutton'>Edit</button></li>";
		s += "<li><button class='btn btn-danger' id='deletebutton'>Delete</button></li>";
		this.$el.html(s);
		return this;
	};

})(BBDemo);

