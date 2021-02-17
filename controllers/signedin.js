const express = require('express');
const passport = require('../config/ppConfig');
const router = express.Router();

const db = require('../models');
const textpost = require('../models/textpost');

router.get('/', (req, res) => {
    res.render('main-page');
});

module.exports = router;