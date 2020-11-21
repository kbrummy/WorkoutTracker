// Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// db mongo
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/WorkoutTracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Creating Routes
require("./routes/apiRoutes");
require("./routes/htmlRoutes");

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}!`);
});
