const shortid = require('shortid');
const User = require('../models/user.model');

module.exports.index = async (req, res) => {
  const users = await User.find();  
  res.render('./users/index', {
    users: users
  });
};

module.exports.create = (req, res) => {
    res.render("users/createUser");

};

module.exports.view = async (req, res) => {
    const id = req.params.id;
    const user = await User.find({_id: id});
    res.render('users/view', {
        user: user[0]
    });
};

module.exports.postCreate =  async (req, res) => { 
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split("/").slice(1).join("/");
    await User.create(req.body);
    res.redirect("/users");
};

module.exports.search =  async (req, res) => {

    const q = req.query.q;
    let usersFind = await User.find();
    usersFind = Array.from(usersFind).filter(x => x.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
    res.render('./users/index', {
        users: usersFind,
        q: q
    });
};