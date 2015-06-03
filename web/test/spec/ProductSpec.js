describe("Product", function() {

    var product;

    beforeEach(function(){
        product = new Product();
    });

    it("should be able to set", function(){
        product.set({"name":"Peter"});
        expect(product.get("name")).toEqual("Peter");
    });

    it("should be able to set defaults", function(){
        expect(product.get("name")).toEqual("John");
    });

    it("description is required", function(){
        expect(product.isValid()).toBeFalsy();
        product.set({"description":"How nice...."});
        expect(product.isValid()).not.toBeFalsy();
    });

    it("buys correctly", function(){
        expect(product.get("quantity")).toEqual(0);
        product.buy();
        expect(product.get("quantity")).toEqual(1);
        product.buy();
        expect(product.get("quantity")).toEqual(2);
    });

});
