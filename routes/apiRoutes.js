
var savedNotes = require("../db/db");
module.exports = function(app) {

  //return saved notes as JSON
  app.get("/api/notes", function(req, res) {
    res.json(savedNotes);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    savedNotes.push(newNote);
    console.log(newNote);
  });

  


    
};
