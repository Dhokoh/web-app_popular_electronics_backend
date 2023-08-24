const product = require('../models/productSchema');

const getProducts = async (req, res) => {
    const all_products = await product.find({});
    if (all_products == []){
        res.send("No hay productos para mostrar");
    }else{
        res.json(all_products);
    }
    
};

const addProduct = async (req, res) => {
    const { name, reference, price, available_stock, category, image, smd } = req.body;
    const new_product = await product.create({
        name,
        reference,
        price,
        available_stock,
        category,
        image,
        smd
    });
    res.json(new_product);
    console.log("A new product has been added to the database");
};

const deleteProduct = async(req, res) => {
    console.log("This feature has not been implemented yet.");
};

const updateProduct = async (req, res) => {
    const {reference} = req.params.reference;
    const target_product = await product.findByIdAndUpdate(reference);
    if (!target_product){
        res.status(500, {
            message: "Update target product not found",
        });
    }else{
        const product_update = await product.findByIdAndUpdate(target_product._id);
        res.status(200, {
            message: `Product ${reference} has been updated successfully`
        });
    }
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
