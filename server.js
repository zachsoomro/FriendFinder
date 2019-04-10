// all the dependecies we need to run the program
var express = require("express");

//set variables for express and port
var app = express();
var PORT = process.env.PORT || 8080;

//express middleware from documentation
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require routes needed
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//require mysql, create var
// var mysql = require("mysql");

//test to see if port is working
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
