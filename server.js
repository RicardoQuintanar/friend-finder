// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 8080;

// Import files
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

app.use(express.static('app/public'));
htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});