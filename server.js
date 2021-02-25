const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const axios = require('axios');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.send('Got request');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params.id;
  axios.get(`/details/${id}`)
    .then((data) => {
      res.send(data);
    });
});

app.listen(PORT, () => {
  console.log('Listening on port 3000.');
});
