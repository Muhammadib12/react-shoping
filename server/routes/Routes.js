const express = require('express');
const Product = require('../models/ProductModal');

const router = express.Router();

//to get all data
router.get('/api/products',async(req,res)=>{
    const products = await Product.find();
    res.send(products);
})

//post data
router.post('/api/products',async(req,res) => {
    const newProduct = new Product(req.body);
    const saveP = await newProduct.save();
    res.send(saveP);
})

//delete element
router.delete('/api/products/:id',async(req,res) =>{
    const deleteP = await Product.findByIdAndDelete(req.params.id);
    res.send(deleteP);
})

module.exports = router;