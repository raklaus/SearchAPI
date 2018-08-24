var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var countryData = require('./CountryData');

router.get('/', function (req, res) {
    res.status(200).json(countryData.countries);
});

module.exports = router;
