const express = require('express')
const customerController = require('./core/customer/controller')
const productController = require('./core/products/productController')
const routes = express.Router()

routes.post('/customer', customerController.create)
routes.get('/customer', customerController.findAll)
routes.put('/customer/:id', customerController.update)
routes.delete('/customer/:id', customerController.destroy)


routes.post('/products', productController.create)
routes.get('/products', productController.findAll)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.destroy)
routes.get('/products/:id', productController.findOneProduct)

routes.post('/productsFavorites', favoriteController.create)
// routes.get('/productsFavorites', favoriteController.findAll)
// routes.delete('/productsFavorites/:id', favoriteController.destroy)

module.exports = routes

