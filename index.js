// index.js - Main file for the Mongoose Checkpoint
const express = require("express");
const connectDB = require("./config/db");
const personController = require("./controllers/personController");

require("dotenv").config();

const app = express();

const port = 3000;

// Connect to MongoDB
connectDB();

// Test functions (run once when server starts)
const runTests = async () => {
  try {
    const savedPerson = await personController.createAndSavePerson();
    console.log("Saved person:", savedPerson);
  } catch (err) {
    console.error(err);
  }
};

runTests();

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Export all functions so they can be tested/used elsewhere
module.exports = personController;
