require('dotenv').config();

const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const userRoute = require('./router/user.route');
const authRoute = require('./router/auth.route');
const productRoute = require('./router/product.route');
const cartRoute = require('./router/cart.route');


const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.json()); // for parsing application/json;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use((req, res, next) => {
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
});

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));