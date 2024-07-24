const Discount = require("./decorator");
const elements = require("./products.json");
const Product = require("./product");
const Subject = require("./subject");
const Observer = require("./Observer");

let productFilter = elements.filter(element => element.quantity > 50);

let productsClass = productFilter.map(productJson => {
    return new Product(productJson.id, productJson.name,productJson.product_type, productJson.quantity, productJson.sku, productJson.provider, productJson.price);
});
 

productsClass = productsClass.map(productDiscount => {
    return new Discount(productDiscount);
});


let productDiscount = productsClass.map(productsClass=> {
    return productsClass.getPrice();
}) 

const subject = new Subject();
const user1 = new Observer("Usuario Uno");
const user2 = new Observer("Usuario Dos");
const user3 = new Observer("Usuario Tres");

subject.subscribe(user1);
subject.subscribe(user2);
subject.subscribe(user3);

subject.notify(JSON.stringify(productDiscount));

