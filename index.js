const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const userRoute = require('./router/user.route');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.json()); // for parsing application/json;
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    });
});

app.use('/users', userRoute);

app.use(express.static('public'));


app.listen(port, () => console.log(`Server listening on port ${port}`));