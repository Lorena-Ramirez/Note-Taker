
var savedNotes = require("../db/db");
module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(savedNotes);
  });

    
};
