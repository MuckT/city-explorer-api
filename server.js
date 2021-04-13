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
  let lat = request.query.lat || '';
  let lon = request.query.lon || '';
  let parsed = [];
  weatherData.data.forEach(item => parsed.push(new ForeCast(item.weather.description, item.valid_date)));
  response.json(parsed);
});

// Listen on Port
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

// Forecast Constructor
function ForeCast(description, date) {
  this.description = description;
  this.date = date;
}