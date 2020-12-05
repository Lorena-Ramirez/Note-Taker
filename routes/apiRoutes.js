
var savedNotes = require("../db/db");
const fs = require('fs');


module.exports = function(app) {

  //return saved notes as JSON
  app.get("/api/notes", function(req, res) {
    res.json(savedNotes);
  });

  //Adding a new note
  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    //assign an Id to each new note
    newNote.id = savedNotes.length.toString();
    
    //push new note into db JSON file
    savedNotes.push(newNote);

    // Write a JSON file so update with new data
    fs.writeFile("./db/db.json", JSON.stringify(savedNotes),(err) => {
      if (err) {
        console.log(err); 
        res.sendStatus(404);
      } 
      else { 
          console.log("Success!");
          res.sendStatus(200);
      }
    });  
  });

  
 
};
