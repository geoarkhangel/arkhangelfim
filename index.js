
// Import NPM modules
var express = require('express');
var path = require('path');

// Initialize app
var app = express();

// Define folder locations for css, js, and assets
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/img', express.static(path.join(__dirname, 'img')));
// Define endpoints
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
})

// Start listener on port 8000
var listener = app.listen(8000, function() {
  console.log('Started Express server on port: ' + listener.address().port);
})












