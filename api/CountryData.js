var Request = require("request");
var dataAddress = "https://restcountries.eu/rest/v2/all";

Request.get(dataAddress, (err, response, body) => {
    if (err) {
        return console.dir(err);
    }
    countryData.countries = JSON.parse(body);
});

let countryData = {
    countries : []
};

module.exports = countryData;