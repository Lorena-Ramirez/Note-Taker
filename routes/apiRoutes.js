
var savedNotes = require("../db/db");

// const fs = require("fs"); 
// console.log(savedNotes);

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(savedNotes);
  });

    
};
