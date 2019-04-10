//require path in order to connect html
var path = require("path");
//get routes for both the survey and home page
module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
