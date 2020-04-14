const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  account: String,
  amount: String,
  id: String,
  userId: String
});

const Transfer = mongoose.model('Transfer', transferSchema, 'transfers');

module.exports = Transfer;
