// Card.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  icon: String,
});

const Card = mongoose.model('Card', cardSchema, 'portalCards');

module.exports = Card;
