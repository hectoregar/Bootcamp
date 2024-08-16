class Product {
    constructor(id, name, product_type, quantity, sku, provider, price) {
        this.id = id;
        this.name = name;
        this.product_type = product_type;
        this.quantity = quantity;
        this.sku = sku;
        this.provider = provider;
        this.price = price;
        this.discount = 0;
    }
}
module.exports = Product