const express = require('express');
const cors = require('cors');

require('dotenv').config();

const weatherData = require('./data/weather.json');

const app = express();

// Cors Fix
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (request, resposne) => {
  response.send('Hello World!');
})

app.get('/weather', (request, response) => {
  response.json(weatherData);
});

// Listen on Port
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));