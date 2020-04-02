const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');

const controller = require('../controllers/auth.controller');

router.get('/login',  controller.login);

router.post('/login', controller.postLogin);

module.exports = router;
 