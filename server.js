// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 8080;

// Import files
var htmlRoutes = require('./FriendFinder/routing/htmlRoutes.js');
var apiRoutes = require('./FriendFinder/routing/apiRoutes');

app.use(express.static('FriendFinder/public'));
htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});