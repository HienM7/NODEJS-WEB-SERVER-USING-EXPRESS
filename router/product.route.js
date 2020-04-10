const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');
const sessionMiddleware = require('../middleware/session.middleware');

router.get('/', sessionMiddleware, productController.product);


module.exports = router; 