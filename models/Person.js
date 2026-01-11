// models/Person.js
const mongoose = require("mongoose");

/**
 * Person Schema definition
 * name: required string
 * age: optional number
 * favoriteFoods: array of strings
 */
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  favoriteFoods: {
    type: [String],
    default: [],
  },
});

// Create and export the model
module.exports = mongoose.model("Person", personSchema);
