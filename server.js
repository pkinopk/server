const express = require('express');
const cors = require('cors');
let app = express();
const service = require('./game-of-thrones.service');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors(corsOptions));

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.json({ status: 'Working!' });
});

app.get('/characterlist/', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.json(service.characters);
});

app.post('/addcharacter', function(req, res) {
  res.header('Content-Type', 'application/json');
  if (!service.isDuplicated(req.body)) {
    service.characters.push(req.body);
    res.send(service.characters);
  } else {
    res.send({ error: 'Duplicated character' });
  }
});

app.listen(process.env.PORT || 8000);
console.log('Running locally at port 8000...');
