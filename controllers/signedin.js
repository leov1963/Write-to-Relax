const express = require('express');
const passport = require('../config/ppConfig');
const router = express.Router();

const db = require('../models');

router.get('/', (req, res) => {
    res.render('main-page');
  });

  module.exports = router;