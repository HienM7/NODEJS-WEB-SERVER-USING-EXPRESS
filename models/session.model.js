const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  id: String,
  cart: Object
});

const Session = mongoose.model('Session', sessionSchema, 'sessions');

module.exports = Session;
