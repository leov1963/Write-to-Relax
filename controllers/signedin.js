const express = require('express');
const passport = require('../config/ppConfig');
const router = express.Router();

const db = require('../models');
const textpost = require('../models/textpost');

router.get('/', (req, res) => {
  const { id } = req.user.get(); 
  res.render('main-page', { id });
});

module.exports = router;