describe("ProductListView", function() {

    var listView, collection;

    beforeEach(function(){
        collection = new ProductList();
        collection.add({"name":"John"});
        collection.add({"name":"Andrew", "age":50});
        listView = new ProductListView({"collection":collection});
    });

    it("tag name should be ul", function(){
        expect(listView.tagName).toEqual("ul");
    });

    it("should have rendered two models", function(){
        expect(listView.$("li").length).toEqual(2);
    });

    it("should respond to add and delete", function(){
        var m = collection.remove(collection.at(0));
        expect(listView.$("li").length).toEqual(1);
        collection.add(m);
        expect(listView.$("li").length).toEqual(2);
    });

});
