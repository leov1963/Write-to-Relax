const express = require('express');
const passport = require('../config/ppConfig');
const router = express.Router();
const weather = require('weather-js')

const db = require('../models');
const textpost = require('../models/textpost');

router.get('/:zipcode', (req, res) => {
  const zipcode = req.params.zipcode
  const { id } = req.user.get(); 
  weather.find({search:zipcode, degreeType: "f"}, function(err, result) {
    if(err) console.log(err)
    // const myWeather 
    console.log(result)
    const temperature = result[0].current.temperature
    const skytext = result[0].current.skytext
    const zipcode = result[0].location.zipcode
    const name = result[0].location.name
    res.render('main-page', { id, temperature, skytext, zipcode, name });
  })
});

router.post('/:zipcode', (req, res) => {
  console.log(req.body.zipcode + "************************")
  console.log(req.params)
  try{
      db.place.destroy({
        where: {
          zipcode: req.params.zipcode
        }
      })
      res.redirect('/placeform');
  } catch(error) {
      console.log(error)
  }
});

module.exports = router;