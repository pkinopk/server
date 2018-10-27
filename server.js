const express = require('express');
const cors = require('cors');
const dns = require('dns');
let app = express();
var mongoose = require('mongoose');
const service = require('./game-of-thrones.service');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors(corsOptions));

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.listen(process.env.PORT || 8000);
console.log('Running locally at port 8000...');

app.get('/', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.json({ status: 'Working!' });
});

// Connect to Mongoose
mongoose.connect(
  'mongodb://heroku_server_user:heroku220187@ds141623.mlab.com:41623/heroku_l5hn95g1'
);
var db = mongoose.connection;
var Recipe = require('./models/recipe');
var ShortUrl = require('./models/short-url');

// ------------------------------- Game of Thrones Wiki -------------------------------
app.get('/got-wiki/characterlist/', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.json(service.characters);
});

app.post('/got-wiki/addcharacter', function(req, res) {
  res.header('Content-Type', 'application/json');
  if (!service.isDuplicated(req.body)) {
    service.characters.push(req.body);
    res.send(service.characters);
  } else {
    res.send({ error: 'Duplicated character' });
  }
});

app.put('/got-wiki/updatecharacter/:id', function(req, res) {
  console.log('body', req.body);
  if (req.params.id >= 0 && service.characters.length > req.params.id) {
    service.characters[req.params.id] = req.body;
    res.send('{"success": true }');
  } else {
    res.send('{"success": false }');
  }
  console.log(service.characters);
});
// ------------------------------- Game of Thrones Wiki -------------------------------

// ----------------------------------- Recipe Book  -----------------------------------
app.get('/recipe-book/recipelist', function(req, res) {
  Recipe.getRecipes(function(err, recipes) {
    if (err) {
      console.log(err);
    }
    res.json(recipes);
  });
});

app.post('/recipe-book/addrecipe', function(req, res) {
  var recipe = req.body;
  Recipe.addRecipe(recipe, function(err, recipe) {
    console.log(req);
    if (err) {
      console.log(err);
    }
    res.json(recipe);
  });
});

app.delete('/recipe-book/deleterecipe/:id', function(req, res) {
  var id = req.params.id;
  Recipe.deleteRecipe(id, function(err, recipe) {
    if (err) {
      console.log(err);
    }
    res.json(recipe);
  });
});

app.get('/recipe-book/retrieverecipe/:id', function(req, res) {
  var id = req.params.id;
  Recipe.getRecipeById(id, function(err, recipe) {
    if (err) {
      console.log(err);
    }
    res.json(recipe);
  });
});

// ----------------------------------- Recipe Book  -----------------------------------

// ---------------------------------- URL Shortener -----------------------------------
app.get('/shorturl/:id', function(req, res) {
  var id = req.params.id;
  ShortUrl.getUrl({ short_url: id }, function(err, response) {
    if (err) {
      console.log(err);
    } else if (response.length === 0) {
      res.json({ error: 'No short url found for given input' });
    } else {
      console.log(response[0].original_url);
      res.header('Content-Type', 'text/html');
      res.send(
        '<head><meta http-equiv="refresh" content="0; URL=' +
          response[0].original_url +
          '"></head>'
      );
    }
  });
});

app.post('/shorturl/add', function(req, res) {
  dns.lookup(req.body.original_url, function(err) {
    if (err) {
      console.log(err);
      res.json({ error: 'invalid URL' });
    } else {
      //TODO: Check if original link already exist
      ShortUrl.countDocuments(function(err, count) {
        if (err) {
          console.log(err);
        } else {
          var url = { original_url: req.body.original_url, short_url: count };
          ShortUrl.addUrl(url, function(err, url) {
            // console.log(req.body);
            if (err) {
              console.log(err);
            }
            console.log(url);
          });
          res.json(url);
        }
      });
    }
  });
});
// ---------------------------------- URL Shortener -----------------------------------
