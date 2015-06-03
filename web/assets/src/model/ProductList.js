var ProductList = Backbone.Collection.extend({
	"model":Product,
	"url":  "app_dev.php/products/"
});

ProductList.prototype.initialize = function(arr, options){
	if(options && options.url){
		this.url = options.url;
	}
	if(options && options.model){
		this.model = options.model;
	}
};

ProductList.prototype.editAll = function(options){
	this.each(function(model) {
    	model.set({"name":"Edward"+Math.round(Math.random()*1000000)});
	});
};

ProductList.prototype.saveAll = function(options){
	this.each(function(model) {
		console.log("saving...", model, model.id, model.get("id"), model.url);
    	model.save();
	});
	options.success();
};

ProductList.prototype.getRandom = function(){
	var model, index, len;
	len = this.length;
	if(len >= 1){
		index = Math.floor(Math.random()*len);
		model = this.at(index);
	}
	return model;
};

ProductList.prototype.removeRandom = function(){
	var model = this.getRandom();
	if(model){
		console.log("DESTROY", model);
		model.destroy();
	}
};

ProductList.prototype.getOldest = function(){
	var sorted;
	if(this.length === 0){
		return null;
	}
	sorted = this.sortBy(function(model){
		return model.get("age") || 0;
	});
	return sorted[sorted.length - 1];
};