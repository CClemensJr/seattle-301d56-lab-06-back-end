'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;
app.use(cors());

function Location (search_query, formatted_query, latitude, longitude){
  this.search_query = search_query;
  this.formatted_query = formatted_query;
  this.latitude = latitude;
  this.longitude = longitude;
}

app.get('/location', (request, response) => {
  let dataFile = require('./data/geo.json');
  let search_query = dataFile.results[0].address_components[0].long_name;
  let formatted_query = dataFile.results[0].formatted_address;
  let latitude = dataFile.results[0].geometry.location.lat;
  let longitude = dataFile.results[0].geometry.location.lng;


  ///Users/aantber/Documents/codefellows/301/seattle-301d56/lab-06-back-end/data/geo.json
  ///Users/aantber/Documents/codefellows/301/seattle-301d56/lab-06-back-end/server.js

  response.status(200).send(new Location(search_query, formatted_query, latitude, longitude));

});

// app.get('/location', (request, response) => {
//   let LongNLats = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well Trained'
//   }
//   response.status(200).json(airplanes);
// });

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

app.listen(port,() => console.log(`Listening on port ${port}`));
