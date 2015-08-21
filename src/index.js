var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Fake App v0.0.1\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
