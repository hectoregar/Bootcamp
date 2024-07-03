class Product {
constructor(name, amount, price, sku, supplier) {
    this._name = name;
    this._amount = amount;
    this._sku =sku;
    this._supplier= supplier;
    this._price = price;
  }
  
  get name() {
    return this._name;
  }
  
  set name(value) {
    this._name = value;
  }
  
  get amount() {
    return this._amount;
  }
  
  set amount(value) {
    this._amount = value;
  }
  get price() {
    return this._price;
  }
  
  set price(value) {
    this._price = value;
  }
  
  get sku() {
    return this._sku;
  }
  
  set sku(value) {
    this._sku = value;
  }

  get  supplier() {
    return this._supplier;
  }
  
  set supplier(value) {
    this._supplier = value;
  }
  displayInfo() {
    console.log(`Product Name: ${this._name}, Amount: ${this._amount}, Price: ${this._price},SKU: ${this._sku}, Supplier: ${this._supplier} `);
  }
  
  applyDiscount(discount) {
    this._price = this._price * (discount/100);
    console.log(`Price after ${discount} discount $${this._price}`);
  }
}

module.exports = Product;