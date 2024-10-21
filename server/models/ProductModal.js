const mongoose = require('mongoose');
const Schema = require('../schema/ProductSchema')



const Product = mongoose.model('product',Schema);

module.exports = Product;