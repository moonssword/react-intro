// server.js
const express = require('express');
const mongoose = require('mongoose');
const Card = require('./Card');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://localhost:27017/reactapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

app.use(express.json());

app.get('/api/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
