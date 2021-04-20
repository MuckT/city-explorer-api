const superagent = require('superagent');

const getWeather = async(req, res, next) => {
  try {
    const url = 'https://api.weatherbit.io/v2.0/forecast/daily';
    const query = {
      lat: req.query.lat,
      lon: req.query.lon,
      key: process.env.WEATHER_API_KEY
    };
    let weatherResponse = await superagent.get(url).query(query)
    let weather = weatherResponse.body.data.map(dailyWeather => new Forecast(dailyWeather));
    res.json(weather);
  } catch(err) {
    next(err);
  }
}

function Forecast(day) {
  this.date = day.datetime;
  this.description = `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description}`;
}

module.exports = getWeather;