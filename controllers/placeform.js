const express = require('express');
const passport = require('../config/ppConfig');
const router = express.Router();
const weather = require('weather-js')

const db = require('../models');
const textpost = require('../models/textpost');

router.get("/", async(req, res) => {
    try {
        const foundPlaces = await db.place.findAll()
        res.render("placeform", { places: foundPlaces })
    } catch(e) {
        console.log("********************************" + e)
    }
})

module.exports = router;