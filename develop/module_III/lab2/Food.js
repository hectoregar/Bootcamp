const Product = require("./Product");

class Food extends Product {
  constructor(name, amount, price, sku, supplier, weight,cluster ) {
    super(name, amount, price, sku, supplier); // Call the parent class constructor
    this._weigth = weight;
    this._cluster = cluster;
  }
  
  // Method specific to Food to display food details
  displayDetails() {
    console.log(`Weight: ${this._weigth}, Cluster: ${this._cluster}`);
  }
  
  // Overriding displayInfo method
  displayInfo() {
    super.displayInfo(); // Call the parent class method
    console.log(`Weigth: ${this._weigth}, Cluster: ${this._cluster}`);
  }
}

module.exports = Food;