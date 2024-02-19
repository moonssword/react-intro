// server.js
const express = require('express');
const mongoose = require('mongoose');
const { MainPageCard, Card, SubCategory}  = require('./Card');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://localhost:27017/reactapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

app.use(express.json());

app.get('/api/main-cards', async (req, res) => {
    try {
      const mainCards = await MainPageCard.find().populate('children');
      res.json(mainCards);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  app.get('/api/cards', async (req, res) => {
    try {
      const cards = await Card.find().populate('children');
      res.json(cards);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  app.get('/api/sub-categories', async (req, res) => {
    try {
      const subCategories = await SubCategory.find();
      res.json(subCategories);
    } catch (err) {
      res.status(500).send(err);
    }
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
