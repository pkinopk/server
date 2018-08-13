const express = require('express');
const cors = require('cors');
let app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get('/charactersList/', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.json({ name: 'Paulo Kinopk' });
});

app.get('/', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.json({ status: 'Working!' });
});

app.listen(process.env.PORT || 8000);
console.log('Running locally at port 8000...');
