// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure Express
var app = express();
var PORT = process.env.PORT || 8080;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Middleware for parsing incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Begin listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});
