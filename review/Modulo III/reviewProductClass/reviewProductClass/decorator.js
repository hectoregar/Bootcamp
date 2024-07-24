class Discount {
    constructor(product) {
        this.product = product;
    }

    getPrice(){
        this.product.discount = this.product.price - ((Math.random() * this.product.price) / 100);
        return this.product;
    }
    
}

module.exports = Discount;
