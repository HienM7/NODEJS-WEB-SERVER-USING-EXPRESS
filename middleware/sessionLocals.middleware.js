const db = require('../db');


module.exports = (req, res, next) => {
    if(req.signedCookies.sessionId) {
        const cart = db.get('sessions')
        .find({id: req.signedCookies.sessionId})
        .value().cart;
        let count = 0;        
        for (let key in cart) {
            count += cart[key];
        }
        res.locals.countCart = count;
    }
    next();
};