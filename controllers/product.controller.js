const db = require("../db");

module.exports.product = (req, res) => {
    let page = 1;
    if(req.query.page) {
        page = parseInt(req.query.page);
    }
    const numOfProduct = 16;
    const start = (page - 1) * numOfProduct;
    const end = page * numOfProduct;
    // const products = db.get('products').value().slice(start, end);
    const products = db.get('products').drop(start).take(numOfProduct).value();
    res.render('products/products.pug', {
        products: products,
        currentPage: page
    });
}