const { Router } = require('express');
const product_router = Router();
const { getProducts, addProduct, deleteProduct, updateProduct } = require('../controllers/products.controller')


//localhost:$PORT/productos
product_router.get('/', getProducts);

//localhost:$PORT/productos
//admin required
product_router.post('/', addProduct);

//localhost:$PORT/productos/{referencia}
//admin required
product_router.delete('/:referencia', deleteProduct);

//localhost:$PORT/productos/{referencia}
//admin required
product_router.put(':/referencia', updateProduct);

module.exports = product_router;