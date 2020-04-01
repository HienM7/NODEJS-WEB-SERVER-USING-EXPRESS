const shortid = require('shortid');
const db = require("../db");

module.exports.index = (req, res) => {
    res.render('./users/index', {
        users: db.get("users").value()
    });
};

module.exports.create = (req, res) => {
    res.render("users/createUser");

};

module.exports.view = (req, res) => {
    const id = req.params.id;
    const user = db.get("users").find({id: id}).value();
    res.render('users/view', {
        user: user
    });
};

module.exports.postCreate =  (req, res) => {
    req.body.id = shortid.generate();
    db.get("users").push(req.body).write();
    res.redirect("/users");
};

module.exports.search =  (req, res) => {

    const q = req.query.q;
    const usersFind = db.get('users').value().filter(x => x.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
    res.render('./users/index', {
        users: usersFind,
        q: q
    });
};