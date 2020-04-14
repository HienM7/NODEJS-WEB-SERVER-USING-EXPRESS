const db = require('../db');
const User = require('../models/user.model');

module.exports.requireAuth = async (req, res, next) => {
    
    if(!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }
    const users = await User.find({id: req.signedCookies.userId});
    if(!users) {
        res.redirect('/auth/login');
        return;
    }
    
    next();
};

