
(function(ns){

	"use strict";

	ns.ProductList = Backbone.Collection.extend({
		"model":ns.Product,
		"url":  "app_dev.php/products/"
	});

	ns.ProductList.prototype.init = function(){
		this.fetch({
			"success": function(collection, response){
				console.log("fetched", response);
			},
			"error": function(e){
				console.log("error", e);
			}
		});
	};

	ns.ProductList.prototype.initialize = function(arr, options){
		if(options && options.url){
			this.url = options.url;
		}
		if(options && options.model){
			this.model = options.model;
		}
	};

	ns.ProductList.prototype.editAll = function(options){
		this.each(function(model) {
	    	model.set({"name":"Edward"+Math.round(Math.random()*1000000)});
		});
	};

	ns.ProductList.prototype.saveAll = function(options){
		this.each(function(model) {
	    	model.save();
		});
		options.success();
	};

	ns.ProductList.prototype.getRandom = function(){
		var model, index, len;
		len = this.length;
		if(len >= 1){
			index = Math.floor(Math.random()*len);
			model = this.at(index);
		}
		return model;
	};

	ns.ProductList.prototype.removeRandom = function(){
		var model = this.getRandom();
		if(model){
			console.log("delete", model);
			model.destroy();
		}
	};

	ns.ProductList.prototype.getOldest = function(){
		var sorted;
		if(this.length === 0){
			return null;
		}
		sorted = this.sortBy(function(model){
			return model.get("age") || 0;
		});
		return sorted[sorted.length - 1];
	};

})(BBDemo);


