const db = require("../db");
const shortid = require('shortid');

module.exports.create = function(req, res, next) {
    res.render("transfer/create.pug", {
      csrfToken: req.csrfToken()
    });
}

module.exports.createPost = function(req, res, next) {
    const data = {
        account: req.body.account,
        amount: req.body.amount,
        id: shortid.generate(),
        userId: req.signedCookies.userId
    }
    db.get('transfers').push(data).write();
    res.redirect('/transfer/create');
}