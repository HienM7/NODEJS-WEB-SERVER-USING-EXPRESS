const db = require("../db");
const Session = require('../models/session.model');

module.exports.addToCart = async function(req, res) {
    const productId = req.params.productId;
    const sessionId = req.signedCookies.sessionId;

    if(!sessionId) {
        res.redirect('/products');
        return;
    }
    let count = await Session.find({id: sessionId})
    count.get('cart.' + productId, 0);
    
    let session = await Session.find({id: sessionId})
    await session.set('cart.' + productId, count + 1).save();
    res.redirect('/products');
}