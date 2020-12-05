
var savedNotes = require("../db/db");
const fs = require('fs');


module.exports = function(app) {

  //return saved notes as JSON
  app.get("/api/notes", function(req, res) {
    res.json(savedNotes);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    //assign an Id to each new note
    newNote.id = savedNotes.length.toString();
    
    //push new note into db SON file
    savedNotes.push(newNote);
  
  });

  
 
};
