const db = require("../db");
const shortid = require('shortid');
const Transfer = require('../models/transfer.model');


module.exports.create = function(req, res, next) {
    res.render("transfer/create.pug", {
      csrfToken: req.csrfToken()
    });
}

module.exports.createPost = async function(req, res, next) {
    const data = {
        account: req.body.account,
        amount: req.body.amount,
        id: shortid.generate(),
        userId: req.signedCookies.userId
    }
    const transfers = await Transfer.find();
    await transfers.push(data).save();
    res.redirect('/transfer/create');
}