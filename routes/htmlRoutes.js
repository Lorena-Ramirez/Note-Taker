//Include path package 
var path = require("path");

module.exports = function(app) {
//Set a path for notes.    
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  //Set catch all path that leads to index.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
