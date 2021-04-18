const superagent = require('superagent');

const getMovies = async(req, res, next) => {
  try {
    const url = 'https://api.themoviedb.org/3/search/movie?';
    const query = {
      query: req.query.location,
      api_key: process.env.MOVIE_API_KEY
    };
    let movieResponse = await superagent.get(url).query(query);
    let movies = movieResponse.body.results.map(movie => new Movie(movie));
    res.json(movies);
  } catch (err) {
    next(err);
  }
}

function Movie(movie) {
  this.title = movie.title;
  this.overview = movie.overview;
  this.average_votes = movie.vote_average;
  this.total_votes = movie.vote_count;
  this.image_url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  this.popularity = movie.popularity;
  this.released_on = movie.release_date;
}

module.exports = getMovies;