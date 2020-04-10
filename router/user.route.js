const express = require('express');
const router = express.Router();
const multer  = require('multer');

const upload = multer({ dest: './public/uploads/' });
const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', authMiddleware.requireAuth, controller.index);

router.get('/create', authMiddleware.requireAuth, controller.create);

router.get('/view/:id', authMiddleware.requireAuth, controller.view);

router.post('/create',
    authMiddleware.requireAuth,
    upload.single('avatar'),
    validate.postCreate,
    controller.postCreate
);

router.get("/search", authMiddleware.requireAuth, controller.search);




module.exports = router;
 