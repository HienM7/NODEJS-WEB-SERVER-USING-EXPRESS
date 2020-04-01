const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');

router.get('/', controller.index);

router.get('/create', controller.create);

router.get('/view/:id', controller.view);

router.post('/create', controller.postCreate);

router.get("/search", controller.search);




module.exports = router;
 