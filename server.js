'use strict';

/****************
 * Configure Middleware
 */
  require('dotenv').config();

  const express = require('express');
  const app = express();
  const cors = require('cors');
  const port = process.env.PORT || 3000;
  // let locationObject;
  // let weatherArray = [];
  app.use(cors());
  app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));


/****************
 * Create Routes
 */
  app.get('/location', getLocation);
  app.get('/weather', getWeather);



/****************
 * Callback Functions
 */
  

/****************
 * Object Constructors
 */
  // function Location(data) {
  //   this.formatted
  // }
//   function Location (search_query, formatted_query, latitude, longitude){
//   this.search_query = search_query;
//   this.formatted_query = formatted_query;
//   this.latitude = latitude;
//   this.longitude = longitude;
// }
// function Weather (forecast, time){
//   this.summary = forecast;
//   this.time = time;
//   weatherArray.push(this);
// }

// app.get('/location', (request, response) => {
//   let dataFile = require('./data/geo.json');
//   let search_query = dataFile.results[0].address_components[0].long_name;
//   let formatted_query = dataFile.results[0].formatted_address;
//   let latitude = dataFile.results[0].geometry.location.lat;
//   let longitude = dataFile.results[0].geometry.location.lng;
//   locationObject = new Location(search_query, formatted_query, latitude, longitude);
//   response.status(200).send(locationObject);

// });

// app.get('/weather', (request, response) => {
//   weatherArray = [];
//   let dataFile = require('./data/darksky.json');
//   let weatherForecast = dataFile.daily.data[0];
//   // for(let i =0; i < weatherForecast.length; i++){
//   //   new Weather(weatherForecast.summary, new Date(weatherForecast.time));
//   // }
//   response.status(200).send(weatherForecast);
// });



app.listen(port,() => console.log(`Listening on port ${port}`));
