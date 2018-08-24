var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var CountryController = require('./api/CountryController');
app.use('/countries', CountryController);

module.exports = app;
