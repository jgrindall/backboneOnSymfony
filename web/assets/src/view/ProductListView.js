var ProductListView = Backbone.View.extend({
	"tagName": "ul",
	"className": "myclass",
	"id":"ulid",
	"attributes":{
		"data-genre":"history"
	}
});

ProductListView.prototype.initialize = function(options){
	this.collection = options.collection;
	this.collection.on("change add remove", this.onChange.bind(this));
	this.render();
};

ProductListView.prototype.onChange = function(e){
	this.render();
};

ProductListView.prototype.render = function(e){
	var i, len, docFrag, name, s, child, model;
	this.$el.empty();
	this.children = [];
	len = this.collection.length;
	docFrag = document.createDocumentFragment();
	for(i = 0; i < len; i++){
		model = this.collection.at(i);
		child = new ProductView({"model":model});
		this.children.push(child);
		name = this.collection.at(i).get("name");
		docFrag.appendChild(child.render().el);
	}
	this.el.appendChild(docFrag);
};

