const db = require('../db');

module.exports.requireAuth = (req, res, next) => {
    
    if(!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }
    if(!db.get('users').find({id: req.signedCookies.userId}).value()) {
        res.redirect('/auth/login');
        return;
    }
    
    next();
};

