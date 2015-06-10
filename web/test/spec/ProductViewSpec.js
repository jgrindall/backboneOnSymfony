describe("ProductListView", function() {

    var listItem, model;

    beforeEach(function(){
        model = new Product({"name":"Peter"});
        listItem = new ProductView({"model":model});
    });

    it("tag name should be li", function(){
        expect(listItem.tagName).toEqual("li");
    });

    it("should have rendered the model", function(){
        expect(listItem.el.innerHTML).toContain("Peter");
    });

    it("should listen to the model", function(){
        model.set({"name":"Paul"});
        expect(listItem.el.innerHTML).toContain("Paul");
    });

    it("should confirm delete ok", function(){
       spyOn(window, "confirm");
       listItem.$("#delete").trigger("click");
       expect(window.confirm).toHaveBeenCalled();
    });

    it("should delete ok", function(){
       spyOn(window, "confirm").and.returnValue(true);
       spyOn(model, 'destroy');
       listItem.$("#delete").trigger("click");
       expect(window.confirm).toHaveBeenCalled();
       expect(model.destroy).toHaveBeenCalled();
    });

    it("should expand ok", function(){
        var d = model.get("description");
        spyOn(model, 'fetch').and.callFake(function(options){
            options.success();
        });
        listItem.$("#expand").trigger("click");
        if(!model.isNew()){
            expect(model.fetch).toHaveBeenCalled();
        }
        expect(listItem.el.innerHTML).toContain(d);
    });

});
