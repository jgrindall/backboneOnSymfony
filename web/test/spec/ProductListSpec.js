describe("ProductList", function() {

    var productList;

    beforeEach(function(){
        productList = new ProductList();
    });

    it("should be empty", function(){
        expect(productList.length).toEqual(0);
    });

    it("should add and remove ok", function(){
        var p = new Product();
        productList.add({"name":"John"});
        expect(productList.length).toEqual(1);
        productList.add(new Product({"age":10}));
        expect(productList.length).toEqual(2);
        productList.add(p);
        expect(productList.length).toEqual(3);
        productList.remove(p);
        expect(productList.length).toEqual(2);
        productList.reset();
        expect(productList.length).toEqual(0);
    });

    it("should find the oldest", function(){
        expect(productList.getOldest()).toBeNull();
        productList.add({"name":"John", "age":10});
        productList.add({"name":"John", "age":100});
        productList.add({"name":"John", "age":50});
        expect(productList.getOldest().get("age")).toEqual(100);
    });

});
