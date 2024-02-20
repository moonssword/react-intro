// Card.js
const mongoose = require('mongoose');

const mainPageSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  icon: String,
  categories: Array,
});
const MainPageCard = mongoose.model('MainPageCard', mainPageSchema, 'mainPageCards');

const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  icon: String,
  parent: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MainPageCard'
  }],
  categories: Array,
});
const Card = mongoose.model('Card', cardSchema, 'portalCards');


module.exports = { MainPageCard, Card };
