# Mongoose Checkpoint

This is a Node.js project demonstrating MongoDB database operations using Mongoose.

## Description

The project implements a series of CRUD (Create, Read, Update, Delete) operations for managing a "Person" collection in MongoDB. It includes setting up a database connection, defining a schema, and performing various database queries and modifications.

## Features

- MongoDB Atlas connection
- Person schema with name (required), age, and favoriteFoods
- Callback-based database operations
- Express server for running the application
- ES modules support

## Installation

1. Ensure Node.js is installed
2. Clone or download the project files
3. Run `npm install` to install dependencies
4. Create a `.env` file with your MongoDB Atlas URI:
   ```
   MONGO_URI=your_mongodb_atlas_uri_here
   ```
5. Start the server:
   - `npm start` for production
   - `npm run dev` for development with auto-restart

## Usage

The server runs on `http://localhost:3000`. The database operations are implemented in `controllers/personController.js` and can be tested by modifying `index.js`.

Available operations:

- Create and save a person
- Create multiple people
- Find people by name
- Find person by favorite food
- Find person by ID
- Update person's favorite foods
- Update person's age
- Delete person by ID
- Delete people by name
- Query with sorting, limiting, and field selection

## Project Structure

```
├── index.js                 # Main server file
├── config/
│   └── db.js               # Database connection
├── models/
│   └── Person.js           # Person schema
├── controllers/
│   └── personController.js # Database operations
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- dotenv: Environment variable loader
- nodemon: Development tool

## License

ISC
