var express = require('express');
var router = express.Router();

var productsServices = require('../services/products');

/**
 * @method
 * @description This method use with receive request HTTP GET through middleware from Node.JS and expressJS and response
 * object Request. Use method or verb GET
 * @param req
 * @param res
 * @param next
 */
const getAllProductsOrderByPriceController = function (req, res, next) {
    productsServices.getAllProductsServiceOrderByPrice()
    .then(products => res.json(products))
    .catch(err => next(err));
};

/**
 * @description This definition section is responsible for indicating the methods or verbs that HTTP uses to receive
 * the Request and its respective Response.
 */
router.get('/', getAllProductsOrderByPriceController);

module.exports = router;
