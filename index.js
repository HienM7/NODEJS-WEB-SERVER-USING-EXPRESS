require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const csrf = require('csurf');


const userRoute = require('./router/user.route');
const authRoute = require('./router/auth.route');
const productRoute = require('./router/product.route');
const cartRoute = require('./router/cart.route');
const transferRoute = require('./router/transfer.route');
const sessionLocals = require('./middleware/sessionLocals.middleware');
const csrfProtection = csrf({ cookie: true });

const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.json()); // for parsing application/json;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionLocals);

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use(csrfProtection);
app.use('/transfer', transferRoute);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));