var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Recipes Schema
var shortUrlSchema = new Schema({
  original_url: String,
  short_url: String
});

var ShortUrl = (module.exports = mongoose.model('ShortUrl', shortUrlSchema));

// // Get Recipes
// module.exports.getRecipes = function(callback, limit) {
//   Recipe.find(callback).limit(limit);
// };

// Get URL
module.exports.getUrl = function(shortUrl, callback) {
  ShortUrl.find(shortUrl, callback);
};

// Add URL
module.exports.addUrl = function(shortUrl, callback) {
  ShortUrl.create(shortUrl, callback);
};

// // Delete by ID
// module.exports.deleteRecipe = function(id, callback) {
//   var query = { _id: id };
//   Recipe.remove(query, callback);
// };
