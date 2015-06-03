var ProductView = Backbone.View.extend({
	"tagName": "li",
});

ProductView.prototype.initialize = function(options){
	this.model = options.model;
	this.model.on("change", this.onChange.bind(this));
	this.render();
};

ProductView.prototype.onChange = function(e){
	this.render();
};

ProductView.prototype.events = function(e){
	var obj = {
		"click button#delete": "onClickDelete",
		"click button#expand": "onClickExpand"
	};
	return obj;
};

ProductView.prototype.onClickDelete = function(){
	var ok = confirm("Are you sure?");
	if(ok){
		this.model.destroy();
	}
};

ProductView.prototype.showDescription = function(){
	var s = "<span class='details'>" + this.model.get("description") + "...</span>";
	this.$(".details").remove();
	this.$el.append(s);
};

ProductView.prototype.onClickExpand = function(){
	var s, options, that = this;
	this.showDescription();
	if(!this.model.isNew()){
		options = {
			"success":function(){
				that.showDescription();
			},
			"error":function(e){
				console.log("error ", e);
			}
		};
		this.model.fetch(options);
	}
};

ProductView.prototype.render = function(e){
	var name, s;
	name = this.model.get("name");
	s = name;
	s += "<button id='expand'>Expand</button>";
	s += "<button id='delete'>Delete</button>";
	this.$el.html(s);
	return this;
};

