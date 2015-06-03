var Product = Backbone.Model.extend({

});

Product.prototype.validate = function(obj){
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

Product.prototype.defaults = function(){
	return {
		"name":"John",
		"age":"36",
		"quantity":0
	};
};

Product.prototype.buy = function(){
	var q = parseInt(this.get("quantity"), 10) || 0;
	this.set({"quantity" : (q + 1)});
};

Product.prototype.initialize = function(){

};