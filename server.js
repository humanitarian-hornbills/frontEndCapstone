const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./config');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Got request');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params.id;
  axios.get(`${api.api}/products`, {
    headers: {
      'Authorization': api.TOKEN
    }
  })
    .then((data) => {
      console.log(data);
    })
    .catch(err => console.log(err))
});

app.listen(PORT, () => {
  console.log('Listening on port 3000.');
});
