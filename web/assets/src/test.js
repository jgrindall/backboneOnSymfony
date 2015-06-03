(function(){

	var pList, pView, addButton, saveButton, editButton, delButton, onAdd, onSave, onEdit, onDel;

	addButton = document.getElementById("addbutton");
	saveButton = document.getElementById("savebutton");
	editButton = document.getElementById("editbutton");
	delButton = document.getElementById("deletebutton");

	onAdd = function(e){
		e.stopPropagation();
		console.log("add!");
		pList.add({"name":"John"+Math.round(Math.random()*1000000), "age":Math.round(Math.random()*1000000), "description":"Fabulous"});
		pList.add({"name":"John"+Math.round(Math.random()*1000000), "age":Math.round(Math.random()*1000000), "description":"Fabulous"});
	};

	onSave = function(e){
		e.stopPropagation();
		console.log("saving...");
		pList.saveAll({"success":function(){
			console.log("saved, data is");
		}});
	};

	onDel = function(e){
		e.stopPropagation();
		console.log("deleting...");
		pList.removeRandom();
	};

	onEdit = function(e){
		e.stopPropagation();
		console.log("editing...");
		pList.editAll();
	};

	saveButton.addEventListener("click", onSave);
	addButton.addEventListener("click", onAdd);
	editButton.addEventListener("click", onEdit);
	delButton.addEventListener("click", onDel);

	pList = new ProductList();

	pView = new ProductListView({"collection": pList});
	console.log("fetching...");
	pList.fetch(
		{
			"success": function(collection, response){
				console.log("fetched", response);
			},
			"error": function(e){
				console.log("error", e);
			}
		}
	);

	document.body.appendChild(pView.el);


})();