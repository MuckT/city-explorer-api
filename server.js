const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
require('dotenv').config();

const errorHandler = require('./handlers/errors');
const getWeather = require('./handlers/weather');
const getMovies = require('./handlers/movies');

const app = express();
const PORT = process.env.PORT || 3001;

// Cors Fix
app.use(cors());

// Error Handling
app.use(errorHandler);

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/weather', getWeather);

app.get('/movies', getMovies);

// Listen on Port
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
