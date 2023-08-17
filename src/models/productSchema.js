const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        reference: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        available_stock: {
            type: Number,
            require: true
        },
        category: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        smd: {
            type: Boolean,
            require: false
        }
    }
);

const Product = mongoose.model('product', productSchema);
module.exports = Product;