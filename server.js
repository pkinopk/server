const express = require('express');
const cors = require('cors');
let app = express();
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
app.get('recipe-book/recipelist', function(req, res) {
  Recipe.getRecipes(function(err, recipes) {
    if (err) {
      console.log(err);
    }
    res.json(recipes);
  });
});

app.post('recipe-book/addrecipe', function(req, res) {
  var recipe = req.body;
  Recipe.addRecipe(recipe, function(err, recipe) {
    console.log(req);
    if (err) {
      console.log(err);
    }
    res.json(recipe);
  });
});

app.delete('recipe-book/deleterecipe/:id', function(req, res) {
  var id = req.params.id;
  Recipe.deleteRecipe(id, function(err, recipe) {
    if (err) {
      console.log(err);
    }
    res.json(recipe);
  });
});

app.get('recipe-book/retrieverecipe/:id', function(req, res) {
  var id = req.params.id;
  Recipe.getRecipeById(id, function(err, recipe) {
    if (err) {
      console.log(err);
    }
    res.json(recipe);
  });
});

// ----------------------------------- Recipe Book  -----------------------------------
