// Card.js
const mongoose = require('mongoose');

const mainPageSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  icon: String,
  children: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }],
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
  children: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory'
  }],
});
const Card = mongoose.model('Card', cardSchema, 'portalCards');

const subCategorySchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  icon: String,
  parent: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }],
  children: [],
});
const SubCategory = mongoose.model('SubCategory', subCategorySchema, 'subCategoryCards');

module.exports = { MainPageCard, Card, SubCategory };
