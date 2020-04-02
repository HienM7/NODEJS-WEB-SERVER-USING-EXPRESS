const db = require("../db");

module.exports.login = (req, res) => {
    if(req.cookies.userId) {
        res.redirect('/users');
        return;
    } 
        res.render('auth/login.pug');
    
};

module.exports.postLogin = (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    const user = db.get("users").find({email: email}).value();

    if(!user) {
        res.render("auth/login", {
            errors: [
                "Email does not exist"
            ],
            values: req.body
        });
        return;
    }
    if(user.pass !== pass) {
        res.render('auth/login', {
            errors: [
                "Password is incorrect"
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userId', user.id);
    res.redirect("/users");

};
