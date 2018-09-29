var express = require('express');
var router = express.Router();
var Profile = require('../models').profile
//var Profile = require('../mock/profile')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendStatus(200)
});

 
module.exports = router;
