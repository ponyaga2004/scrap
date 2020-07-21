var request = require("request");
var  cheerio = require("cheerio");

var URL = 'https://steamcommunity.com/market/listings/730/Shattered%20Web%20Case';

request(URL, function (err, res, body) {
    if (err) throw err;
    console.log(body);
    console.log(res.statusCode);
});
