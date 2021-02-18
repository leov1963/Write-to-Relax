const express = require('express');
const passport = require('../config/ppConfig');
const router = express.Router();
const weather = require('weather-js')

const db = require('../models');
const textpost = require('../models/textpost');

router.get('/:zipcode', (req, res) => {
  console.log(req.params.zipcode)
  console.log("****************************")
  console.log(req.body.zipcode)
  const zipcode = req.params.zipcode
  const { id } = req.user.get(); 
  weather.find({search:zipcode, degreeType: "f"}, function(err, result) {
    if(err) console.log(err)
    // const myWeather 
    console.log(result)
    const temperature = result[0].current.temperature
    const skytext = result[0].current.skytext
    const zipcode = result[0].location.zipcode
    res.render('main-page', { id, temperature, skytext, zipcode });
  })
});

module.exports = router;