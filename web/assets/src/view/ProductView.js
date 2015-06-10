(function(ns){

	"use strict";

	ns.ProductView = Backbone.View.extend({
		"tagName": "li",
		"confirmMessage":""
	});

	ns.ProductView.prototype.initialize = function(options){
		if(options && options.model){
			this.setModel(options.model);
		}
	};

	ns.ProductView.prototype.setModel = function(model){
		if(this.model){
			throw new Error("I already have a model");
		}
		this.model = model;
		this.model.on("change", this.onChange.bind(this));
		this.render();
	};

	ns.ProductView.prototype.onChange = function(e){
		this.render();
	};

	ns.ProductView.prototype.events = function(e){
		var obj = {
			"click button#delete": "onClickDelete",
			"click button#expand": "onClickExpand"
		};
		return obj;
	};

	ns.ProductView.prototype.onClickDelete = function(){
		console.log("onClickDelete");
		var ok = window.confirm(this.confirmMessage);
		if(ok){
			this.model.destroy();
		}
	};

	ns.ProductView.prototype.showDescription = function(){
		var s;
		this.$(".details").remove();
		s = "<span class='details'>" + this.model.get("description") + "...</span>";
		this.$el.append(s);
	};

	ns.ProductView.prototype.onClickExpand = function(){
		var s, options, that = this;
		this.showDescription();
		if(!this.model.isNew()){
			options = {};
			options.success = function(){
				that.showDescription();
			};
			options.error = function(e){
				console.log("error ", e);
			};
			this.model.fetch(options);
		}
	};

	ns.ProductView.prototype.render = function(e){
		var name, s;
		name = this.model.get("name");
		s = name;
		s += "<button id='expand'>Expand</button>";
		s += "<button id='delete'>Delete</button>";
		this.$el.html(s);
		return this;
	};

})(BBDemo);



