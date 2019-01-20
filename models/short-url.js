var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// URL Schema
var shortUrlSchema = new Schema({
  original_url: String,
  short_url: String
});

var ShortUrl = (module.exports = mongoose.model('ShortUrl', shortUrlSchema));

// Get URL
module.exports.getUrl = function(shortUrl, callback) {
  ShortUrl.find(shortUrl, callback);
};

// Add URL
module.exports.addUrl = function(shortUrl, callback) {
  ShortUrl.create(shortUrl, callback);
};
