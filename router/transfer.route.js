const express = require('express');
const router = express.Router();
// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true });


const authMiddleware = require('../middleware/auth.middleware');
const controller = require('../controllers/transfer.controller');

router.get('/create', authMiddleware.requireAuth, controller.create);
router.post('/create', controller.createPost);

module.exports = router; 