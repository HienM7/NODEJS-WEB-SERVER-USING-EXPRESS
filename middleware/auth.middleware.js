const db = require('../db');

module.exports.requireAuth = (req, res, next) => {
    if(!req.cookies.userId) {
        res.redirect('/auth/login');
        return;
    }
    if(!db.get('users').find({id: req.cookies.userId}).value()) {
        res.redirect('/auth/login');
        return;
    }
    
    next();
};

