const Person = require("../models/Person");

// Create and Save a Record of a Model
const createAndSavePerson = async () => {
  try {
    const person = new Person({
      name: "John Doe",
      age: 30,
      favoriteFoods: ["Pizza", "Burger"],
    });

    return await person.save();
  } catch (err) {
    throw err;
  }
};

// Create Many Records with model.create()
const createManyPeople = async (arrayOfPeople) => {
  try {
    return await Person.create(arrayOfPeople);
  } catch (err) {
    throw err;
  }
};

// Use model.find() to Search Your Database
const findPeopleByName = async (personName) => {
  try {
    return await Person.find({ name: personName });
  } catch (err) {
    throw err;
  }
};

// Use model.findOne() to Return a Single Matching Document
const findOneByFood = async (food) => {
  try {
    return await Person.findOne({ favoriteFoods: food });
  } catch (err) {
    throw err;
  }
};

// Use model.findById()
const findPersonById = async (personId) => {
  try {
    return await Person.findById(personId);
  } catch (err) {
    throw err;
  }
};

// Perform Classic Updates by Find → Edit → Save
const findEditThenSave = async (personId) => {
  try {
    const person = await Person.findById(personId);
    person.favoriteFoods.push("hamburger");
    return await person.save();
  } catch (err) {
    throw err;
  }
};

// Perform New Updates on a Document Using findOneAndUpdate()
const findAndUpdate = async (personName) => {
  try {
    return await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );
  } catch (err) {
    throw err;
  }
};

// Delete One Document Using findByIdAndDelete
const removeById = async (personId) => {
  try {
    return await Person.findByIdAndDelete(personId);
  } catch (err) {
    throw err;
  }
};

// Delete Many Documents
const removeManyPeople = async () => {
  try {
    return await Person.deleteMany({ name: "Mary" });
  } catch (err) {
    throw err;
  }
};

// Chain Search Query Helpers
const queryChain = async () => {
  try {
    return await Person.find({ favoriteFoods: "burritos" })
      .sort({ name: 1 })
      .limit(2)
      .select("-age");
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  findEditThenSave,
  findAndUpdate,
  removeById,
  removeManyPeople,
  queryChain,
};
