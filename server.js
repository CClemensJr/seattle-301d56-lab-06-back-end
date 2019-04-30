'use strict';

/****************
 * Configure Middleware
 */
  require('dotenv').config();

  const express = require('express');
  const app = express();
  const cors = require('cors');
  const port = process.env.PORT || 3000;

  app.use(cors());



/****************
 * Create Routes
 */
  app.get('/location', getLocation);
  app.get('/weather', getWeather);



/****************
 * Callback Functions
 */
  function getLocation(request, response) {
    const query = request.query.data;
    const geoData = require('./data/geo.json');

    response.send(new Location(query, geoData.results[0]));
  }

  function getWeather(request, response) {
    let weatherData = require('./data/darksky.json');
    let weatherObjects = [];

    weatherData.daily.data.forEach((day) => weatherObjects.push(new Weather(day)));

    response.send(weatherObjects);
  }


/****************
 * Object Constructors
 */
  function Location(query, data) {
    this.search_query = query;
    this.formatted_query = data.formatted_address;
    this.latitude = data.geometry.location.lat;
    this.longitude = data.geometry.location.lng;
  }

  function Weather(day) {
    this.forecast = day.summary;
    this.time = new Date(day.time * 1000).toString().slice(0, 15);
  }



app.listen(port,() => console.log(`Listening on port ${port}`));
