// index.js - Main file for the Mongoose Checkpoint
const express = require("express");
const connectDB = require("./config/db");
const personController = require("./controllers/personController");

require("dotenv").config();

const app = express();

const port = 3000;

// Connect to MongoDB
connectDB();

// You can test functions here (uncomment to run)
// Example:
// personController.createAndSavePerson((err, data) => {
//   if (err) console.error(err);
//   else console.log('Saved person:', data);
// });

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Export all functions so they can be tested/used elsewhere
module.exports = personController;
