var Promise = require('bluebird');
var products = require('../mocks/products.json');

/**
 * @type {{error: string}}
 */
var error = {"error": "Bad Request"};

/**
 * @method
 * @description This method use for get all list of products
 * @returns {Promise<*>}
 */
const getAllProductsServiceOrderByPrice = async function() {
  return new Promise(function(resolve, reject) {
    resolve(products.sort((a,b) => b.price  - a.price )); //ToDo: remove when the DB implemented
    reject(error);
  });
};

/**
 * @description Export services for use in the controller or routes * @type {getUserByEmail: (function(*): Promise)}

 */
module.exports = {
  getAllProductsServiceOrderByPrice
};

