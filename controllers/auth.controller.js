const User = require('../models/user.model');

module.exports.login = (req, res) => {
    if(req.signedCookies.userId) {
        res.redirect('/users');
        return;
    } 
        res.render('auth/login.pug');
    
};

module.exports.postLogin = async (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    const user = await User.find({email: email});

    if(!user) {
        res.render("auth/login", {
            errors: [
                "Email does not exist"
            ],
            values: req.body
        });
        return;
    }
    if(user[0].pass !== pass) {
        res.render('auth/login', {
            errors: [
                "Password is incorrect"
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userId', user.id, {
        signed: true
    });
    res.redirect("/users");

};
