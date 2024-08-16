const Product = require("./Product");
const Food = require("./Food");
const Electronic = require("./Electronic");
// Create an instance of Product
let product1 = new Product('Sansumg TV', '10 und', 100.50, '0987653','Panda Electronics');
product1.displayInfo();
product1.applyDiscount(10);

// Create an instance of Electronics
let electronics1 = new Electronic('Intelligent TV',  '9 und', 699.99, '0123567', 'LG', 1);
electronics1.displayInfo();
electronics1.displayWarranty();
electronics1.applyDiscount(15);

// Create an instance of Food
let food1 = new Food('Rice', '2.20 ', 1.20, 'Kg', '076543', '1 Kg', 'Granos', 'Exito');
food1.displayInfo();
food1.displayDetails();
food1.applyDiscount(20);