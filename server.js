//Set up dependencies
const express = require("express");

//Set up basic properties for express server
const app = express();

const PORT = process.env.PORT || 8080;

// Let's express handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Point server to route files
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });