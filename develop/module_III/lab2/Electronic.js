const Product = require("./Product");

class Electronic extends Product {
  constructor(name, amount, price, sku, supplier, brand, warranty) {
    super(name, amount, price, sku,supplier);
    this._brand = brand;
    this._warranty = warranty;
  }
  
  get brand() {
    return this._brand;
  }
  
  set brand(value) {
    this._brand = value;
  }
  
  get warranty() {
    return this._warranty;
  }
  
  set warranty(value) {
    this._warranty = value;
  }
  
  displayWarranty() {
    console.log(`Warranty: ${this._warranty}`);
  }
  
  displayInfo() {
    super.displayInfo();
    console.log(`Brand: ${this._brand}, and Warranty: ${this._warranty}`);
  }
}

module.exports = Electronic;