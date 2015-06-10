(function(ns){

	"use strict";

	ns.Product = Backbone.Model.extend({

	});

	ns.Product.prototype.validate = function(obj){
		if(!obj.name){
			return "No name?";
		}
		else if(!obj.age){
			return "No age?";
		}
		else if(!obj.description){
			return "No description?";
		}
	};

	ns.Product.prototype.defaults = function(){
		return {
			"name":"John",
			"age":"36",
			"quantity":0
		};
	};

	ns.Product.prototype.buy = function(){
		var q = parseInt(this.get("quantity"), 10) || 0;
		this.set({"quantity" : (q + 1)});
	};

	ns.Product.prototype.initialize = function(){

	};

})(BBDemo);




